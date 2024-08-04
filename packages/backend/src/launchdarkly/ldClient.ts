import * as LaunchDarkly from "@launchdarkly/node-server-sdk";

import envConfig, { EnvConfig } from "utils/envConfig";
import { FEATURE_FLAG_KEY } from "launchdarkly/featureFlag";

class LdClient {
  private ldClient: LaunchDarkly.LDClient | null = null;

  /**
   * The LDClient must be singleton
   * Read more:
   **/
  private getClient = async (): Promise<LaunchDarkly.LDClient> => {
    const sdkKey = envConfig.get(EnvConfig.LD_SERVER_SDK);
    const client = LaunchDarkly.init(sdkKey);
    await client.waitForInitialization({
      timeout: 5000,
    });
    return client;
  };

  evaluate = async (featureFlagKey: string, value: string) => {
    const projectKey = envConfig.get(EnvConfig.LD_PROJECT_KEY);
    try {
      const resp = await fetch(`https://app.launchdarkly.com/api/v2/flags/${projectKey}/${featureFlagKey}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json; domain-model=launchdarkly.semanticpatch",
          Authorization: envConfig.get(EnvConfig.LD_AUTHORIZATION),
        },
        body: JSON.stringify({
          environmentKey: envConfig.get(EnvConfig.LD_ENVIRONMENT_KEY),
          instructions: [{ kind: value === "true" ? "turnFlagOn" : "turnFlagOff" }],
        }),
      });

      if (resp.ok) {
        const responseBody = await resp.json();
        // Based on the response body when return 2xx status
        return (responseBody as { environments: { test: { on: boolean } } }).environments["test"].on;
      } else {
        const errorData = await resp.json();
        console.error("Error:", errorData);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Failed to update feature flag. ", error);
      }
    }
  };

  allFlags = () => {};

  getFlagValue = async (
    key: FEATURE_FLAG_KEY,
    user?: LaunchDarkly.LDContext,
    defaultValue: boolean = false,
  ): Promise<LaunchDarkly.LDFlagValue> => {
    let flagValue: LaunchDarkly.LDFlagValue;
    if (!this.ldClient) this.ldClient = await this.getClient();
    if (!user) {
      user = {
        key: "anonymous",
      };
    }
    flagValue = await this.ldClient.variation(key, user, defaultValue);
    console.log("flagValue: ", flagValue);
    return flagValue;
  };
}

const ldClient = new LdClient();
export default ldClient;

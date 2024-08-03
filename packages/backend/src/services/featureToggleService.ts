import process from "process";

import FeatureToggle from "database/models/featureToggle";
import FeatureToggleRepository from "repositories/featureToggleRepository";
import { FeatureToggleResponse } from "models/responses/featureToggleResponse";
import envConfig from "utils/envConfig";

type Toggle = FeatureToggleResponse;

class FeatureToggleService {
  // FeatureToggles
  private static readonly FEATURE_TOGGLES: Toggle[] = [
    {
      name: "enable_add_new_product",
      value: false,
      description: "Show/Hide the button 'Add new product' in the list products page",
    },
    {
      name: "enable_edit_product",
      value: false,
      description: "Enable/Disable the button 'Edit' in a product card",
    },
    {
      name: "enable_delete_product",
      value: false,
      description: "Enable/Disable the button 'Delete' in a product card",
    },
  ];

  // The method used to sync up the database with the feature toggles from code
  private static fromEnv(): Record<string, string> {
    const PREFIX = "feature-toggle.";
    const featureToggle: Record<string, string> = {};
    for (const k in process.env) {
      if (k.startsWith(PREFIX)) {
        const key = k.substring(PREFIX.length);
        featureToggle[key] = envConfig.get(k);
      }
    }
    return featureToggle;
  }

  static async syncUpDatabase(): Promise<void> {
    const toggleInEnv = this.fromEnv();
    const togglesInDB = await FeatureToggleRepository.allToggles();
    const mapKeys = this.FEATURE_TOGGLES.map((toggle) => toggle.name);
    const dbKeys = togglesInDB.map((toggle) => toggle.getDataValue("name"));

    // Check the toggles are in the defined env files
    // Add the toggle in the table if it is not existed in
    for (const [k, v] of Object.entries(toggleInEnv)) {
      if (!dbKeys.includes(k)) {
        const featureToggle = FeatureToggle.build({ name: k, value: v });
        await FeatureToggleRepository.save(featureToggle);
      }
    }

    // Clean up the out-date toggles from the database based on defined map and env files
    for (const featureToggle of togglesInDB) {
      const name = featureToggle.getDataValue("name");
      if (!toggleInEnv.hasOwnProperty(name) && !mapKeys.includes(name)) {
        await featureToggle.destroy();
        console.log(`Toggle named [${featureToggle.getDataValue("name")}] has been deleted`);
      }
    }
  }

  static async allToggles(): Promise<FeatureToggleResponse[]> {
    const togglesInDB = await FeatureToggleRepository.allToggles();
    const dbKeys = togglesInDB.map((featureToggle) => featureToggle.getDataValue("name"));

    const togglesInEnv = this.fromEnv();
    console.log("togglesInEnv: ", togglesInEnv);

    // Load all the toggle based on the defined map and env
    const toggleResponses: FeatureToggleResponse[] = [];
    this.FEATURE_TOGGLES.forEach((toggle) => {
      if (dbKeys.includes(toggle.name) && togglesInEnv.hasOwnProperty(toggle.name)) {
        toggle.value = togglesInDB.find((featureToggle) => featureToggle.getDataValue("name") === toggle.name)?.getDataValue("value") ?? ""
        toggleResponses.push(toggle);
      }
    });

    // Load the missing toggles defined in Map, but they're existing in the environment
    const responseKeys = toggleResponses.map((toggle) => toggle.name);
    for (const [k, v] of Object.entries(togglesInEnv)) {
      if (!responseKeys.includes(k)) {
        toggleResponses.push({
          name: k,
          value: v,
          description: "",
        });
      }
    }

    return toggleResponses;
  }

  static async update(name: string, value: string): Promise<FeatureToggle> {
    if (!(await FeatureToggleRepository.byName(name))) {
      throw new Error(`Toggle named [${name}] was not found!`);
    }
    return await FeatureToggleRepository.upsert(name, value);
  }
}

export default FeatureToggleService;

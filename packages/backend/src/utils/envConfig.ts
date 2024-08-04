import process from "process";
import * as dotenv from "dotenv";
import * as path from "path";
import * as fs from "fs";

type EnvTypes =
  // Server
  | "SERVER_PORT"
  | "NODE_ENV"

  // Database
  | "DB_CONNECTION_STRING"
  | "DB_NAME"
  | "DB_PASS"
  | "DB_USERNAME"
  | "DB_SERVER"
  | "DB_PORT"
  | "DB_SCHEMA"

  // LaunchDarkly
  | "LD_SERVER_SDK"
  | "LD_PROJECT_KEY"
  | "LD_AUTHORIZATION"
  | "LD_ENVIRONMENT_KEY"

export class EnvConfig {
  private static INSTANCE: EnvConfig | null = null;

  private constructor() {
    const defaultEnvPath = path.resolve(__dirname, "../../.env");

    // Determine the environment
    const env = process.env.NODE_ENV || "local";

    // Construct the path to the appropriate environment-specific .env file
    const envSpecificPath = path.resolve(__dirname, `../../.env.${env}`);

    EnvConfig.loadEnvFiles([defaultEnvPath, envSpecificPath]);
  }

  static getInstance(): EnvConfig {
    if (!this.INSTANCE) {
      this.INSTANCE = new EnvConfig();
    }
    return this.INSTANCE;
  }

  get(key: EnvTypes, defaultValue?: string) {
    return process.env[key] ?? defaultValue ?? "";
  }

  getBoolFeatureToggle(key: string) {
    return process.env[key] === "true";
  }

  static loadEnvFiles(filePaths: string[]) {
    filePaths.forEach((filePath) => {
      if (fs.existsSync(filePath)) {
        const envConfig = dotenv.parse(fs.readFileSync(filePath));
        for (const k in envConfig) {
          process.env[k] = envConfig[k];
        }
        console.log(`Loaded ${filePath}`);
      } else {
        console.warn(`File not found: ${filePath}`);
      }
    });
  }
}

export default EnvConfig;

import process from "process";
import * as dotenv from "dotenv";
import * as path from "path";
import * as fs from "fs";

export class EnvConfig {
  static readonly DB_CONNECTION_STRING = "DB_CONNECTION_STRING";
  static readonly DB_NAME = "DB_NAME";
  static readonly DB_USERNAME = "DB_USERNAME";
  static readonly DB_PASS = "DB_PASS";
  static readonly DB_SERVER = "DB_SERVER";
  static readonly DB_PORT = "DB_PORT";
  static readonly DB_SCHEMA = "DB_SCHEMA";
  static readonly SERVER_PORT = "SERVER_PORT";
  static readonly LD_SERVER_SDK = "LD_SERVER_SDK";
  static readonly LD_PROJECT_KEY = "LD_PROJECT_KEY";
  static readonly LD_AUTHORIZATION = "LD_AUTHORIZATION";
  static readonly LD_ENVIRONMENT_KEY = "LD_ENVIRONMENT_KEY";

  constructor() {
    const defaultEnvPath = path.resolve(__dirname, "../../.env");

    // Determine the environment
    const env = process.env.NODE_ENV || "local";

    // Construct the path to the appropriate environment-specific .env file
    const envSpecificPath = path.resolve(__dirname, `../../.env.${env}`);

    EnvConfig.loadEnvFiles([defaultEnvPath, envSpecificPath]);
  }

  get(key: string, defaultValue?: string) {
    return process.env[key] ?? defaultValue ?? "";
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

const envConfig = new EnvConfig();

export default envConfig;

import * as process from "process";

class EnvironmentConfiguration {
  static INSTANCE: EnvironmentConfiguration;

  private constructor() {
    this.configEnv();
  }

  static getInstance(): EnvironmentConfiguration {
    if (!this.INSTANCE) {
      this.INSTANCE = new EnvironmentConfiguration();
    }
    return this.INSTANCE;
  }

  private configEnv() {
    // Load the config env paths
  }

  get(name: string, defaultValue?: string): string {
    if (defaultValue) {
      return process.env[name] ?? defaultValue;
    }
    return process.env[name] ?? "";
  }
}

export default EnvironmentConfiguration;

import * as process from "process";

class Environment {
  static INSTANCE: Environment;

  private constructor() {
    this.configEnv();
  }

  static getInstance(): Environment {
    if (!this.INSTANCE) {
      this.INSTANCE = new Environment();
    }
    return this.INSTANCE;
  }

  private configEnv() {
    // Load the config env paths
  }

  getEnv(name: string, defaultValue?: string): string {
    if (defaultValue) {
      return process.env[name] ?? defaultValue;
    }
    return process.env[name] ?? "";
  }
}

export default Environment;

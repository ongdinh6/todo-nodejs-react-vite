export class EnvConfig {
  static readonly VITE_LD_CLIENT_SIDE = "VITE_LD_CLIENT_SIDE";

  constructor() {}

  get(key: string, defaultValue?: string) {
    return import.meta.env[key] ?? defaultValue ?? "";
  }
}

const envConfig = new EnvConfig();
export default envConfig;

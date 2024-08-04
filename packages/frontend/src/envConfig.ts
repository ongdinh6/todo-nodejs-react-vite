export type EnvKeys = "VITE_LD_CLIENT_SIDE_ID";

export class EnvConfig {
  static get(key: EnvKeys, defaultValue?: string) {
    return import.meta.env[key] ?? defaultValue ?? "";
  }
}

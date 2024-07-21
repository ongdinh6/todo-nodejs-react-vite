interface FeatureToggle {
  name: string;
  value: boolean | string | object;
  description?: string;
}

export type { FeatureToggle };

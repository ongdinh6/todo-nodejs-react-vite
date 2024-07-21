type FeatureToggleValue = string | boolean | string[] | object;

export interface FeatureToggleResponse {
  name: string;
  value: FeatureToggleValue;
  description: string | null;
}

import { FeatureToggle } from "apis/toggle/type.ts";
import axiosInstance from "axiosInstance";

class FeatureToggleAPI {
  private readonly BASE_URL = "/api/feature-toggles";

  async loadAll(): Promise<FeatureToggle[]> {
    return await axiosInstance.get(this.BASE_URL);
  }

  async update(name: string, value: string): Promise<FeatureToggle> {
    return await axiosInstance.put(`${this.BASE_URL}/${name}/${value}`);
  }
}

export default FeatureToggleAPI;

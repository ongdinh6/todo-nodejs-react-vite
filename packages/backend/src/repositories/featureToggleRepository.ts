import FeatureToggle from "database/models/featureToggle";

class FeatureToggleRepository {
  static async allToggles(): Promise<FeatureToggle[]> {
    return await FeatureToggle.findAll();
  }

  static async upsert(name: string, value: string): Promise<FeatureToggle> {
    const [instance, created] = await FeatureToggle.upsert({ name, value });
    if (created) {
      console.log("Create new toggle with name: ", name);
    } else {
      console.log("Update the toggle has name: ", name, " with value: ", value);
    }
    return instance;
  }

  static async save(featureToggle: FeatureToggle): Promise<FeatureToggle> {
    return await featureToggle.save();
  }

  static async byName(name: string): Promise<FeatureToggle | null> {
    return await FeatureToggle.findOne({ where: { name } });
  }
}

export default FeatureToggleRepository;

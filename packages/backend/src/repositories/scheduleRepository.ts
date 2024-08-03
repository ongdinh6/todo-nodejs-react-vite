import Scheduler from "database/models/scheduler";

class ScheduleRepository {
  static readonly currentSchedule = async (): Promise<Scheduler[]> => {
    return await Scheduler.findAll({
      order: [["updatedDate", "DESC"]]
    });
  }

  static readonly upsert = async (newSchedule: Scheduler, old: string): Promise<Scheduler> => {
    const [instance, created] = await Scheduler.upsert({
      type: old,
      cronTime: newSchedule.cronTime,
      description: newSchedule.description,
      updatedDate: newSchedule.updatedDate,
    });
    if (created) {
      console.log("Created new schedule");
    } else {
      console.log("Updated an schedule");
    }
    return instance;
  }
}

export default ScheduleRepository;

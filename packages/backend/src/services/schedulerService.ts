import * as schedule from "node-schedule";

import { Scheduled } from "annotations/scheduled";
import ScheduleRepository from "repositories/scheduleRepository";
import Scheduler from "database/models/scheduler";

class SchedulerService {
  private cronTime: schedule.Spec = "*/5 * * * * *";
  private indexingJob: schedule.Job | null = null;

  constructor() {
    this.runAsSchedule();
  }

  runAsSchedule = () => {
    if (this.indexingJob) {
      this.indexingJob.cancel();
    }

    this.indexingJob = schedule.scheduleJob(this.cronTime, () => {
      this.syncUpDatabase();
    });
  };

  //  This method will be run at scheduled
  @Scheduled("*/5 * * * * *")
  syncUpDatabase = () => {
    console.log("Task executed after scheduled: ", new Date().toLocaleTimeString());
  };

  reschedule = (cronTime: string) => {};

  setOrUpdateSchedule = async (newTime: string, oldTime: string) => {
    try {
      const scheduler = Scheduler.build({
        cronTime: newTime,
        type: "indexing",
        updatedDate: new Date(),
        description: "",
      });
      const newSchedule = await ScheduleRepository.upsert(scheduler, oldTime);
      this.reschedule(newTime);
      return newSchedule;
    } catch (e) {
      console.error(e);
    }
  };
}

export default SchedulerService;

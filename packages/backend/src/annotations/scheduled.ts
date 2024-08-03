import * as schedule from "node-schedule";

/**
 * A Method Decorator is declared just before a method declaration.
 * The decorator is applied to the Property Descriptor for the method, and can be used to observe, modify, or replace a method definition.
 * A method decorator cannot be used in a declaration file, on an overload, or in any other ambient context (such as in a declare class).
 *
 * Docs: https://www.typescriptlang.org/docs/handbook/decorators.html#method-decorators
 **/
export function Scheduled(cronTime: string)  {
 return function (target: any, propertyKey: string) {
    console.log("target: ", target)
    console.log("propertyKey: ", propertyKey)
    const method = Object.getOwnPropertyDescriptor(target, propertyKey);

   const job = schedule.scheduleJob(cronTime, () => {
     console.log("Task executed")
   });
 }
}

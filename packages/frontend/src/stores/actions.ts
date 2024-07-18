export class TimesAction {
  readonly type = "Update action";
  payload: string;
  constructor(payload: string) {
    this.payload = payload;
  }
}

export type AppActions = TimesAction;

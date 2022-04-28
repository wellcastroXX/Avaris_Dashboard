import { IToSignStateModel } from './to-sign.store';

export class FetchToSignList {
  public static readonly type = '[ToSign/Fetch] Fetch sign list';
  constructor() { }
}

export class FetchToSignSuccess {
  public static readonly type = '[ToSign/Success] Fetch sign success';
  constructor(public payload: IToSignStateModel) { }
}

export class FetchToSignError {
  public static readonly type = '[ToSign/Error] Fetch sign error';
  constructor(public error: any) { }
}
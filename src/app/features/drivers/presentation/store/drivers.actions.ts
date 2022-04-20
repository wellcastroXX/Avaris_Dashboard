import { IUpdateDriverLock } from './../../domain/entities/driver-lock.entity';
import { IDriversStateModel } from './drivers.store';


export class FetchDriversList {
  public static readonly type = '[Drivers/Fetch] Fetch drivers list';
  constructor() { }
}

export class FetchUpdateDriverLock {
  public static readonly type = '[Drivers/Fetch] Fetch update driver lock';
  constructor(public payload: IUpdateDriverLock) { }
}

export class FetchDriversSuccess {
  public static readonly type = '[Drivers/Success] Fetch drivers success';
  constructor(public payload: IDriversStateModel) { }
}

export class FetchDriversError {
  public static readonly type = '[Drivers/Error] Fetch drivers error';
  constructor(public error: any) { }
}
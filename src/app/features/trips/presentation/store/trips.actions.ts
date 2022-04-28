import { ITripsStateModel } from './trips.store';

export class FetchTripsList {
  public static readonly type = '[Trips/Fetch] Fetch trips list';
  constructor() { }
}

export class FetchTripsSuccess {
  public static readonly type = '[Trips/Success] Fetch trips success';
  constructor(public payload: ITripsStateModel) { }
}

export class FetchTripsError {
  public static readonly type = '[Trips/Error] Fetch trips error';
  constructor(public error: any) { }
}
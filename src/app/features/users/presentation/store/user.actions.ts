import { IUsersStateModel } from './user.store';

export class FetchUsersList {
  public static readonly type = '[Users] Fetch users list';
}
export class FetchUsersSuccess {
  public static readonly type = '[Users/Success] Fetch users success';
  constructor(public payload: IUsersStateModel) { }
}
export class FetchUsersError {
  public static readonly type = '[Users/Error] Fetch users error';
  constructor(public error: any) { }
}
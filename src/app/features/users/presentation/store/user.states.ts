// import { IPaginationResponse } from './../../../../../@common/directives/entities/pagination.entity';
// import { PaymentsScheduleDeleteUseCase } from './../../domain/usecases/payments-schedule-delete.usecase';
// import { PaymentsScheduleCreateUseCase } from './../../domain/usecases/payments-schedule.create.usecase';
// import { PaymentsScheduleEditUseCase } from './../../domain/usecases/payments-schedule-edit.usecase';
// import { FetchPaymentsScheduleList, FetchPaymentsScheduleSucess, FetchPaymentsScheduleError, PaymentsScheduleEdit, PaymentsScheduleCreate, PaymentsScheduleDelete } from './payments-schedule.actions';
// import { PaymentsScheduleListUseCase } from './../../domain/usecases/fetch-payments-schedule-list.usecase';
// import { Injectable } from "@angular/core";
// import { Action, Selector, State, StateContext } from "@ngxs/store";
// import { catchError, mergeMap, tap } from 'rxjs/operators';
// import { IPaginationRequest } from 'src/@common/directives/entities/pagination.entity';

// export interface IPaymentsScheduleStateModel {
//   dataList: [];
//   error: any;
//   isDataLoading: boolean;
//   paginationRequest: IPaginationRequest,
//   paginationResponse: IPaginationResponse,
// }

// @State<IPaymentsScheduleStateModel>({
//   name: 'paymentsSchedule',
//   defaults: {
//     dataList: [],
//     error: null,
//     isDataLoading: false,
//     paginationRequest: null,
//     paginationResponse: null,
//   }
// })
// @Injectable()
// export class PaymentsScheduleStates {
//   constructor(
//     private _paymentsScheduleListUseCase: PaymentsScheduleListUseCase,
//     private _paymentsScheduleEditUseCase: PaymentsScheduleEditUseCase,
//     private _paymentsScheduleCreateUseCase: PaymentsScheduleCreateUseCase,
//     private _paymentsScheduleDeleteUseCase: PaymentsScheduleDeleteUseCase
//   ) { }

//   @Selector()
//   public static getPaymentsScheduleList(state: IPaymentsScheduleStateModel) {
//     return state;
//   }

//   @Action(FetchPaymentsScheduleList)
//   public fetchPaymentsScheduleList(ctx: StateContext<IPaymentsScheduleStateModel>, { paginationRequest, keySearch }) {
//     return this._paymentsScheduleListUseCase.execute(paginationRequest, keySearch).pipe(
//       tap(() => {
//         ctx.patchState({
//           isDataLoading: false,
//           paginationRequest: paginationRequest
//         });
//       }),
//       mergeMap((value: IPaymentsScheduleStateModel) => {
//         return ctx.dispatch(new FetchPaymentsScheduleSucess(value));
//       }),
//       catchError((error) => {
//         return ctx.dispatch(new FetchPaymentsScheduleError(error));
//       })
//     )
//   }

//   @Action(PaymentsScheduleEdit)
//   public paymentsScheduleEdit(ctx: StateContext<IPaymentsScheduleStateModel>, { payload }) {
//     return this._paymentsScheduleEditUseCase.execute(payload).pipe(
//       tap(() => {
//         ctx.patchState({
//           isDataLoading: false,
//         });
//         return ctx.dispatch(new FetchPaymentsScheduleList(ctx.getState().paginationRequest, null));
//       }),
//       catchError((error) => {
//         ctx.patchState({
//           error: error
//         });
//         throw error;
//       })
//     )
//   }

//   @Action(PaymentsScheduleCreate)
//   public paymentsScheduleCreate(ctx: StateContext<IPaymentsScheduleStateModel>, { payload }) {
//     return this._paymentsScheduleCreateUseCase.execute(payload).pipe(
//       tap(() => {
//         ctx.patchState({
//           isDataLoading: false,
//         });
//         return ctx.dispatch(new FetchPaymentsScheduleList(ctx.getState().paginationRequest, null));
//       }),
//       catchError((error) => {
//         ctx.patchState({
//           error: error
//         });
//         throw error;
//       })
//     )
//   }

//   @Action(PaymentsScheduleDelete)
//   public paymentsScheduleDelete(ctx: StateContext<IPaymentsScheduleStateModel>, { payload }) {
//     return this._paymentsScheduleDeleteUseCase.execute(payload).pipe(
//       tap(() => {
//         ctx.patchState({
//           isDataLoading: false,
//         });
//         return ctx.dispatch(new FetchPaymentsScheduleList(ctx.getState().paginationRequest, null));
//       }),
//       catchError((error) => {
//         ctx.patchState({
//           error: error
//         });
//         throw error;
//       })
//     )
//   }

//   @Action(FetchPaymentsScheduleSucess)
//   public fetchPaymentsScheduleSucess(
//     ctx: StateContext<IPaymentsScheduleStateModel>,
//     { payload }: FetchPaymentsScheduleSucess
//   ) {
//     ctx.setState({
//       dataList: payload.dataList,
//       error: null,
//       isDataLoading: false,
//       paginationRequest: ctx.getState().paginationRequest,
//       paginationResponse: payload.paginationResponse,
//     });
//   }

//   @Action(FetchPaymentsScheduleError)
//   public fetchPaymentsScheduleError(
//     ctx: StateContext<IPaymentsScheduleStateModel>,
//     { error }: FetchPaymentsScheduleError
//   ) {
//     ctx.setState({
//       dataList: null,
//       error: error,
//       isDataLoading: false,
//       paginationRequest: null,
//       paginationResponse: null,
//     });
//   }
// }
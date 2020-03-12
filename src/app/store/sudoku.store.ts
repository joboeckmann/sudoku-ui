import { SquareStateModel } from './model/square-state.model';
import { State, Action, StateContext, Selector, NgxsOnInit } from '@ngxs/store';
import { RetrieveSquare, GetSquareSuccess, GetSquareError, UpdateUserBoard } from './actions/square.actions';
import { SquareStoreService } from './service/square.service';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap, catchError, take } from 'rxjs/operators';
import { Board } from './model/board.model';
import { state } from '@angular/animations';

export const STORE_NAME = 'sudokustate';

@State<SquareStateModel>({
  name: STORE_NAME,
  defaults: {
    board: undefined,
    success: undefined,
  }
})
@Injectable()
export class SquareState implements NgxsOnInit  {
  constructor(private squareService: SquareStoreService) {}

  @Selector()
  static board(state: SquareStateModel): Board {
    return state.board;
  }

  @Selector()
  static success(state: SquareStateModel): boolean {
    return state.success;
  }

  ngxsOnInit(context: StateContext<SquareStateModel>): void {
    context.dispatch(new RetrieveSquare());
  }

  @Action(RetrieveSquare)
  getSquare(context: StateContext<SquareStateModel>, action: RetrieveSquare) {
    return this.squareService.getSquare().pipe(
      take(1),
      tap((board: Board) => {
        context.dispatch(new GetSquareSuccess(board));
      }),
      catchError(error => {
        context.dispatch(new GetSquareError());
        return of(error);
      })
    );
  }

  @Action(GetSquareSuccess)
  setEntitySuccess(context: StateContext<SquareStateModel>, action: GetSquareSuccess): void {
    context.patchState({
      board: action.payload,
      success: undefined
    });
  }

  @Action(GetSquareError)
  setEntityError(context: StateContext<GetSquareError>): void {
    context.patchState({
      board:undefined, 
      success: undefined
    });
  }

  @Action(UpdateUserBoard)
  updateUserBoard(context: StateContext<SquareStateModel>, action: UpdateUserBoard){
    console.log(action.payload)
    return this.squareService.validateSquare(action.payload).pipe(
      take(1),
      tap(() => {
        context.patchState({
          success: true
        });
      }),
      catchError(error => {
        context.patchState({
          success: false
        });
        return of(error)
      })
    );
  }
  }

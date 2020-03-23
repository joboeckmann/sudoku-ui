import { SquareStateModel } from './model/square-state.model';
import { State, Action, StateContext, Selector, NgxsOnInit } from '@ngxs/store';
import { RetrieveSquare, GetSquareSuccess, GetSquareError, UpdateUserBoard, UpdateDifficulty, UpdateSubmit, UpdateScores, UpdateCurrentScore } from './actions/square.actions';
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
    difficulty: "EASY",
    submit: false,
    newGame: true,
    easyScore: 9999999999999,
    mediumScore:9999999999999,
    hardScore: 9999999999999,
    score: 9999999999999
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
  static score(state: SquareStateModel): number {
    return state.score;
  }

  @Selector()
  static success(state: SquareStateModel): boolean {
    return state.success;
  }

  @Selector()
  static difficulty(state: SquareStateModel): string {
    return state.difficulty;
  }

  @Selector()
  static submit(state: SquareStateModel): boolean {
    return state.submit;
  }

  @Selector()
  static newGame(state: SquareStateModel): boolean {
    return state.newGame;
  }


  @Selector()
  static easyScore(state: SquareStateModel): number {
    return state.easyScore;
  }

  @Selector()
  static mediumScore(state: SquareStateModel): number {
    return state.mediumScore;
  }

  @Selector()
  static hardScore(state: SquareStateModel): number {
    return state.hardScore;
  }


  ngxsOnInit(context: StateContext<SquareStateModel>): void {
    context.dispatch(new RetrieveSquare("EASY"));
    context.dispatch(new UpdateScores(null,null));
  }

  @Action(RetrieveSquare)
  getSquare(context: StateContext<SquareStateModel>, action: RetrieveSquare) {
    return this.squareService.getSquare(action.payload).pipe(
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
  setSquareSuccess(context: StateContext<SquareStateModel>, action: GetSquareSuccess): void {
    context.patchState({
      board: action.payload,
      success: undefined,
      submit: false,
      newGame: true
    });
  }

  @Action(GetSquareError)
  setSquareError(context: StateContext<GetSquareError>): void {
    context.patchState({
      board:undefined, 
      success: undefined,
      submit: false,
      newGame: false
    });
  }

  @Action(UpdateUserBoard)
  updateUserBoard(context: StateContext<SquareStateModel>, action: UpdateUserBoard){
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

  @Action(UpdateDifficulty)
  updateDifficulty(context: StateContext<SquareStateModel>, action: UpdateDifficulty){
        context.patchState({
          difficulty: action.payload
        });
      }

  @Action(UpdateSubmit)
  updateSubmit (context: StateContext<SquareStateModel>, action: UpdateSubmit){
        context.patchState({
          submit: action.payload,
          newGame: false
        });
      }

  @Action(UpdateScores)
  updateScores (context: StateContext<SquareStateModel>, action: UpdateScores){
    return this.squareService.getHighScores(action.difficulty, action.score).pipe(
      take(1),
      tap((scores: any) => {
        console.log(scores)
        context.patchState({
          easyScore: scores.easy,
          mediumScore: scores.medium,
          hardScore: scores.hard
        })
      }),
      catchError(error => {
        context.patchState({
          easyScore: 9999999999999,
          mediumScore: 9999999999999,
          hardScore: 9999999999999
        });
        return error
      })
    );
  }
  @Action(UpdateCurrentScore)
  updateCurrentScore(context: StateContext<SquareStateModel>, action: UpdateScores){
    context.patchState({
      score: action.score 
    })
  }

}

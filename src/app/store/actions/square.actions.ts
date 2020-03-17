import { Board } from '../model/board.model';

export const GET_SQUARE = '[Resolver] Get Square';
export const GET_SQUARE_SUCCESS = '[Resolver] Square Success';
export const GET_SQUARE_ERROR = '[Resolver] Square Error';
export const UPDATE_USER_BOARD = '[Resolver] Update User Board';
export const UPDATE_DIFFICULTY = '[Resolver] Update Difficulty';
export const GET_SUCCESS = '[Resolver] User Success';

export class RetrieveSquare {
    static readonly type = GET_SQUARE;
    constructor(public payload: string) {}
  }

export class GetSquareSuccess {
  static readonly type = GET_SQUARE_SUCCESS;
  constructor(public payload: Board) {}
}

export class GetSquareError {
  static readonly type = GET_SQUARE_ERROR;
  constructor() {}
}

export class UpdateUserBoard {
  static readonly type = UPDATE_USER_BOARD;
  constructor(public payload: Board) {}
}

export class UpdateDifficulty {
  static readonly type = UPDATE_DIFFICULTY;
  constructor(public payload: string) {}
}

export class GetSuccess {
  static readonly type = GET_SUCCESS;
  constructor() {}
}
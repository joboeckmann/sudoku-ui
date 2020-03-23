import { Board } from '../model/board.model';

export const GET_SQUARE = ' Get Square';
export const GET_SQUARE_SUCCESS = ' Square Success';
export const GET_SQUARE_ERROR = ' Square Error';
export const UPDATE_USER_BOARD = ' Update User Board';
export const UPDATE_DIFFICULTY = 'Update Difficulty';
export const GET_SUCCESS = ' User Success';
export const GET_SUBMIT = 'Get submit';
export const UPDATE_SUMBIT = ' Update Submit';
export const UPDATE_SCORES ='Update Scores';
export const UPDATE_SCORE ='Update Scores';

export class RetrieveSquare {
    static readonly type = GET_SQUARE;
    constructor(public payload: string) {}
  }

  export class RetrieveSubmit {
    static readonly type = GET_SUBMIT;
    constructor() {}
  }

  export class UpdateSubmit {
    static readonly type = UPDATE_SUMBIT;
    constructor(public payload: boolean) {}
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

export class UpdateScores {
  static readonly type = UPDATE_SCORES;
  constructor(public difficulty: string, public score: number) {}
}

export class UpdateCurrentScore {
  static readonly type = UPDATE_SCORE;
  constructor(public score: number) {}
}

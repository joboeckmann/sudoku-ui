import { Board } from './board.model';

export interface SquareStateModel {
    readonly board: Board; 
    readonly success: boolean;
    readonly difficulty: string;
    readonly submit: boolean;
    readonly newGame: boolean;
    readonly easyScore: number;
    readonly mediumScore: number;
    readonly hardScore: number;
    readonly score:number;
  }
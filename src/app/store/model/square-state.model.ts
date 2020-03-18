import { Board } from './board.model';

export interface SquareStateModel {
    readonly board: Board; 
    readonly success: boolean;
    readonly difficulty: string;
    readonly submit: boolean;

  }
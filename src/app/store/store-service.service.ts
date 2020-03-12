
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SquareState } from './sudoku.store';
import { Injectable } from '@angular/core';
import { Board } from './model/board.model';

@Injectable({
    providedIn: 'root'
  })
export class StoreService {
  constructor(private store: Store) {}

  dispatchAction(action: any): Observable<any> {
    return this.store.dispatch(action);
  }

  getSquare = (): Board => {
    return this.store.selectSnapshot(SquareState.board);
  };

  getUserSucess = (): boolean => {
    return this.store.selectSnapshot(SquareState.success);
  };
 
}

import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { SquareState } from '../store/sudoku.store';
import { Observable } from 'rxjs';
import { StoreService } from '../store/store-service.service';
import { UpdateUserBoard, UpdateSubmit } from '../store/actions/square.actions';
import { Board } from '../store/model/board.model';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss']
})
export class BaseTableComponent implements OnInit {
  @Select(SquareState.board) board$: Observable<Board>;
  finalResult: number[][]=[];

  constructor(  private storeService: StoreService) { }

  ngOnInit(): void {
  }

  submit(){
    this.storeService.dispatchAction(new UpdateSubmit(true))
  }

  gatherResults(numbers: number[]){
    
    this.finalResult.push(numbers);
    if (this.finalResult.length == 9){
        const b = this.storeService.getSquare();
        const c = Object.assign({}, b, {userBoard: this.finalResult})
        this.storeService.dispatchAction(new UpdateUserBoard(c))
        this.finalResult =[];
      } 
    }

}

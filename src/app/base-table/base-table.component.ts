import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { SquareState } from '../store/sudoku.store';
import { Observable } from 'rxjs';
import { StoreService } from '../store/store-service.service';
import { UpdateUserBoard } from '../store/actions/square.actions';
import { Board } from '../store/model/board.model';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss']
})
export class BaseTableComponent implements OnInit {
  @Select(SquareState.board) board$: Observable<Board>;
  submit2: boolean = false;
  finalResult: number[][]=[];

  constructor(  private storeService: StoreService) { }

  ngOnInit(): void {
  }

  submit(){
    this.submit2 = !this.submit2;
  }

  gatherResults(numbers: number[]){
    this.finalResult.push(numbers);
    if (this.finalResult.length == 9){
      this.board$.subscribe(b => {
        const c = Object.assign({}, b, {userBoard: this.finalResult})
        console.log(c)
        this.storeService.dispatchAction(new UpdateUserBoard(c))
        this.finalResult =[];
      } )
     
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SquareState } from '../store/sudoku.store';
import { StoreService } from '../store/store-service.service';
import { UpdateScores } from '../store/actions/square.actions';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.scss']
})
export class BasePageComponent implements OnInit {
  @Select(SquareState.success) success$: Observable<boolean>;

  constructor(  private storeService: StoreService) { }

  ngOnInit(): void {
    this.success$.subscribe(s=>{
      if (s){
        var d =this.storeService.getDifficulty()
        var score =this.storeService.getScore()
        this.storeService.dispatchAction(new UpdateScores(d,score))
      }
    })
  
  }


}

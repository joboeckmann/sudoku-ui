import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { SquareState } from '../store/sudoku.store';
import { Observable } from 'rxjs';
import { StoreService } from '../store/store-service.service';
import { UpdateDifficulty, RetrieveSquare } from '../store/actions/square.actions';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Select(SquareState.difficulty) difficulty$: Observable<string>;
  difficulty: string 
  difficulties: string [] = ["EASY", "MEDIUM", "HARD"];

  constructor(  private storeService: StoreService) { }

  ngOnInit(): void {
    this.difficulty$.subscribe(d=>{
      this.difficulty = d;
    })
  }

  newGame(): void {
    this.storeService.dispatchAction(new UpdateDifficulty(this.difficulty));
    this.storeService.dispatchAction(new RetrieveSquare(this.difficulty));

  }

}

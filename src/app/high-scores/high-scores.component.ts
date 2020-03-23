import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { SquareState } from '../store/sudoku.store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-high-scores',
  templateUrl: './high-scores.component.html',
  styleUrls: ['./high-scores.component.scss']
})
export class HighScoresComponent implements OnInit {
  @Select(SquareState.easyScore) easyScore$: Observable<number>;
  @Select(SquareState.mediumScore) mediumScore$: Observable<number>;
  @Select(SquareState.hardScore) hardScore$: Observable<number>;

  constructor() { }

  ngOnInit(): void {
  }

}

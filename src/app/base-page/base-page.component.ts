import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SquareState } from '../store/sudoku.store';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.scss']
})
export class BasePageComponent implements OnInit {
  @Select(SquareState.success) success$: Observable<boolean>;

  constructor() { }

  ngOnInit(): void {
  }

}

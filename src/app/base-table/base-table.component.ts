import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store/store-service.service';
import { Select } from '@ngxs/store';
import { SquareState } from '../store/sudoku.store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss']
})
export class BaseTableComponent implements OnInit {
  @Select(SquareState.square) square$: Observable<number [][]>;

  constructor( ) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Select } from '@ngxs/store';
import { SquareState } from '../store/sudoku.store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  @Select(SquareState.submit) submit$: Observable<boolean>;
  @Input() num: number
  @Output() currentValue = new EventEmitter<number>();
  value:number;

  constructor() { }

  ngOnInit(): void {
    this.submit$.subscribe(s =>{
      if (s){
      this.sendDataBack();
      }
    })
  }
  sendDataBack(){
    if (this.num){
     this.currentValue.emit(this.num);
    } else{
        this.currentValue.emit(+this.value);
    }
  }

}

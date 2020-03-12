import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  @Input() num: number
  @Output() currentValue = new EventEmitter<number>();
  private _submit = false;
  value:number;
  initialized: boolean = false;
  @Input() 
  set submit(value: boolean) {
    this._submit = value;
    this.sendDataBack();
 }
 get submit(): boolean {
  return this._submit;
}

  constructor() { }

  ngOnInit(): void {
    this.initialized = true; 
  }
  sendDataBack(){
    if (this.initialized){
    if (this.num){
     this.currentValue.emit(this.num);
    } else{
        this.currentValue.emit(+this.value);
    }
  }
}

}

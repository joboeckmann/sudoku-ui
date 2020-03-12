import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inner-box',
  templateUrl: './inner-box.component.html',
  styleUrls: ['./inner-box.component.scss']
})
export class InnerBoxComponent implements OnInit {

  @Input() data: number [] =[];
  finalData: number[] =[];
  @Output() finalResult = new EventEmitter<number[]>();

   _submit = false;
  @Input() 
  set submit(value: boolean) {
    this._submit = value;
 }
 get submit(): boolean {
  return this._submit;
}

  constructor() { }

  gatherResults(num: number) {
    this.finalData.push(num);
    if(this.finalData.length == 9){
        this.finalResult.emit(this.finalData);
        this.finalData = [];
    }
  }

  ngOnInit(): void {

  }

}

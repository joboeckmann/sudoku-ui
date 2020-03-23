import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { SquareState } from '../store/sudoku.store';
import { Observable } from 'rxjs';
import { StoreService } from '../store/store-service.service';
import { UpdateCurrentScore } from '../store/actions/square.actions';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit{
  @Select(SquareState.submit) submit$: Observable<boolean>;
  @Select(SquareState.newGame) newGame$: Observable<boolean>;
  counter: number;
  timerRef;
  finalTime;
  running: boolean = false;

  constructor(  private storeService: StoreService) { }

  ngOnInit(): void {
    this.submit$.subscribe(s =>{
      if (s){
      this.clearTimer();
      }
    })
    this.newGame$.subscribe(g =>{
      if (g){
        this.finalTime = undefined;
        this.startTimer();
      }
    })

  }

  startTimer() {
    this.running = !this.running;
    if (this.running) {
      const startTime = Date.now() - (this.counter || 0);
      this.timerRef = setInterval(() => {
        this.counter = Date.now() - startTime;
      });
    } else {
      clearInterval(this.timerRef);
    }
  }

  clearTimer() {
    this.running = false;
    this.finalTime = this.counter;
    this.storeService.dispatchAction(new UpdateCurrentScore(this.finalTime))
    this.counter = undefined;
    clearInterval(this.timerRef);
  }
    

}

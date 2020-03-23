import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerComponent } from './timer.component';
import { NgxsModule } from '@ngxs/store';
import { SquareState } from '../store/sudoku.store';
import { StoreService } from '../store/store-service.service';
import { SquareStoreService } from '../store/service/square.service';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [ NgxsModule.forRoot([SquareState])],
      declarations: [ TimerComponent ],
      providers: [
        { provide: StoreService,  
          useValue: jasmine.createSpyObj('storeService',['getDifficulty', 'getScore', 'dispatchAction']) 
        },
        {
          provide: SquareStoreService,
          useValue: jasmine.createSpyObj('storeService', ['getSquare', , 'getHighScores'])
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

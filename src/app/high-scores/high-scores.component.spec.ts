import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighScoresComponent } from './high-scores.component';
import { NgxsModule } from '@ngxs/store';
import { SquareState } from '../store/sudoku.store';
import { StoreService } from '../store/store-service.service';
import { SquareStoreService } from '../store/service/square.service';

describe('HighScoresComponent', () => {
  let component: HighScoresComponent;
  let fixture: ComponentFixture<HighScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NgxsModule.forRoot([SquareState])],
      declarations: [ HighScoresComponent ],
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
    fixture = TestBed.createComponent(HighScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

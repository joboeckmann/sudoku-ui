import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTableComponent } from './base-table.component';
import { NgxsModule } from '@ngxs/store';
import { SquareState } from '../store/sudoku.store';
import { StoreService } from '../store/store-service.service';
import { SquareStoreService } from '../store/service/square.service';

describe('BaseTableComponent', () => {
  let component: BaseTableComponent;
  let fixture: ComponentFixture<BaseTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ 
      imports: [ NgxsModule.forRoot([SquareState])],
      declarations: [ BaseTableComponent ],
      providers: [
        { provide: StoreService,  
          useValue: jasmine.createSpyObj('storeService',['getDifficulty', 'getScore', 'dispatchAction']) 
        },
        {
          provide: SquareStoreService,
          useValue: jasmine.createSpyObj('storeService', ['getSquare'])
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

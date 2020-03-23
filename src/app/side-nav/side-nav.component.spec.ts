import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavComponent } from './side-nav.component';
import { NgxsModule } from '@ngxs/store';
import { SquareState } from '../store/sudoku.store';
import { StoreService } from '../store/store-service.service';
import { SquareStoreService } from '../store/service/square.service';

describe('SideNavComponent', () => {
  let component: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule({ 
        imports: [ NgxsModule.forRoot([SquareState])],
        declarations: [ SideNavComponent ],
        providers: [
          { provide: StoreService,  
            useValue: jasmine.createSpyObj('storeService',['getDifficulty', 'getScore', 'dispatchAction']) 
          },
          {
            provide: SquareStoreService,
            useValue: jasmine.createSpyObj('storeService', ['getSquare', 'getHighScores'])
          }
        ]
      })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

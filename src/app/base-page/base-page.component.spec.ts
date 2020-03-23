import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePageComponent } from './base-page.component';
import { StoreService } from '../store/store-service.service';
import { NgxsModule } from '@ngxs/store';
import { SquareState } from '../store/sudoku.store';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SquareStoreService } from '../store/service/square.service';
import { of } from 'rxjs';

describe('BasePageComponent', () => {
  let component: BasePageComponent;
  let fixture: ComponentFixture<BasePageComponent>;
  let storeSpy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NgxsModule.forRoot([SquareState])],
      schemas: [NO_ERRORS_SCHEMA, , CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ BasePageComponent ],
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
    fixture = TestBed.createComponent(BasePageComponent);
    component = fixture.componentInstance;
    Object.defineProperty(component, 'success$', { writable: true });
    component.success$ = of(true);
    storeSpy = TestBed.get(StoreService);
    storeSpy.getDifficulty.and.returnValue("EASY");
    storeSpy.getScore.and.returnValue(1);

  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should update scores if successful', () =>{
    fixture.detectChanges();
    component.ngOnInit()
    expect(storeSpy.dispatchAction).toHaveBeenCalled()
  })

  it('should not update scores if not successful', () =>{
    component.success$ = of(false);
    fixture.detectChanges();
    component.ngOnInit()
    expect(storeSpy.dispatchAction).not.toHaveBeenCalled()
  })
});

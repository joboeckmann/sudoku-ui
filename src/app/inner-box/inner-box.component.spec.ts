import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerBoxComponent } from './inner-box.component';

describe('InnerBoxComponent', () => {
  let component: InnerBoxComponent;
  let fixture: ComponentFixture<InnerBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

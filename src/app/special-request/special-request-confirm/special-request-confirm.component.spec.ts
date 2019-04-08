import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialRequestConfirmComponent } from './special-request-confirm.component';

describe('SpecialRequestConfirmComponent', () => {
  let component: SpecialRequestConfirmComponent;
  let fixture: ComponentFixture<SpecialRequestConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialRequestConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialRequestConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialRequestDialogComponent } from './special-request-dialog.component';

describe('SpecialRequestDialogComponent', () => {
  let component: SpecialRequestDialogComponent;
  let fixture: ComponentFixture<SpecialRequestDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialRequestDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialRequestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

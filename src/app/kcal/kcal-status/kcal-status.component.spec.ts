import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KcalStatusComponent } from './kcal-status.component';

describe('KcalStatusComponent', () => {
  let component: KcalStatusComponent;
  let fixture: ComponentFixture<KcalStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KcalStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KcalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

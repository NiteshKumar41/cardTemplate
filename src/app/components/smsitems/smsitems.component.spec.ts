import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsitemsComponent } from './smsitems.component';

describe('SmsitemsComponent', () => {
  let component: SmsitemsComponent;
  let fixture: ComponentFixture<SmsitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

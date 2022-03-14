import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectExchangeComponent } from './connect-exchange.component';

describe('ConnectExchangeComponent', () => {
  let component: ConnectExchangeComponent;
  let fixture: ComponentFixture<ConnectExchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectExchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

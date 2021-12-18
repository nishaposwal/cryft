import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyGiftComponent } from './buy-gift.component';

describe('BuyGiftComponent', () => {
  let component: BuyGiftComponent;
  let fixture: ComponentFixture<BuyGiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyGiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

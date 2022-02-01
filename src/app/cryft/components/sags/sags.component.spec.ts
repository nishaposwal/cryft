import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagsComponent } from './sags.component';

describe('SagsComponent', () => {
  let component: SagsComponent;
  let fixture: ComponentFixture<SagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

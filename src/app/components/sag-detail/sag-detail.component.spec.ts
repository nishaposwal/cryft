import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagDetailComponent } from './sag-detail.component';

describe('SagDetailComponent', () => {
  let component: SagDetailComponent;
  let fixture: ComponentFixture<SagDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SagDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SagDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

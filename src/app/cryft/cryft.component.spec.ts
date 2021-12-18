import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryftComponent } from './cryft.component';

describe('CryftComponent', () => {
  let component: CryftComponent;
  let fixture: ComponentFixture<CryftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

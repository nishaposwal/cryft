import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaverseSagComponent } from './metaverse-sag.component';

describe('InvestComponent', () => {
  let component: MetaverseSagComponent;
  let fixture: ComponentFixture<MetaverseSagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaverseSagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaverseSagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

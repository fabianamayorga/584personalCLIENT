import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandSummaryComponent } from './brand-summary.component';

describe('BrandSummaryComponent', () => {
  let component: BrandSummaryComponent;
  let fixture: ComponentFixture<BrandSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

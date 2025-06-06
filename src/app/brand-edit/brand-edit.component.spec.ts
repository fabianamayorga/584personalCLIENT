import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandEditComponent } from './brand-edit.component';

describe('BrandEditComponent', () => {
  let component: BrandEditComponent;
  let fixture: ComponentFixture<BrandEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

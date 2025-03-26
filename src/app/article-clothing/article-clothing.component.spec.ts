import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleClothingComponent } from './article-clothing.component';

describe('ArticleClothingComponent', () => {
  let component: ArticleClothingComponent;
  let fixture: ComponentFixture<ArticleClothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleClothingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

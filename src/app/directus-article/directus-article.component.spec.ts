import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectusArticleComponent } from './directus-article.component';

describe('DirectusArticleComponent', () => {
  let component: DirectusArticleComponent;
  let fixture: ComponentFixture<DirectusArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectusArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectusArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

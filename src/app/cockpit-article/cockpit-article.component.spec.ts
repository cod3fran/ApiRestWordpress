import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CockpitArticleComponent } from './cockpit-article.component';

describe('CockpitArticleComponent', () => {
  let component: CockpitArticleComponent;
  let fixture: ComponentFixture<CockpitArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CockpitArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CockpitArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

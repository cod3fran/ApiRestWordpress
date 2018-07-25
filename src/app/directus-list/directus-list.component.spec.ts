import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectusListComponent } from './directus-list.component';

describe('DirectusListComponent', () => {
  let component: DirectusListComponent;
  let fixture: ComponentFixture<DirectusListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectusListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

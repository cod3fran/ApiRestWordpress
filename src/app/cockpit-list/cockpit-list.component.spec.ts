import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CockpitListComponent } from './cockpit-list.component';

describe('CockpitListComponent', () => {
  let component: CockpitListComponent;
  let fixture: ComponentFixture<CockpitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CockpitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CockpitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

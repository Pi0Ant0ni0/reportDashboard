import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsTableComponent } from './reports-table.component';

describe('ReportsTableComponent', () => {
  let component: ReportsTableComponent;
  let fixture: ComponentFixture<ReportsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportsTableComponent]
    });
    fixture = TestBed.createComponent(ReportsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

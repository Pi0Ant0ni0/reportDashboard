import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTableComponent } from './details-table.component';

describe('DetailsTableComponent', () => {
  let component: DetailsTableComponent;
  let fixture: ComponentFixture<DetailsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsTableComponent]
    });
    fixture = TestBed.createComponent(DetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

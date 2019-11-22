import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExteriorMapComponent } from './exterior-map.component';

describe('ExteriorMapComponent', () => {
  let component: ExteriorMapComponent;
  let fixture: ComponentFixture<ExteriorMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExteriorMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExteriorMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

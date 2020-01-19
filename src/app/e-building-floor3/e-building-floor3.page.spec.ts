import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EBuildingFloor3Page } from './e-building-floor3.page';

describe('EBuildingFloor3Page', () => {
  let component: EBuildingFloor3Page;
  let fixture: ComponentFixture<EBuildingFloor3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EBuildingFloor3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EBuildingFloor3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

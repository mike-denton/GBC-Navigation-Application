import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CBuildingFloor2Page } from './c-building-floor2.page';

describe('CBuildingFloor2Page', () => {
  let component: CBuildingFloor2Page;
  let fixture: ComponentFixture<CBuildingFloor2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBuildingFloor2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CBuildingFloor2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

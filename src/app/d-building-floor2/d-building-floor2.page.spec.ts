import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DBuildingFloor2Page } from './d-building-floor2.page';

describe('DBuildingFloor2Page', () => {
  let component: DBuildingFloor2Page;
  let fixture: ComponentFixture<DBuildingFloor2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DBuildingFloor2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DBuildingFloor2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

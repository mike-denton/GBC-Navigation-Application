import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { DrawPathService} from '../draw-path.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
  @ViewChild('canvasEl', {static: true}) canvasEl: ElementRef;  

  private parking;
  private building;

  public dps = new DrawPathService();

  constructor(private pickerCtrl: PickerController,
    private renderer: Renderer2, 
    private drawPathService: DrawPathService,
    private router: Router) {}

  ngAfterViewInit() {
    this.dps.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');
    this.dps.drawParkingMarkers();
  }

  private sendParkingId(event){
    this.buildingsPicker();
    this.parking = event.target.id;
    this.dps.drawOriginMarker(this.parking);
  }

  private sendBuildingId(event){
    this.building = event.target.id;
    switch (this.building){
      case 'buildingC':
        this.cBuildingFloorsPicker();
        break;
      case 'buildingD':
        break;
      case 'buildingE':
        this.eBuildingFloorsPicker();
        break;
      default:
        break;
    }
  }
 
  async buildingsPicker(){
    let pickerAction;
    let buildings: PickerOptions = {
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Done',
          role: 'done',
          handler: value => {
            pickerAction = 'done';
          }
        }
      ],
      columns: [
        {
          name: 'buildings',
          options: [
            { text: '--- Please Select ---', value: 'null'},
            { text: 'Building C', value: 'buildingC' },
            { text: 'Building D', value: 'buildingD' },
            { text: 'Building E', value: 'buildingE' }
          ]
        }
      ]
    };

    let picker = await this.pickerCtrl.create(buildings);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn('buildings');
      if (pickerAction == 'done') {
        if (col.options[col.selectedIndex].value == 'null') {
          this.dps.context.clearRect(0, 0, this.dps.context.canvas.width, this.dps.context.canvas.height);
        }
        switch (this.parking){
          case 'parkingA':
            this.dps.drawPathFromParkingA(col.options[col.selectedIndex].value);
            break;
          case 'parkingB':
            this.dps.drawPathFromParkingB(col.options[col.selectedIndex].value);
            break;
          case 'parkingC':
            this.dps.drawPathFromParkingC(col.options[col.selectedIndex].value);
            break;
          case 'parkingD':
            this.dps.drawPathFromParkingD(col.options[col.selectedIndex].value);
            break;
          case 'parkingF':
            this.dps.drawPathFromParkingF(col.options[col.selectedIndex].value);
            break;
          default:
            break;
        }
      }else{
        this.dps.context.clearRect(0, 0, this.dps.context.canvas.width, this.dps.context.canvas.height);
      }
    });
  }


  async eBuildingFloorsPicker(){
    let pickerAction;
    let floors: PickerOptions = {
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Done',
          role: 'done',
          handler: value => {
            pickerAction = 'done';
          }
        }
      ],
      columns: [
        {
          name: 'floors',
          selectedIndex: -1,
          options: [
            { text: '--- Please Select ---', value: 'null'},
            { text: 'Basement', value:'basement' },
            { text: '1st Floor', value: 'floor1' },
            { text: '2nd Floor', value: 'floor2' },
            { text: '3rd Floor', value: 'floor3' },
            { text: '4th Floor', value: 'floor4' }
          ]
        }
      ]
    };

    let picker = await this.pickerCtrl.create(floors);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn('floors');
      if (pickerAction == 'done') {
        switch (col.options[col.selectedIndex].value){
          case 'floor2':
            this.router.navigate(['/d-building-floor2'])
            break;
          default:
            break;
        }
      }else{
      }
    });
  }

  async cBuildingFloorsPicker(){
    let pickerAction;
    let floors: PickerOptions = {
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Done',
          role: 'done',
          handler: value => {
            pickerAction = 'done';
          }
        }
      ],
      columns: [
        {
          name: 'floors',
          cssClass: 'test',
          options: [
            { text: '--- Please Select ---', value: 'null'},
            { text: '1st Floor', value: 'floor1' },
            { text: '2nd Floor', value: 'floor2' },
            { text: '3rd Floor', value: 'floor3' },
            { text: '4th Floor', value: 'floor4' },
            { text: '5th Floor', value: 'floor5' }
          ]
        }
      ]
    };

    let picker = await this.pickerCtrl.create(floors);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn('floors');
      if (pickerAction == 'done') {
        switch (col.options[col.selectedIndex].value){
          case 'floor2':
            this.router.navigate(['/c-building-floor2'])
            break;
          default:
            break;
        }
      }else{
      }
    });
  }
}

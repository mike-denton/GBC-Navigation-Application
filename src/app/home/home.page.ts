import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { DrawPathService} from '../draw-path.service'
import { DeviceDetectorService } from 'ngx-device-detector';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
  @ViewChild('canvasEl', {static: true}) canvasEl: ElementRef;  

  private width: 578;
  private height: 438;
  private parking;

  public dps = new DrawPathService();

  private deviceInfo = null;

  constructor(
    private pickerCtrl: PickerController,
    private renderer: Renderer2, 
    private drawPathService: DrawPathService,
    private deviceService: DeviceDetectorService,
    private geolocation: Geolocation
    ) 
  {
    this.deviceInfo = this.deviceService;  
    console.log(this.data);
    console.log(this.geoLoc());
  }

  // tracking application startup, datetime, device type etc.
  public data = {
    datetime: `Date: ${new Date().toDateString()}, Time: ${new Date().toTimeString()}`,
    device: this.deviceService.getDeviceInfo(),
    //location: this.geolocation.getCurrentPosition().then((resp) => { console.log(`Coordinates: latitude: ${resp.coords.latitude}, longitude: ${resp.coords.longitude}`)}).catch((error) => {console.log('Error getting location', error);})
  }   

  geoLoc() {
    this.geolocation.getCurrentPosition().then((resp) => {
        console.log(`Current Position => latitude: ${resp.coords.latitude}, longitude: ${resp.coords.longitude}`)

     }).catch((error) => {
       console.log('Error getting location', error);
     });

     let watch = this.geolocation.watchPosition();
      watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
        console.log(`Updated Position... => latitude: ${data.coords.latitude}, longitude: ${data.coords.longitude}`)
      });
  }

  ngAfterViewInit() {
    this.dps.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');
  }

  private sendParkingId(event){
    this.parking = event.target.id;
    this.dps.drawOriginMarker(this.parking);
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
}

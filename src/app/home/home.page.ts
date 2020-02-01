import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { DrawPathService} from '../draw-path.service'
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Network } from '@ionic-native/network/ngx';


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
  private building;

  public lat = 0
  public lon = 0

  public dps = new DrawPathService();

  private deviceInfo = null

  constructor(
    private pickerCtrl: PickerController,
    private renderer: Renderer2, 
    private drawPathService: DrawPathService,
    private deviceService: DeviceDetectorService,
    private geolocation: Geolocation,
    private network: Network,
    private router: Router
  ) 
  {
    this.deviceInfo = this.deviceService;  
    console.log(this.data);
    console.log(this.geoLoc());
    console.log(this.checkConnection());
  }

  // tracking application startup, datetime, device type etc.
  public data = {
    datetime: `Date: ${new Date().toDateString()}, Time: ${new Date().toTimeString()}`,
    device: this.deviceService.getDeviceInfo(),
    //location: this.geolocation.getCurrentPosition().then((resp) => { console.log(`Coordinates: latitude: ${resp.coords.latitude}, longitude: ${resp.coords.longitude}`)}).catch((error) => {console.log('Error getting location', error);})
  }   

  geoLoc() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lon = resp.coords.longitude;
      console.log(`Current Position => latitude: ${this.lat}, longitude: ${this.lon}`)

     }).catch((error) => {
       console.log('Error getting location', error);
     });

     let watch = this.geolocation.watchPosition();
      watch.subscribe((data) => {
      this.lat = data.coords.latitude;
      this.lon = data.coords.longitude;
      // data can be a set of coordinates, or an error (if an error occurred).
        console.log(`Updated Position... => latitude: ${this.lat}, longitude: ${this.lon}`)
      });
  }

  checkConnection() {
    let conn = navigator['connection'].type;

    if(conn == 'wifi'){
      alert(`connected to ${conn}`);
    }else{
      alert(`connection type: ${conn}`);
    }

  }

  ngAfterViewInit() {
    this.dps.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');
    this.dps.draw();
  }

  private sendParkingId(event){
    this.buildingsPicker();
    this.parking = event.target.id;
    this.dps.drawOriginMarker(this.parking);
  }

  private sendBuildingId(event){
    this.floorsPicker();
    this.building = event.target.id;
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
          this.dps.draw();
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


  async floorsPicker(){
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
          options: [
            { text: '--- Please Select ---', value: 'null'},
            { text: 'Basement', value:'basement'},
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
          case 'floor3':
            this.router.navigate(['/e-building-floor3'])
            break;
          default:
            break;
        }
      }else{
      }
    });
  }
}

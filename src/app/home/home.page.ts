import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
  @ViewChild('canvasEl', {static: true}) canvasEl: ElementRef;  

  private context: CanvasRenderingContext2D;
  private width: 578;
  private height: 438;

  private parking;

  private destinationMarker = new Image();
  private originMarker = new Image();

  constructor(private pickerCtrl: PickerController,private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');
    this.destinationMarker.src = 'assets/images/map-destination-marker.png';
    this.originMarker.src = 'assets/images/map-origin-marker.png';
  }

  private sendParkingId(event){
    this.parking = event.target.id;
    this.drawOriginMarker(this.parking);
  }

  private drawOriginMarker(parkingId : String){
    switch (parkingId){
      case 'parkingA':
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.drawImage(this.originMarker, 315,260);
        break;
      case 'parkingB':
        // DONE
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.drawImage(this.originMarker,295,132);
        break;
      case 'parkingC':
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.drawImage(this.originMarker, 121,138);
        //this is yours
        break;
      case 'parkingD':
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.drawImage(this.originMarker, 160,243);
        break;
      case 'parkingF':
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        //this is mine
        break;
      default:
        break;
    }
  }

  private drawPathFromParkingA(btnId : string) {
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "lime";
    switch (btnId){
      case 'buildingC':
        this.context.moveTo(324,270);
        this.context.lineTo(280, 270);
        this.context.lineTo(280, 139);
        this.context.lineTo(230, 139);
        this.drawDestinationMarker(btnId);
        break;
      case 'buildingD':
        this.context.moveTo(324,270);
        this.context.lineTo(280, 270);
        this.context.lineTo(280, 230);
        this.context.lineTo(225, 229);
        this.context.lineTo(205, 240);
        this.context.lineTo(153, 240);
        this.context.lineTo(153, 210);
        this.context.lineTo(190, 210);
        this.drawDestinationMarker(btnId);
        break;
      case 'buildingE':
          this.context.moveTo(324,270);
          this.context.lineTo(280, 270);
          this.context.lineTo(280, 230);
          this.context.lineTo(243, 230);
          this.context.lineTo(243, 197);
          this.drawDestinationMarker(btnId);
          break;
      default:
        break;
    }
    this.context.stroke();
  }

  //this is yours
  private drawPathFromParkingB(btnId : string) {
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "lime";
    switch (btnId){
      case 'buildingC':
        this.context.moveTo(281, 135);
        this.context.lineTo(281, 165);
        
        this.context.moveTo(278, 164);
        this.context.lineTo(310, 164);
        
        this.context.moveTo(280, 139);
        this.context.lineTo(228, 139);

        this.drawDestinationMarker(btnId);
        break;
      case 'buildingD':        
      // finish this
        this.context.moveTo(278, 164);
        this.context.lineTo(310, 164);
        
        this.context.moveTo(281, 165);
        this.context.lineTo(281, 230);

        this.context.moveTo(190,209);
        this.context.lineTo(190, 240);

        this.context.lineTo(205, 240);
        this.context.lineTo(224, 230);

        this.context.lineTo(283, 230);
        
        this.drawDestinationMarker(btnId);
        break;
      case 'buildingE':
        this.context.moveTo(278, 164);
        this.context.lineTo(310, 164);
        
        this.context.moveTo(281, 165);
        this.context.lineTo(281, 205);

        this.context.moveTo(238, 202);
        this.context.lineTo(279, 202);
        this.drawDestinationMarker(btnId);
        break;
      default:
        break;
    }
    this.context.stroke();
  }

  //this is yours DONE
  private drawPathFromParkingC(btnId : string) {
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "lime";
    switch (btnId){
      case 'buildingC':                
        this.context.moveTo(231, 150);
        this.context.lineTo(146, 150);
        this.drawDestinationMarker(btnId);
        break;
      case 'buildingD':
        this.context.moveTo(155,164);        
        this.context.lineTo(135, 164);

        this.context.moveTo(189,210);
        this.context.lineTo(153, 210);

        this.context.lineTo(153, 163);
        this.drawDestinationMarker(btnId);
        break;
      case 'buildingE':
        this.context.moveTo(140,160);   
        this.context.lineTo(155,160); 

        this.context.lineTo(155, 240);
        this.context.lineTo(205, 240);

        this.context.lineTo(224, 230);
        this.context.lineTo(243, 230);

        this.context.lineTo(243, 197);
        this.drawDestinationMarker(btnId);
        break;
      default:
        break;
    }
    this.context.stroke();
  }

  private drawPathFromParkingD(btnId : string) {
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "lime";
    switch (btnId){
      case 'buildingC':
        this.context.moveTo(176,244);
        this.context.lineTo(176, 240);
        this.context.lineTo(205, 240);
        this.context.lineTo(224, 230);
        this.context.lineTo(280, 230);
        this.context.lineTo(280, 139);
        this.context.lineTo(230, 139);
        this.drawDestinationMarker(btnId);
        break;
      case 'buildingD':
        this.context.moveTo(176,244);
        this.context.lineTo(176, 240);
        this.context.lineTo(153, 240);
        this.context.lineTo(153, 210);
        this.context.lineTo(190, 210);
        this.drawDestinationMarker(btnId);
        break;
      case 'buildingE':
        this.context.moveTo(176,244);
        this.context.lineTo(176, 240);
        this.context.lineTo(205, 240);
        this.context.lineTo(224, 230);
        this.context.lineTo(243, 230);
        this.context.lineTo(243, 197);
        this.drawDestinationMarker(btnId);
        break;
      default:
        break;
    }
    this.context.stroke();
  }

  private drawPathFromParkingF(btnId : string) {
    //this is my part
  }

  private drawDestinationMarker(btnId : String){
    switch (btnId){
      case 'buildingC':
        this.context.drawImage(this.destinationMarker, 215,110);
        break;
      case 'buildingD':
        this.context.drawImage(this.destinationMarker, 175,180);
        break;
      case 'buildingE':
        this.context.drawImage(this.destinationMarker, 227, 165);
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
          this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        }
        switch (this.parking){
          case 'parkingA':
            this.drawPathFromParkingA(col.options[col.selectedIndex].value);
            break;
          case 'parkingB':
            this.drawPathFromParkingB(col.options[col.selectedIndex].value);
            break;
          case 'parkingC':
            this.drawPathFromParkingC(col.options[col.selectedIndex].value);
            break;
          case 'parkingD':
            this.drawPathFromParkingD(col.options[col.selectedIndex].value);
            break;
          case 'parkingF':
            this.drawPathFromParkingF(col.options[col.selectedIndex].value);
            break;
          default:
            break;
        }
      }else{
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
      }
    });
  }
}

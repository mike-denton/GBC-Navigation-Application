import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class DrawPathService {

  public context: CanvasRenderingContext2D;

  private width: 578;
  private height: 438;

  private parking;

  private destinationMarker = new Image();
  private originMarker = new Image();

  private event;

  private pickerCtrl: PickerController;

  constructor() {    
    this.destinationMarker.src = 'assets/images/map-destination-marker.png';
    this.originMarker.src = 'assets/images/map-origin-marker.png';
  } 

  public draw(){
    this.originMarker.onload = () => {
      this.context.drawImage(this.originMarker, 315,260);
      this.context.drawImage(this.originMarker,295,132);
      this.context.drawImage(this.originMarker, 121,138);
      this.context.drawImage(this.originMarker, 160,243);
      this.context.drawImage(this.originMarker,295,173);
    };
  }

  public drawOriginMarker(parkingId : String){

    switch (parkingId){
      case 'parkingA':
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.drawImage(this.originMarker, 315,260);
        break;
      case 'parkingB':
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.drawImage(this.originMarker,295,132);
        break;
      case 'parkingC':
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.drawImage(this.originMarker, 121,138);
        break;
      case 'parkingD':
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.drawImage(this.originMarker, 160,243);
        break;
      case 'parkingF':
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.drawImage(this.originMarker,295,173);
        break;
      default:
        break;
    }
  }

  public drawPathFromParkingA(btnId : string) {
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

  public drawPathFromParkingB(btnId : string) {
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

  public drawPathFromParkingC(btnId : string) {
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
        this.context.moveTo(153,164);        
        this.context.lineTo(140, 164);

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

  public drawPathFromParkingD(btnId : string) {
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

  public drawPathFromParkingF(btnId : string) {
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "lime";
    switch (btnId){
      case 'buildingC':                
        this.context.moveTo(281, 138);
        this.context.lineTo(281, 200);
        
        this.context.moveTo(280, 200);
        this.context.lineTo(310, 200);
        
        this.context.moveTo(280, 139);
        this.context.lineTo(228, 139);
        this.drawDestinationMarker(btnId);
        break;
      case 'buildingD':
        this.context.moveTo(281, 230);
        this.context.lineTo(281, 200);

        this.context.moveTo(280, 200);
        this.context.lineTo(310, 200);

        this.context.moveTo(190,209);
        this.context.lineTo(190, 240);

        this.context.lineTo(205, 240);
        this.context.lineTo(224, 230);

        this.context.lineTo(283, 230);

        this.drawDestinationMarker(btnId);
        break;
      case 'buildingE':

        this.context.moveTo(240, 202);
        this.context.lineTo(310, 202);

        this.drawDestinationMarker(btnId);
        break;
      default:
        break;
    }
    this.context.stroke();
  }

  public drawDestinationMarker(btnId : String){
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
}

import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { ThrowStmt } from '@angular/compiler';

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

  private destinationMarker = new Image();

  private originMarker = new Image();

  constructor(private pickerCtrl: PickerController,private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');

    this.destinationMarker.src = 'assets/images/map-destination-marker.png';

    this.originMarker.src = 'assets/images/map-origin-marker.png';

  }

  private drawOriginMarker(event){
    switch (event.target.id){
      case 'parkingA':
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.drawImage(this.originMarker, 315,260);
        break;
    }
  }

  private drawPath(btnId : string) {
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
        this.drawPath(col.options[col.selectedIndex].value);
      }else{
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
      }
    });
  }
}

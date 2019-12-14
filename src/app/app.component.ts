import { Component, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { ApiService } from '../app/shared/api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit {

  NavigationData: any = [];

  @ViewChild('canvasEl', {static: true}) canvasEl: ElementRef;  
  private context: CanvasRenderingContext2D;
  private width: 578;
  private height: 438;

  // destination marker object
  private destinationMarker = new Image();

  // origin marker object
  private originMarker = new Image();

  // Attempt to instantiate object when clicking on a building
  @ViewChild(MatMenuTrigger, {static:true}) trigger: MatMenuTrigger;
  
  constructor(private renderer: Renderer2, private navigationApi: ApiService) {
    this.navigationApi.GetCoordinates().subscribe(data => {
      this.NavigationData = data;
    })
  }

  ngAfterViewInit() {
    this.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');

    // destination marker image
    this.destinationMarker.src = 'assets/images/map-destination-marker.png';

    // origin marker image
    this.originMarker.src = 'assets/images/map-origin-marker.png';
  }

  private drawDestinationMarker(){
    let btnId: string = (event.target as Element).id;
    switch (btnId){
      case 'cBuildingBtn':
        this.context.drawImage(this.destinationMarker, 215,110);
        this.drawPath(btnId);
        break;
      case 'dBuildingBtn':
        this.context.drawImage(this.destinationMarker, 175,180);
        this.drawPath(btnId);
        break;
      case 'eBuildingBtn':
        this.context.drawImage(this.destinationMarker, 227, 165);
        this.drawPath(btnId);
        break;
      default:
        break;
    }
  }

  private drawOriginMarker(){
    let parkingId: string = (event.target as Element).id;
    switch (parkingId){
      case 'parkingA':
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.drawImage(this.originMarker, 315,260);
        break;
      case 'parkingB':
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        window.alert('parkingB');
        break;
      case 'parkingC':
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        window.alert('parkingC');
        break;
      case 'parkingD':
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        window.alert('parkingD'); 
        break; 
      case 'parkingF':
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        window.alert('parkingF');
        break;
      default:
        break;
    }

  }

  private drawPath(btnId : string) {
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "lime";
    switch (btnId){
      case 'cBuildingBtn':
        this.context.moveTo(324,270);
        this.context.lineTo(280, 270);
        this.context.lineTo(280, 139);
        this.context.lineTo(230, 139);
        break;
      case 'dBuildingBtn':
        this.context.moveTo(324,270);
        this.context.lineTo(280, 270);
        this.context.lineTo(280, 230);
        this.context.lineTo(225, 229);
        this.context.lineTo(205, 240);
        this.context.lineTo(153, 240);
        this.context.lineTo(153, 210);
        this.context.lineTo(190, 210);
        break;
      case 'eBuildingBtn':
        this.context.moveTo(324,270);
        this.context.lineTo(280, 270);
        this.context.lineTo(280, 230);
        this.context.lineTo(243, 230);
        this.context.lineTo(243, 197);
        break;
      default:
        break;
    }
    this.context.stroke();
  }
}

import { Component, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

// test change name
export class AppComponent implements AfterViewInit {

  // just to get mouse coords
  /*
  event: MouseEvent;
  clientX = 0;
  clientY = 0;

  onEvent(event: MouseEvent): void {
      this.event = event;
  }

  coordinates(event: MouseEvent): void {
      this.clientX = event.clientX;
      this.clientY = event.clientY;

  }
  */

  @ViewChild('canvasEl', {static: true}) canvasEl: ElementRef;  
  private context: CanvasRenderingContext2D;
  private width: 578;
  private height: 438;

  // destination marker object
  private destinationMarker = new Image();

  // origin marker object
  private originMarker = new Image();

  // buildings menu item 
  private parkingA;

  // Attempt to instantiate object when clicking on a building
  @ViewChild(MatMenuTrigger, {static:true}) trigger: MatMenuTrigger;
  
  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    this.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');

    // destination marker image
    this.destinationMarker.src = 'assets/images/map-destination-marker.png';

    // origin marker image
    this.originMarker.src = 'assets/images/map-origin-marker.png';

    // to open building menua draw origin marker
    this.parkingA = document.getElementById("parkingA");
    this.parkingA.addEventListener("click", (e:Event) => {
      this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
      this.drawOriginMarker() 
      this.menu()
    });
  }

  private menu(){
    this.trigger.openMenu();
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
        this.drawPath(btnId);
        this.context.drawImage(this.destinationMarker, 227, 165);
        break;
      default:
        break;
    }
  }

  private drawOriginMarker(){
    let parkingId: string = (event.target as Element).id;
    this.context.drawImage(this.originMarker, 315,260);
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

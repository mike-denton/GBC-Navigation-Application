import { Component, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
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


  //menu item 
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


    // to open building menu
    this.parkingA = document.getElementById("parkingA");
    this.parkingA.addEventListener("click", (e:Event) => { 
      this.drawOriginMarker() 
      this.menu()
    });
  }

  private menu(){
    this.trigger.openMenu();
  }

  private drawDestinationMarker(){
    this.context.drawImage(this.destinationMarker, 215,110);
    this.drawRouteToC()
  }

  private drawOriginMarker(){
    this.context.drawImage(this.originMarker, 315,260);
  }

  private drawRouteToC() {

    // draw path
    this.context.beginPath();
    this.context.moveTo(335,270);
    this.context.lineTo(280, 270);
    this.context.lineTo(280, 139);
    this.context.lineTo(230, 139);
    this.context.lineWidth = 5;
    this.context.stroke();  
  }
}

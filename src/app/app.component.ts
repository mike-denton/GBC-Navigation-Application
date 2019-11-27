// Modified from Prof Mike Dentons - Various repo

// Tasks:
//-Plotting the routes via 2 drop downs ie. parking lot and building. 
//-GPS location pin (optional)

import { Component, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

// Current Issues
// (fixed) Draw path is not showing due to z-index of canvas = -1 (In order of image mapping to work)
// - Attempt to instantiate Angular Material design menu list object when onclick of image mapping (MatMenuTrigger)

// New Fixes
// - Draw path is working with canvas on top

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit {

  @ViewChild('canvasEl', {static: true}) canvasEl: ElementRef;  
  private context: CanvasRenderingContext2D;
  private width: 578;
  private height: 438;

  // Attempt to instantiate object when clicking on a building
  @ViewChild(MatMenuTrigger, {static:true}) trigger: MatMenuTrigger;
  
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');
  
    this.draw();
    this.menu();
  }

  private draw() {

    // draw triangle path
    this.context.beginPath();
    this.context.moveTo(125, 30);
    this.context.lineTo(31.9, 63.2);
    this.context.lineTo(46.1, 186.3);
    this.context.lineWidth = 10;
    this.context.closePath();
    this.context.stroke();  
    
    /*
    // add text to canvas
    this.context.font = "30px Arial";
    this.context.textBaseline = 'middle';
    this.context.textAlign = 'center';
    const x = (this.canvasEl.nativeElement as HTMLCanvasElement).width / 2;
    const y = (this.canvasEl.nativeElement as HTMLCanvasElement).height / 2;
    this.context.fillText("GBC Navigation", x, y);
    */
    
  }

  private menu(){
    this.trigger.openMenu();
  }
}

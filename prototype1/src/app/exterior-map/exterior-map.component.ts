// -Render static map of the GBC Exterior View image
// Add location pin for starting location in Parking lot
// Create Hot Spots on the Buildings, that allow for hovering and selecting destination
// Use HTML5 Canvas to draw and overlay the direction path to destination Building

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-exterior-map',
  templateUrl: './exterior-map.component.html',
  styleUrls: ['./exterior-map.component.css']
})

export class ExteriorMapComponent implements OnInit {

  // Canvas to display map  
  @ViewChild('mapCanvas', { static: true })
  mapCanvas: ElementRef;

  image = new Image();
  imageSrc = 'assets/images/campusmap.png'

  constructor() {

  }

  ngOnInit() {

    let context: CanvasRenderingContext2D = this.mapCanvas.nativeElement.getContext('2d');

    this.image.src = this.imageSrc;
    this.image.onload = () => {
      if (this.image.src.length > 0) {
        context.drawImage(this.image, 0, 0);
      }
    }
  }

  onBuildingSelected(): void {

  }

}

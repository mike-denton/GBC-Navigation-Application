import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";
import { DrawPathService } from "../draw-path.service";
import { PickerController } from "@ionic/angular";
import { Platform } from "@ionic/angular";

@Component({
  selector: "app-e-building-floor2",
  templateUrl: "./e-building-floor2.page.html",
  styleUrls: ["./e-building-floor2.page.scss"]
})
export class EBuildingFloor2Page implements OnInit {
  @ViewChild("canvasEl", { static: true }) canvasEl: ElementRef;

  public dps = new DrawPathService();

  constructor(
    private pickerCtrl: PickerController,
    private renderer: Renderer2,
    private drawPathService: DrawPathService,
    platform: Platform
  ) {
    platform.ready().then(readySource => {
      console.log("Width: " + platform.width());
      console.log("Height: " + platform.height());
    });
  }

  ngOnInit() {
    this.dps.context = (this.canvasEl
      .nativeElement as HTMLCanvasElement).getContext("2d");
    this.dps.drawEbuildingFloor2_OriginMarkers();
  }
}

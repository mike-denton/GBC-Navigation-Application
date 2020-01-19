import { Component, Renderer2, ViewChild, ElementRef } from "@angular/core";
import { PickerController } from "@ionic/angular";
import { PickerOptions } from "@ionic/core";
import { DrawPathService } from "../draw-path.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  @ViewChild("canvasEl", { static: true }) canvasEl: ElementRef;

  private width: 578;
  private height: 438;
  private parking;

  public dps = new DrawPathService();

  constructor(
    private pickerCtrl: PickerController,
    private renderer: Renderer2,
    private drawPathService: DrawPathService
  ) {}

  ngAfterViewInit() {
    this.dps.context = (this.canvasEl
      .nativeElement as HTMLCanvasElement).getContext("2d");
  }

  private sendParkingId(event) {
    this.parking = event.target.id;
    this.dps.drawOriginMarker(this.parking);
  }

  pickerAction;
  buttonConfig = [
    {
      text: "Cancel",
      role: "cancel"
    },
    {
      text: "Done",
      role: "done",
      handler: value => {
        this.pickerAction = "done";
      }
    }
  ];

  async buildingsPicker() {
    let buildings: PickerOptions = {
      buttons: this.buttonConfig,
      columns: [
        {
          name: "buildings",
          options: [
            { text: "--- Please Select ---", value: "null" },
            { text: "Building C", value: "buildingC" },
            { text: "Building D", value: "buildingD" },
            { text: "Building E", value: "buildingE" }
          ]
        }
      ]
    };

    let picker = await this.pickerCtrl.create(buildings);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn("buildings");
      if (this.pickerAction == "done") {
        if (col.options[col.selectedIndex].value == "null") {
          this.clearContextCanvas();
        }
        this.handleDrawPathFromParking(col);
      } else {
        this.clearContextCanvas();
      }
    });
  }

  private handleDrawPathFromParking = col => {
    switch (this.parking) {
      case "parkingA":
        this.dps.drawPathFromParkingA(col.options[col.selectedIndex].value);
        break;
      case "parkingB":
        this.dps.drawPathFromParkingB(col.options[col.selectedIndex].value);

        break;
      case "parkingC":
        this.dps.drawPathFromParkingC(col.options[col.selectedIndex].value);

        break;
      case "parkingD":
        this.dps.drawPathFromParkingD(col.options[col.selectedIndex].value);

        break;
      case "parkingF":
        this.dps.drawPathFromParkingF(col.options[col.selectedIndex].value);
        break;
      default:
        break;
    }
  };

  clearContextCanvas = () => {
    this.dps.context.clearRect(
      0,
      0,
      this.dps.context.canvas.width,
      this.dps.context.canvas.height
    );
  };
}

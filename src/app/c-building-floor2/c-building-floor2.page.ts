import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";
import { DrawPathService } from "../draw-path.service";
import { PickerController } from "@ionic/angular";
import { PickerOptions } from "@ionic/core";

@Component({
  selector: "app-c-building-floor2",
  templateUrl: "./c-building-floor2.page.html",
  styleUrls: ["./c-building-floor2.page.scss"]
})
export class CBuildingFloor2Page implements OnInit {
  private originMarker = new Image();

  @ViewChild("canvasEl", { static: true }) canvasEl: ElementRef;
  @ViewChild("areaMap", { static: true }) areaMap: ElementRef;

  public dps = new DrawPathService();
  private stairCase;

  constructor(
    private pickerCtrl: PickerController,
    private renderer: Renderer2,
    private drawPathService: DrawPathService
  ) {}

  ngOnInit() {
    this.dps.context = (this.canvasEl
      .nativeElement as HTMLCanvasElement).getContext("2d"); 
  }

  private sendStairCaseId(event) {
    this.roomsPicker();
    this.stairCase = event.target.id;
    //this.dps.drawCbuildingFloor2_OriginMarker(this.stairCase);
  }

  async roomsPicker() {
    let pickerAction;
    let stairsRooms: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: "cancel"
        },
        {
          text: "Done",
          role: "done",
          handler: value => {
            pickerAction = "done";
          }
        }
      ],
      columns: [
        {
          name: "rooms",
          options: [
            { text: "--- Please Select ---", value: "null" },
            { text: "Information Center", value: "ifc" },
            { text: "Security", value: "sec" },
            { text: "Washrooms", value: "wrs" },
          ]
        }
      ]
    };

    let picker = await this.pickerCtrl.create(stairsRooms);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let rooms = await picker.getColumn("rooms");
      if (pickerAction == "done") {
        if (rooms.options[rooms.selectedIndex].value == "null") {
          this.dps.context.clearRect(0, 0, this.dps.context.canvas.width, this.dps.context.canvas.height);
        }
        switch (this.stairCase) {
          default:
            break;
        }
      } else {
        this.dps.context.clearRect(0, 0, this.dps.context.canvas.width, this.dps.context.canvas.height);
      }
    });
  }
  // builds a co-ordinate list and display on screen ** debugging
  public handleMouseMove() {
    var img = document.getElementById("floor");
    var coords = document.getElementById("coords");
    img.addEventListener("mousemove", function(event) {
      console.log("mouse move");
      coords.innerHTML = "x: " + event.offsetX + " y: " + event.offsetY;
    });
  }
  // onload, scales the map area cor-ordinates based on screen width
  public handleMapResize() {
    var ImageMap = function(map) {
        console.log("scaling area maps..");
        var n,
          areas = map.getElementsByTagName("area"),
          len = areas.length,
          coords = [],
            previousWidth = window.innerWidth // image original width replace with window.innerWidth when working on desktop
        for (n = 0; n < len; n++) {
          coords[n] = areas[n].coords.split(",");
        }
        this.resize = function() {
          var n,
            m,
            clen,
            x = document.body.clientWidth / previousWidth;
          for (n = 0; n < len; n++) {
            clen = coords[n].length;
            for (m = 0; m < clen; m++) {
              coords[n][m] *= x;
            }
            areas[n].coords = coords[n].join(",");
          }
          previousWidth = document.body.clientWidth;
          return true;
        };
        window.onresize = this.resize;
      },
      imageMap = new ImageMap(document.getElementById("map_id"));
    imageMap.resize();
  }
}

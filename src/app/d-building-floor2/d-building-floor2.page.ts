import { 
  Component,
  OnInit,   
  ViewChild,
  ElementRef,
  Renderer2 
} from '@angular/core';
import { DrawPathService } from "../draw-path.service";
import { PickerController } from "@ionic/angular";
import { PickerOptions } from "@ionic/core";

@Component({
  selector: 'app-d-building-floor2',
  templateUrl: './d-building-floor2.page.html',
  styleUrls: ['./d-building-floor2.page.scss'],
})
export class DBuildingFloor2Page implements OnInit {

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
    console.log(event.target.id);
    this.stairCase = event.target.id;
    this.dps.drawDbuildingFloor2_OriginMarker(this.stairCase);
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
            { text: "Emergency Exit", value: "emg" },
            { text: "D201", value: "d201" },
            { text: "D202", value: "d202" },
            { text: "D205", value: "d205" },
            { text: "D206", value: "d206" },
            { text: "D209", value: "d209" },
            { text: "D209A", value: "d209a" },
            { text: "D210", value: "d210" },
            { text: "D211", value: "d211" },
            { text: "D212", value: "d212" },
            { text: "D214", value: "d214" },
            { text: "D216", value: "d216" },
            { text: "D218", value: "d218" },
            { text: "D222", value: "d222" },
            { text: "D224", value: "d224" },
            { text: "D226", value: "d226" },
            { text: "D227", value: "d227" },
            { text: "D229", value: "d229" },
            { text: "D230", value: "d230" },
            { text: "D231", value: "d231" },
            { text: "D233", value: "d233" },
            { text: "D235A", value: "d235a" },
            { text: "D237", value: "d237" },
            { text: "D241", value: "d241" },
            { text: "D245", value: "d245" },
            { text: "D284", value: "d284" },
            // { text: "Elevator", value: "elevator" },
            { text: "C Building 3rd Floor", value: "cb3f" },
            { text: "E Building 2nd Floor", value: "eb2f" },
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

          case "stairCaseD":
            this.dps.drawPathFromStairCaseD_x(rooms.options[rooms.selectedIndex].value);
            break;

          case "stairCaseD_b":
            this.dps.drawPathFromStairCaseD_b(rooms.options[rooms.selectedIndex].value);
            break;
          
          case "stairCaseD_c":
            this.dps.drawPathFromStairCaseD_c(rooms.options[rooms.selectedIndex].value);
            break;

          case "stairCaseD_d":
            this.dps.drawPathFromStairCaseD_d(rooms.options[rooms.selectedIndex].value);
            break;

          case "elevator_a":
            this.dps.drawPathFromElevator_a(rooms.options[rooms.selectedIndex].value);
            break;
           
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
          // previousWidth = 839; // image original width replace with window.innerWidth when working on desktop
          previousWidth = window.innerWidth;
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

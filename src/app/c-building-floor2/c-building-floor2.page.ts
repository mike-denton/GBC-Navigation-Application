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
    this.dps.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext("2d"); 
    this.fromStaircases()
  }

  private sendStairCaseId(event) {
    this.stairCase = event.target.id;
    this.roomsPicker(event.target.id);
    this.dps.drawCbuildingFloor2_OriginMarker(this.stairCase);
  }

  private displayAllOriginPoints(){
    this.dps.display_All_Cbuilding_Origin()
  }

  async roomsPicker(staircases_elevators: String) {
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
            { text: "C201", value: "c201" },
            { text: "C210", value: "c210" },
            { text: "C211", value: "c211" },
            { text: "C212", value: "c212" },
            { text: "C213", value: "c213" },
            { text: "C214", value: "c214" },
            { text: "C221", value: "c221" },
            { text: "C227", value: "c227" },
            { text: "C230", value: "c230" },
            { text: "C234", value: "c234" },
            { text: "C235", value: "c235" },
            { text: "C236", value: "c236" },
            { text: "C241", value: "c241" },
            { text: "C243", value: "c243" },
            { text: "C243A", value: "c243A" },
            { text: "C243B", value: "c243B" },
            { text: "C246", value: "c246" },
            { text: "C247", value: "c247" },
            { text: "C250", value: "c250" },
            { text: "C255", value: "c255" },
            { text: "C256", value: "c256" },
            { text: "Grill + CO", value: "grill+co" },
            { text: "Pizza Pizza", value: "pizzapizza" },
            { text: "Tim Hortons", value: "timhortons" },
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
        switch (staircases_elevators) {
          case "elevatorA":
            this.dps.drawPathFromElevatorA_C(rooms.options[rooms.selectedIndex].value);
            break;
          case "elevatorB":
            this.dps.drawPathFromElevatorB_C(rooms.options[rooms.selectedIndex].value);
            break;
          case "stairCaseA":
            this.dps.drawPathFromStairCaseA_C(rooms.options[rooms.selectedIndex].value);
            break;
          case "stairCaseB":
            this.dps.drawPathFromStairCaseB_C(rooms.options[rooms.selectedIndex].value);
            break;
          case "stairCaseC":
            this.dps.drawPathFromStairCaseC_C(rooms.options[rooms.selectedIndex].value);
            break;
          case "stairCaseD":
            this.dps.drawPathFromStairCaseD_C(rooms.options[rooms.selectedIndex].value);
            break;
          case "stairCaseE":
            this.dps.drawPathFromStairCaseE_C(rooms.options[rooms.selectedIndex].value);
            break;
          case "stairCaseF":
            this.dps.drawPathFromStairCaseF_C(rooms.options[rooms.selectedIndex].value);
            break;
          case "stairCaseG":
            this.dps.drawPathFromStairCaseG_C(rooms.options[rooms.selectedIndex].value);
            break;
          default:
            break;
        }
      } else {
        this.dps.context.clearRect(0, 0, this.dps.context.canvas.width, this.dps.context.canvas.height);
      }
    });
  }

  async fromStaircases() {
    let pickerAction;
    let stairsRooms: PickerOptions = {
      buttons: [
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
          name: "staircases_elevators",
          options: [
            { text: "--- From which staircases or elevators? ---", value: "null" },
            { text: "Staircase A", value: "stairCaseA" },
            { text: "Staircase B", value: "stairCaseB" },
            { text: "Staircase C", value: "stairCaseC" },
            { text: "Staircase D", value: "stairCaseD" },
            { text: "Staircase E", value: "stairCaseE" },
            { text: "Staircase F", value: "stairCaseF" },
            { text: "Staircase G", value: "stairCaseG" },
            { text: "Elevator A", value: "elevatorA" },
            { text: "Elevator B", value: "elevatorB" },
          ]
        }
      ]
    };

    let picker = await this.pickerCtrl.create(stairsRooms);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let staircases_elevators = await picker.getColumn("staircases_elevators");
      if (pickerAction == "done") {
        if (staircases_elevators.options[staircases_elevators.selectedIndex].value == "null") {
          this.dps.context.clearRect(0, 0, this.dps.context.canvas.width, this.dps.context.canvas.height);
        }
        switch (staircases_elevators.options[staircases_elevators.selectedIndex].value) {
          case "elevatorA":
            this.dps.drawCbuildingFloor2_OriginMarker(staircases_elevators.options[staircases_elevators.selectedIndex].value)
            this.roomsPicker(staircases_elevators.options[staircases_elevators.selectedIndex].value);
            break;

          case "elevatorB":
            this.dps.drawCbuildingFloor2_OriginMarker(staircases_elevators.options[staircases_elevators.selectedIndex].value)
            this.roomsPicker(staircases_elevators.options[staircases_elevators.selectedIndex].value);
            break;

          case "stairCaseA":
            this.dps.drawCbuildingFloor2_OriginMarker(staircases_elevators.options[staircases_elevators.selectedIndex].value)
            this.roomsPicker(staircases_elevators.options[staircases_elevators.selectedIndex].value);
            break;

          case "stairCaseB":
            this.dps.drawCbuildingFloor2_OriginMarker(staircases_elevators.options[staircases_elevators.selectedIndex].value)
            this.roomsPicker(staircases_elevators.options[staircases_elevators.selectedIndex].value);
            break;

          case "stairCaseC":
            this.dps.drawCbuildingFloor2_OriginMarker(staircases_elevators.options[staircases_elevators.selectedIndex].value)
            this.roomsPicker(staircases_elevators.options[staircases_elevators.selectedIndex].value);
            break;
            
          case "stairCaseD":
            this.dps.drawCbuildingFloor2_OriginMarker(staircases_elevators.options[staircases_elevators.selectedIndex].value)
            this.roomsPicker(staircases_elevators.options[staircases_elevators.selectedIndex].value);
            break;

          case "stairCaseE":
            this.dps.drawCbuildingFloor2_OriginMarker(staircases_elevators.options[staircases_elevators.selectedIndex].value)
            this.roomsPicker(staircases_elevators.options[staircases_elevators.selectedIndex].value);
            break;

          case "stairCaseF":
            this.dps.drawCbuildingFloor2_OriginMarker(staircases_elevators.options[staircases_elevators.selectedIndex].value)
            this.roomsPicker(staircases_elevators.options[staircases_elevators.selectedIndex].value);            
            break;

          case "stairCaseG":
            this.dps.drawCbuildingFloor2_OriginMarker(staircases_elevators.options[staircases_elevators.selectedIndex].value)
            this.roomsPicker(staircases_elevators.options[staircases_elevators.selectedIndex].value);            
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

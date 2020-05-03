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
  selector: "app-e-building-floor2",
  templateUrl: "./e-building-floor2.page.html",
  styleUrls: ["./e-building-floor2.page.scss"]
})
export class EBuildingFloor2Page implements OnInit {
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
    this.fromStaircases();
  }

  private sendStairCaseId(event) {
    this.roomsPicker(event.target.id);
    this.stairCase = event.target.id;
    this.dps.drawEbuildingFloor2_OriginMarker(this.stairCase);
  }

  private displayAllOriginPoints(){
    this.dps.display_All_Ebuilding_Origins();
  }

  async roomsPicker(staircase_elevator:String) {
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
        // {
        //   name: 'stairCases',
        //   options: [
        //     { text: '--- Please Select ---', value: 'null' },
        //     { text: 'Staircase A', value: 'stairCaseA' },
        //     { text: 'Staircase B', value: 'stairCaseB' },
        //     { text: 'Staircase C', value: 'stairCaseC' },
        //     { text: 'Staircase D', value: 'stairCaseD' },
        //     { text: 'Staircase E', value: 'stairCaseE' }
        //   ]
        // },
        {
          name: "rooms",
          options: [
            { text: "--- Please Select ---", value: "null" },
            { text: "E201", value: "e201" },
            { text: "E203", value: "e203" },
            { text: "E208", value: "e208" },
            { text: "E212", value: "e212" },
            { text: "E213", value: "e213" },
            { text: "E218", value: "e218" },
            { text: "E219", value: "e219" },
            { text: "E220", value: "e220" },
            { text: "E223", value: "e223" },
            { text: "E224", value: "e224" },
            { text: "E225", value: "e225" },
            { text: "E226", value: "e226" },
            { text: "E227", value: "e227" },
            { text: "E228", value: "e228" },
            { text: "E244", value: "e244" },
            { text: "E245", value: "e245" },
            { text: "E250", value: "e250" },
            //{ text: "C Building 2nd Floor", value: "cb2f" },
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
        if (staircase_elevator == "null") {
          this.dps.context.clearRect(0, 0, this.dps.context.canvas.width, this.dps.context.canvas.height);
        }
        switch (staircase_elevator) {
          case "entrance":
            this.dps.drawPathFromEntranceE(rooms.options[rooms.selectedIndex].value);
            break;
          case "elevator":
            this.dps.drawPathFromElevator(rooms.options[rooms.selectedIndex].value);
            break;
          case "stairCaseA":
            this.dps.drawPathFromStairCaseA(rooms.options[rooms.selectedIndex].value);
            break;
          case "stairCaseB":
            this.dps.drawPathFromStairCaseB(rooms.options[rooms.selectedIndex].value);
            break;
          case "stairCaseC":
            this.dps.drawPathFromStairCaseC(rooms.options[rooms.selectedIndex].value);
            break;
          case "stairCaseD":
            this.dps.drawPathFromStairCaseD(rooms.options[rooms.selectedIndex].value);
            break;
          case "stairCaseE":
            this.dps.drawPathFromStairCaseE(rooms.options[rooms.selectedIndex].value);
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
    let staircase_elevator: PickerOptions = {
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
          name: "staircase_elevator",
          options: [


            { text: "--- From which staircases or elevator? ---", value: "null" },
            { text: "Front Entrance", value: "entrance" },
            { text: "Staircase A (SA)", value: "stairCaseA" },
            { text: "Staircase B (SB)", value: "stairCaseB" },
            { text: "Staircase C (SC)", value: "stairCaseC" },
            { text: "Staircase D (SD)", value: "stairCaseD" },
            { text: "Staircase E (SE)", value: "stairCaseE" },
            { text: "Elevator (EA)", value: "elevator" },
          ]
        }
      ]
    };

    let picker = await this.pickerCtrl.create(staircase_elevator);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let staircase_elevator = await picker.getColumn("staircase_elevator");
      if (pickerAction == "done") {
        if (staircase_elevator.options[staircase_elevator.selectedIndex].value == "null") {
          this.dps.context.clearRect(0, 0, this.dps.context.canvas.width, this.dps.context.canvas.height);
        }
        switch (staircase_elevator.options[staircase_elevator.selectedIndex].value) {
          case "entrance":
            this.dps.drawEbuildingFloor2_OriginMarker(staircase_elevator.options[staircase_elevator.selectedIndex].value);
            this.roomsPicker(staircase_elevator.options[staircase_elevator.selectedIndex].value);
            break;

          case "elevator":
            this.dps.drawEbuildingFloor2_OriginMarker(staircase_elevator.options[staircase_elevator.selectedIndex].value);
            this.roomsPicker(staircase_elevator.options[staircase_elevator.selectedIndex].value);
            break;

          case "stairCaseA":
            this.dps.drawEbuildingFloor2_OriginMarker(staircase_elevator.options[staircase_elevator.selectedIndex].value);
            this.roomsPicker(staircase_elevator.options[staircase_elevator.selectedIndex].value);
            break;

          case "stairCaseB":
            this.dps.drawEbuildingFloor2_OriginMarker(staircase_elevator.options[staircase_elevator.selectedIndex].value);
            this.roomsPicker(staircase_elevator.options[staircase_elevator.selectedIndex].value);
            break;

          case "stairCaseC":
            this.dps.drawEbuildingFloor2_OriginMarker(staircase_elevator.options[staircase_elevator.selectedIndex].value);
            this.roomsPicker(staircase_elevator.options[staircase_elevator.selectedIndex].value);
            break;

          case "stairCaseD":
            this.dps.drawEbuildingFloor2_OriginMarker(staircase_elevator.options[staircase_elevator.selectedIndex].value);
            this.roomsPicker(staircase_elevator.options[staircase_elevator.selectedIndex].value);
            break;

          case "stairCaseE":
            this.dps.drawPathFromStairCaseE(staircase_elevator.options[staircase_elevator.selectedIndex].value);
            this.roomsPicker(staircase_elevator.options[staircase_elevator.selectedIndex].value);
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
  // public handleMouseMove() {
  //   var img = document.getElementById("floor");
  //   var coords = document.getElementById("coords");
  //   img.addEventListener("mousemove", function(event) {
  //     console.log("mouse move");
  //     coords.innerHTML = "x: " + event.offsetX + " y: " + event.offsetY;
  //   });
  // }
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

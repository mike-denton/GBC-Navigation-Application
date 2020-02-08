import { Component, OnInit, ViewChild, ElementRef, Renderer2} from "@angular/core";
import { DrawPathService } from "../draw-path.service";
import { PickerController } from "@ionic/angular";
import { PickerOptions } from '@ionic/core';


@Component({
  selector: "app-e-building-floor2",
  templateUrl: "./e-building-floor2.page.html",
  styleUrls: ["./e-building-floor2.page.scss"]
})
export class EBuildingFloor2Page implements OnInit {

  @ViewChild("canvasEl", { static: true }) canvasEl: ElementRef;

  public dps = new DrawPathService();
  private stairCase;

  constructor(
    private pickerCtrl: PickerController,
    private renderer: Renderer2,
    private drawPathService: DrawPathService,
  ) {}

  ngOnInit() {
    this.dps.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext("2d");
  }

  private sendStairCaseId(event){
    this.roomsPicker();
    this.stairCase = event.target.id;
    this.dps.drawEbuildingFloor2_OriginMarker(this.stairCase); 
  }

  async roomsPicker(){
    let pickerAction;
    let stairsRooms: PickerOptions = {
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Done',
          role: 'done',
          handler: value => {
            pickerAction = 'done';
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
          name: 'rooms',
          options: [
            { text: '--- Please Select ---', value: 'null' },
            { text: 'E201', value: 'e201' },
            { text: 'E203', value: 'e203' },
            { text: 'E208', value: 'e208' },
            { text: 'E212', value: 'e212' },
            { text: 'E213', value: 'e213' },
            { text: 'E218', value: 'e218' },
            { text: 'E219', value: 'e219' },
            { text: 'E220', value: 'e220' },
            { text: 'E223', value: 'e223' },
            { text: 'E224', value: 'e224' },
            { text: 'E225', value: 'e225' },
            { text: 'E226', value: 'e226' },
            { text: 'E227', value: 'e227' },
            { text: 'E228', value: 'e228' },
            { text: 'E244', value: 'e244' },
            { text: 'E245', value: 'e245' },
            { text: 'E250', value: 'e250' }

          ]
        }
      ]
    };

    let picker = await this.pickerCtrl.create(stairsRooms);
    picker.present();
    picker.onDidDismiss().then(async data => {
      //let stairCases = await picker.getColumn('stairCases');
      let rooms = await picker.getColumn('rooms');
      if (pickerAction == 'done') {
        // if (stairCases.options[stairCases.selectedIndex].value == 'null' || rooms.options[rooms.selectedIndex].value == 'null') {
        if (rooms.options[rooms.selectedIndex].value == 'null') {
          this.dps.context.clearRect(0, 0, this.dps.context.canvas.width, this.dps.context.canvas.height);
        }
        switch (this.stairCase){
          case 'stairCaseE':
            this.dps.drawPathFromStairCaseE(rooms.options[rooms.selectedIndex].value);
            break;
          default:
            break;
        }
      }else{
        this.dps.context.clearRect(0, 0, this.dps.context.canvas.width, this.dps.context.canvas.height);
      }
    });
  }
}

import { Injectable, ViewChild, ElementRef } from "@angular/core";
import { PickerController } from "@ionic/angular";
import { PickerOptions } from "@ionic/core";

@Injectable({
  providedIn: "root"
})
export class DrawPathService {
  public context: CanvasRenderingContext2D;
  private destinationMarker = new Image();
  private originMarker = new Image();

  constructor() {
    this.destinationMarker.src = "assets/images/map-destination-marker.png";
    this.originMarker.src = "assets/images/map-origin-marker.png";
  }

  // Parking Markers Main Page
  // * MAIN PAGE START *
  public drawParkingMarkers() {
    this.originMarker.onload = () => {
      this.context.drawImage(this.originMarker, 315, 260);
      this.context.drawImage(this.originMarker, 295, 132);
      this.context.drawImage(this.originMarker, 121, 138);
      this.context.drawImage(this.originMarker, 160, 243);
      this.context.drawImage(this.originMarker, 295, 173);
    };
  }

  public drawOriginMarker(parkingId: String) {
    switch (parkingId) {
      case "parkingA":
        this.context.clearRect(
          0,
          0,
          this.context.canvas.width,
          this.context.canvas.height
        );
        this.context.drawImage(this.originMarker, 315, 260);
        break;
      case "parkingB":
        this.context.clearRect(
          0,
          0,
          this.context.canvas.width,
          this.context.canvas.height
        );
        this.context.drawImage(this.originMarker, 295, 132);
        break;
      case "parkingC":
        this.context.clearRect(
          0,
          0,
          this.context.canvas.width,
          this.context.canvas.height
        );
        this.context.drawImage(this.originMarker, 121, 138);
        break;
      case "parkingD":
        this.context.clearRect(
          0,
          0,
          this.context.canvas.width,
          this.context.canvas.height
        );
        this.context.drawImage(this.originMarker, 160, 243);
        break;
      case "parkingF":
        this.context.clearRect(
          0,
          0,
          this.context.canvas.width,
          this.context.canvas.height
        );
        this.context.drawImage(this.originMarker, 295, 173);
        break;
      default:
        break;
    }
  }

  public drawPathFromParkingA(btnId: string) {
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "lime";
    switch (btnId) {
      case "buildingC":
        this.context.moveTo(324, 270);
        this.context.lineTo(280, 270);
        this.context.lineTo(280, 139);
        this.context.lineTo(230, 139);
        this.drawDestinationMarker(btnId);
        break;
      case "buildingD":
        this.context.moveTo(324, 270);
        this.context.lineTo(280, 270);
        this.context.lineTo(280, 230);
        this.context.lineTo(225, 229);
        this.context.lineTo(205, 240);
        this.context.lineTo(153, 240);
        this.context.lineTo(153, 210);
        this.context.lineTo(190, 210);
        this.drawDestinationMarker(btnId);
        break;
      case "buildingE":
        this.context.moveTo(324, 270);
        this.context.lineTo(280, 270);
        this.context.lineTo(280, 230);
        this.context.lineTo(243, 230);
        this.context.lineTo(243, 197);
        this.drawDestinationMarker(btnId);
        break;
      default:
        break;
    }
    this.context.stroke();
  }

  public drawPathFromParkingB(btnId: string) {
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "lime";
    switch (btnId) {
      case "buildingC":
        this.context.moveTo(281, 135);
        this.context.lineTo(281, 165);
        this.context.moveTo(278, 164);
        this.context.lineTo(310, 164);
        this.context.moveTo(280, 139);
        this.context.lineTo(228, 139);
        this.drawDestinationMarker(btnId);
        break;
      case "buildingD":
        this.context.moveTo(278, 164);
        this.context.lineTo(310, 164);
        this.context.moveTo(281, 165);
        this.context.lineTo(281, 230);
        this.context.moveTo(190, 209);
        this.context.lineTo(190, 240);
        this.context.lineTo(205, 240);
        this.context.lineTo(224, 230);
        this.context.lineTo(283, 230);
        this.drawDestinationMarker(btnId);
        break;
      case "buildingE":
        this.context.moveTo(278, 164);
        this.context.lineTo(310, 164);
        this.context.moveTo(281, 165);
        this.context.lineTo(281, 205);
        this.context.moveTo(238, 202);
        this.context.lineTo(279, 202);
        this.drawDestinationMarker(btnId);
        break;
      default:
        break;
    }
    this.context.stroke();
  }

  public drawPathFromParkingC(btnId: string) {
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "lime";
    switch (btnId) {
      case "buildingC":
        this.context.moveTo(231, 150);
        this.context.lineTo(146, 150);
        this.drawDestinationMarker(btnId);
        break;
      case "buildingD":
        this.context.moveTo(153, 164);
        this.context.lineTo(140, 164);
        this.context.moveTo(189, 210);
        this.context.lineTo(153, 210);
        this.context.lineTo(153, 163);
        this.drawDestinationMarker(btnId);
        break;
      case "buildingE":
        this.context.moveTo(140, 160);
        this.context.lineTo(155, 160);
        this.context.lineTo(155, 240);
        this.context.lineTo(205, 240);
        this.context.lineTo(224, 230);
        this.context.lineTo(243, 230);
        this.context.lineTo(243, 197);
        this.drawDestinationMarker(btnId);
        break;
      default:
        break;
    }
    this.context.stroke();
  }

  public drawPathFromParkingD(btnId: string) {
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "lime";
    switch (btnId) {
      case "buildingC":
        this.context.moveTo(176, 244);
        this.context.lineTo(176, 240);
        this.context.lineTo(205, 240);
        this.context.lineTo(224, 230);
        this.context.lineTo(280, 230);
        this.context.lineTo(280, 139);
        this.context.lineTo(230, 139);
        this.drawDestinationMarker(btnId);
        break;
      case "buildingD":
        this.context.moveTo(176, 244);
        this.context.lineTo(176, 240);
        this.context.lineTo(153, 240);
        this.context.lineTo(153, 210);
        this.context.lineTo(190, 210);
        this.drawDestinationMarker(btnId);
        break;
      case "buildingE":
        this.context.moveTo(176, 244);
        this.context.lineTo(176, 240);
        this.context.lineTo(205, 240);
        this.context.lineTo(224, 230);
        this.context.lineTo(243, 230);
        this.context.lineTo(243, 197);
        this.drawDestinationMarker(btnId);
        break;
      default:
        break;
    }
    this.context.stroke();
  }

  public drawPathFromParkingF(btnId: string) {
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "lime";
    switch (btnId) {
      case "buildingC":
        this.context.moveTo(281, 138);
        this.context.lineTo(281, 200);
        this.context.moveTo(280, 200);
        this.context.lineTo(310, 200);
        this.context.moveTo(280, 139);
        this.context.lineTo(228, 139);
        this.drawDestinationMarker(btnId);
        break;
      case "buildingD":
        this.context.moveTo(281, 230);
        this.context.lineTo(281, 200);
        this.context.moveTo(280, 200);
        this.context.lineTo(310, 200);
        this.context.moveTo(190, 209);
        this.context.lineTo(190, 240);
        this.context.lineTo(205, 240);
        this.context.lineTo(224, 230);
        this.context.lineTo(283, 230);
        this.drawDestinationMarker(btnId);
        break;
      case "buildingE":
        this.context.moveTo(240, 202);
        this.context.lineTo(310, 202);
        this.drawDestinationMarker(btnId);
        break;
      default:
        break;
    }
    this.context.stroke();
  }

  public drawDestinationMarker(btnId: String) {
    switch (btnId) {
      case "buildingC":
        this.context.drawImage(this.destinationMarker, 215, 110);
        break;
      case "buildingD":
        this.context.drawImage(this.destinationMarker, 175, 180);
        break;
      case "buildingE":
        this.context.drawImage(this.destinationMarker, 227, 165);
        break;
      default:
        break;
    }
  }

  // * MAIN PAGE END *

  public drawEbuildingFloor2_OriginMarker(stairCaseId: string) {
    switch (stairCaseId) {
      case "entrance":
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.drawImage(this.originMarker, 655, 205);
        break;
      case "stairCaseC":
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.drawImage(this.originMarker, 155, 455);
        break;
      case "stairCaseD":
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.drawImage(this.originMarker, 183, 495);
        break;
      default:
        break;
    }
  }

  public drawPathFromEntranceE(btnId: string) {
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "lime";
    switch (btnId) {
      case "e201":
        this.context.moveTo(648, 213);
        this.context.lineTo(608, 141);
        this.context.lineTo(519, 141);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 495);
        this.context.lineTo(231, 495);
        this.context.lineTo(231, 473);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e203":
        this.context.moveTo(648, 213);
        this.context.lineTo(608, 141);
        this.context.lineTo(519, 141);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 495);
        this.context.lineTo(193, 495);
        this.context.lineTo(193, 473);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e208":
        this.context.moveTo(648, 213);
        this.context.lineTo(608, 141);
        this.context.lineTo(519, 141);
        this.context.lineTo(519, 168);
        this.context.moveTo(521, 168);
        this.context.lineTo(253, 168);
        this.context.lineTo(253, 282);
        this.context.lineTo(238, 282);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e212":
        this.context.moveTo(648, 213);
        this.context.lineTo(608, 141);
        this.context.lineTo(519, 141);
        this.context.lineTo(519, 168);
        this.context.moveTo(521, 168);
        this.context.lineTo(165, 168);
        this.context.lineTo(165, 152);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e213":
        this.context.moveTo(648, 213);
        this.context.lineTo(608, 141);
        this.context.lineTo(519, 141);
        this.context.lineTo(519, 168);
        this.context.lineTo(200, 168);
        this.context.lineTo(200, 152);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e218":
        this.context.moveTo(648, 213);
        this.context.lineTo(608, 141);
        this.context.lineTo(519, 141);
        this.context.lineTo(519, 183);
        this.context.lineTo(387, 183);
        this.context.lineTo(387, 202);
        this.context.moveTo(387, 183);
        this.context.lineTo(281, 183);
        this.context.lineTo(281, 202);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e219":
        this.context.moveTo(648, 213);
        this.context.lineTo(608, 141);
        this.context.lineTo(519, 141);
        this.context.lineTo(519, 202);
        this.context.moveTo(519, 183);
        this.context.lineTo(414, 183);
        this.context.lineTo(414, 202);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e220":
        this.context.moveTo(648, 213);
        this.context.lineTo(608, 141);
        this.context.lineTo(519, 141);
        this.context.lineTo(519, 168);
        this.context.moveTo(521, 168);
        this.context.lineTo(253, 168);
        this.context.lineTo(253, 404);
        this.context.lineTo(276, 404);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e223":
        this.context.moveTo(648, 213);
        this.context.lineTo(608, 141);
        this.context.lineTo(519, 141);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 482);
        this.context.lineTo(392, 482);
        this.context.lineTo(392, 456);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e224":
        this.context.moveTo(648, 213);
        this.context.lineTo(608, 141);
        this.context.lineTo(519, 141);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 482);
        this.context.lineTo(408, 482);
        this.context.lineTo(408, 456);
        this.context.moveTo(521, 482);
        this.context.lineTo(521, 456);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e225":
        this.context.moveTo(648, 213);
        this.context.lineTo(608, 141);
        this.context.lineTo(519, 141);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 495);
        this.context.lineTo(331, 495);
        this.context.lineTo(331, 518);
        this.context.moveTo(331, 495);
        this.context.lineTo(216, 495);
        this.context.lineTo(216, 518);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e226":
        this.context.moveTo(648, 213);
        this.context.lineTo(608, 141);
        this.context.lineTo(519, 141);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 495);
        this.context.lineTo(358, 495);
        this.context.lineTo(358, 518);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e227":
        this.context.moveTo(648, 213);
        this.context.lineTo(608, 141);
        this.context.lineTo(519, 141);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 518);
        this.context.moveTo(543, 495);
        this.context.lineTo(432, 495);
        this.context.lineTo(432, 518);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e228":
        this.context.arc(610, 213, 35, 0, Math.PI, true);
        this.context.lineTo(575, 517);
        this.context.moveTo(575, 496);
        this.context.lineTo(635, 496);
        this.context.lineTo(637, 496);
        this.context.lineTo(637, 518);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e244":
        this.context.arc(610, 213, 35, 0, Math.PI, true);
        this.context.lineTo(575, 480);
        this.context.lineTo(640, 480);
        this.context.lineTo(640, 450);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e245":
        this.context.arc(610, 213, 35, 0, Math.PI, true);
        this.context.lineTo(575, 480);
        this.context.lineTo(670, 480);
        this.context.lineTo(670, 506);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e250":
        this.context.moveTo(648, 213);
        this.context.lineTo(608, 141);
        this.context.lineTo(519, 141);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 482);
        this.context.lineTo(279, 482);
        this.context.lineTo(279, 468);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "ifc":
        this.context.moveTo(648, 213);
        this.context.lineTo(610, 130);
        this.context.lineTo(669, 103);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "sec":
        this.context.moveTo(648, 213);
        this.context.lineTo(633, 173);
        this.context.lineTo(674, 160);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "wrs":
        this.context.moveTo(648, 213);
        this.context.lineTo(608, 141);
        this.context.lineTo(519, 141);
        this.context.lineTo(519, 168);
        this.context.moveTo(521, 168);
        this.context.lineTo(253, 168);
        this.context.lineTo(253, 370);
        this.context.lineTo(239, 370);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      default:
        break;
    }
    this.context.stroke();
  }

  public drawPathFromStairCaseC(btnId: string) {
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "lime";
    switch (btnId) {
      case "e201":
        this.context.moveTo(183, 487);
        this.context.lineTo(231, 487);
        this.context.lineTo(231, 473);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e203":
        this.context.moveTo(183, 487);
        this.context.lineTo(193, 487);
        this.context.lineTo(193, 473);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e208":
        this.context.moveTo(183, 487);
        this.context.lineTo(253, 487);
        this.context.lineTo(253, 282);
        this.context.lineTo(238, 282);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e212":
        this.context.moveTo(183, 487);
        this.context.lineTo(253, 487);
        this.context.lineTo(253, 168);
        this.context.lineTo(200, 168);
        this.context.lineTo(165, 168);
        this.context.lineTo(165, 152);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e213":
        this.context.moveTo(183, 487);
        this.context.lineTo(253, 487);
        this.context.lineTo(253, 168);
        this.context.lineTo(200, 168);
        this.context.lineTo(200, 152);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e218":
        this.context.moveTo(183, 487);
        this.context.lineTo(253, 487);
        this.context.lineTo(253, 183);
        this.context.lineTo(281, 183);
        this.context.lineTo(281, 202);
        this.context.moveTo(281, 183);
        this.context.lineTo(386, 183);
        this.context.lineTo(386, 202);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e219":
        this.context.moveTo(183, 487);
        this.context.lineTo(253, 487);
        this.context.lineTo(253, 183);
        this.context.lineTo(414, 183);
        this.context.lineTo(414, 202);
        this.context.moveTo(414, 183);
        this.context.lineTo(520, 183);
        this.context.lineTo(520, 202);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e220":
        this.context.moveTo(183, 487);
        this.context.lineTo(253, 487);
        this.context.lineTo(253, 404);
        this.context.lineTo(276, 404);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e223":
        this.context.moveTo(183, 487);
        this.context.lineTo(392, 487);
        this.context.lineTo(392, 456);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e224":
        this.context.moveTo(183, 487);
        this.context.lineTo(520, 487);
        this.context.lineTo(520, 456);
        this.context.moveTo(408, 487);
        this.context.lineTo(408, 456);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e225":
        this.context.moveTo(183, 487);
        this.context.lineTo(330, 487);
        this.context.lineTo(331, 518);
        this.context.moveTo(217, 487);
        this.context.lineTo(217, 518);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e226":
        this.context.moveTo(183, 487);
        this.context.lineTo(358, 487);
        this.context.lineTo(358, 518);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e227":
        this.context.moveTo(183, 487);
        this.context.lineTo(430, 487);
        this.context.lineTo(430, 518);
        this.context.moveTo(430, 487);
        this.context.lineTo(540, 487);
        this.context.lineTo(540, 518);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e228":
        this.context.moveTo(183, 487);
        this.context.lineTo(637, 487);
        this.context.lineTo(637, 518);
        this.context.moveTo(571, 487);
        this.context.lineTo(571, 518);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e244":
        this.context.moveTo(183, 487);
        this.context.lineTo(640, 487);
        this.context.lineTo(640, 450);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e245":
        this.context.moveTo(183, 487);
        this.context.lineTo(670, 487);
        this.context.lineTo(670, 506);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e250":
        this.context.moveTo(183, 487);
        this.context.lineTo(279, 487);
        this.context.lineTo(279, 468);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "ifc":
        this.context.moveTo(183, 487);
        this.context.lineTo(578, 487);
        this.context.lineTo(578, 103);
        this.context.lineTo(669, 103);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "sec":
        this.context.moveTo(183, 487);
        this.context.lineTo(578, 487);
        this.context.lineTo(578, 160);
        this.context.lineTo(674, 160);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "wrs":
        this.context.moveTo(183, 487);
        this.context.lineTo(253, 487);
        this.context.lineTo(253, 370);
        this.context.lineTo(239, 370);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      default:
        break;
    }
    this.context.stroke();
  }

  public drawPathFromStairCaseD(btnId: string) {
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "lime";
    switch (btnId) {
      case "e201":
        this.context.moveTo(200, 495);
        this.context.lineTo(200, 487);
        this.context.lineTo(231, 487);
        this.context.lineTo(231, 473);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e203":
        this.context.moveTo(200, 495);
        this.context.lineTo(200, 487);
        this.context.lineTo(193, 487);
        this.context.lineTo(193, 473);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e208":
        this.context.moveTo(200, 495);
        this.context.lineTo(200, 487);
        this.context.lineTo(253, 487);
        this.context.lineTo(253, 282);
        this.context.lineTo(238, 282);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e212":
        this.context.moveTo(200, 495);
        this.context.lineTo(200, 487);
        this.context.lineTo(253, 487);
        this.context.lineTo(253, 168);
        this.context.lineTo(200, 168);
        this.context.lineTo(165, 168);
        this.context.lineTo(165, 152);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e213":
        this.context.moveTo(200, 495);
        this.context.lineTo(200, 487);
        this.context.lineTo(253, 487);
        this.context.lineTo(253, 168);
        this.context.lineTo(200, 168);
        this.context.lineTo(200, 152);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e218":
        this.context.moveTo(200, 495);
        this.context.lineTo(200, 487);
        this.context.lineTo(253, 487);
        this.context.lineTo(253, 183);
        this.context.lineTo(281, 183);
        this.context.lineTo(281, 202);
        this.context.moveTo(281, 183);
        this.context.lineTo(386, 183);
        this.context.lineTo(386, 202);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e219":
        this.context.moveTo(200, 495);
        this.context.lineTo(200, 487);
        this.context.lineTo(253, 487);
        this.context.lineTo(253, 183);
        this.context.lineTo(414, 183);
        this.context.lineTo(414, 202);
        this.context.moveTo(414, 183);
        this.context.lineTo(520, 183);
        this.context.lineTo(520, 202);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e220":
        this.context.moveTo(200, 495);
        this.context.lineTo(200, 487);
        this.context.lineTo(253, 487);
        this.context.lineTo(253, 404);
        this.context.lineTo(276, 404);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e223":
        this.context.moveTo(200, 495);
        this.context.lineTo(200, 487);
        this.context.lineTo(392, 487);
        this.context.lineTo(392, 456);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e224":
        this.context.moveTo(200, 495);
        this.context.lineTo(200, 487);
        this.context.lineTo(520, 487);
        this.context.lineTo(520, 456);
        this.context.moveTo(408, 487);
        this.context.lineTo(408, 456);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e225":
        this.context.moveTo(200, 495);
        this.context.lineTo(200, 487);
        this.context.lineTo(330, 487);
        this.context.lineTo(331, 518);
        this.context.moveTo(217, 487);
        this.context.lineTo(217, 518);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e226":
        this.context.moveTo(200, 495);
        this.context.lineTo(200, 487);
        this.context.lineTo(358, 487);
        this.context.lineTo(358, 518);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e227":
        this.context.moveTo(200, 495);
        this.context.lineTo(200, 487);
        this.context.lineTo(430, 487);
        this.context.lineTo(430, 518);
        this.context.moveTo(430, 487);
        this.context.lineTo(540, 487);
        this.context.lineTo(540, 518);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e228":
        this.context.moveTo(200, 495);
        this.context.lineTo(200, 487);
        this.context.lineTo(637, 487);
        this.context.lineTo(637, 518);
        this.context.moveTo(571, 487);
        this.context.lineTo(571, 518);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e244":
        this.context.moveTo(200, 495);
        this.context.lineTo(200, 487);
        this.context.lineTo(640, 487);
        this.context.lineTo(640, 450);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e245":
        this.context.moveTo(200, 495);
        this.context.lineTo(200, 487);
        this.context.lineTo(670, 487);
        this.context.lineTo(670, 506);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e250":
        this.context.moveTo(200, 495);
        this.context.lineTo(200, 487);
        this.context.lineTo(279, 487);
        this.context.lineTo(279, 468);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "ifc":
        this.context.moveTo(200, 495);
        this.context.lineTo(200, 487);
        this.context.lineTo(578, 487);
        this.context.lineTo(578, 103);
        this.context.lineTo(669, 103);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "sec":
        this.context.moveTo(200, 495);
        this.context.lineTo(200, 487);
        this.context.lineTo(578, 487);
        this.context.lineTo(578, 160);
        this.context.lineTo(674, 160);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "wrs":
        this.context.moveTo(200, 495);
        this.context.lineTo(200, 487);
        this.context.lineTo(253, 487);
        this.context.lineTo(253, 370);
        this.context.lineTo(239, 370);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      default:
        break;
    }
    this.context.stroke();
  }

  public drawEbuildingFloor2_DestinationMarker(btnId: String) {
    switch (btnId) {
      case "e201":
        this.context.drawImage(this.destinationMarker, 210, 435);
        break;
      case "e203":
        this.context.drawImage(this.destinationMarker, 177, 435);
        break;
      case "e208":
        this.context.drawImage(this.destinationMarker, 210, 251);
        break;
      case "e212":
        this.context.drawImage(this.destinationMarker, 149, 120);
        break;
      case "e213":
        this.context.drawImage(this.destinationMarker, 185, 120);
        break;
      case "e218":
        this.context.drawImage(this.destinationMarker, 322, 208);
        break;
      case "e219":
        this.context.drawImage(this.destinationMarker, 450, 208);
        break;
      case "e220":
        this.context.drawImage(this.destinationMarker, 275, 380);
        break;
      case "e223":
        this.context.drawImage(this.destinationMarker, 340, 430);
        break;
      case "e224":
        this.context.drawImage(this.destinationMarker, 445, 430);
        break;
      case "e225":
        this.context.drawImage(this.destinationMarker, 255, 510);
        break;
      case "e226":
        this.context.drawImage(this.destinationMarker, 370, 510);
        break;
      case "e227":
        this.context.drawImage(this.destinationMarker, 470, 510);
        break;
      case "e228":
        this.context.drawImage(this.destinationMarker, 590, 510);
        break;
      case "e244":
        this.context.drawImage(this.destinationMarker, 620, 415);
        break;
      case "e245":
        this.context.drawImage(this.destinationMarker, 670, 490);
        break;
      case "e250":
        this.context.drawImage(this.destinationMarker, 275, 430);
        break;
      case "ifc":
        this.context.drawImage(this.destinationMarker, 660,70);
        break;
      case "sec":
        this.context.drawImage(this.destinationMarker, 665,130);
        break;
      case "wrs":
        this.context.drawImage(this.destinationMarker, 210, 360);
        break;
      default:
        break;
    }
  }
}

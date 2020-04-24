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
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    switch (parkingId) {
      case "parkingA":
        this.context.drawImage(this.originMarker, 315, 260);
        break;
      case "parkingB":
        this.context.drawImage(this.originMarker, 295, 132);
        break;
      case "parkingC":
        this.context.drawImage(this.originMarker, 121, 138);
        break;
      case "parkingD":
        this.context.drawImage(this.originMarker, 160, 243);
        break;
      case "parkingF":
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

  // * E BUILDING START *
  public drawEbuildingFloor2_OriginMarker(stairCaseId: string) {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    switch (stairCaseId) {
      case "entrance":
        this.context.drawImage(this.originMarker, 655, 205);
        break;
      case "elevator":
        this.context.drawImage(this.originMarker, 529, 60);
        break;
      case "stairCaseA":
        this.context.drawImage(this.originMarker, 440, 55);
        break;
      case "stairCaseB":
        this.context.drawImage(this.originMarker, 440, 128);
        break;
      case "stairCaseC":
        this.context.drawImage(this.originMarker, 155, 455);
        break;
      case "stairCaseD":
        this.context.drawImage(this.originMarker, 183, 495);
        break;
      case "stairCaseE":
        this.context.drawImage(this.originMarker, 653, 380);
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

  public drawPathFromElevator(btnId: string) {
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "lime";
    switch (btnId) {
      case "e201":
        this.context.moveTo(528, 93);
        this.context.lineTo(519, 93);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 495);
        this.context.lineTo(231, 495);
        this.context.lineTo(231, 473);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e203":
        this.context.moveTo(528, 93);
        this.context.lineTo(519, 93);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 495);
        this.context.lineTo(193, 495);
        this.context.lineTo(193, 473);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e208":
        this.context.moveTo(528, 93);
        this.context.lineTo(519, 93);
        this.context.lineTo(519, 141);
        this.context.lineTo(519, 168);
        this.context.moveTo(521, 168);
        this.context.lineTo(253, 168);
        this.context.lineTo(253, 282);
        this.context.lineTo(238, 282);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e212":
        this.context.moveTo(528, 93);
        this.context.lineTo(519, 93);
        this.context.lineTo(519, 168);
        this.context.moveTo(521, 168);
        this.context.lineTo(165, 168);
        this.context.lineTo(165, 152);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e213":
        this.context.moveTo(528, 93);
        this.context.lineTo(519, 93);
        this.context.lineTo(519, 168);
        this.context.lineTo(200, 168);
        this.context.lineTo(200, 152);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e218":
        this.context.moveTo(528, 93);
        this.context.lineTo(512, 93);
        this.context.lineTo(512, 178);
        this.context.lineTo(281, 178);
        this.context.lineTo(281, 202);
        this.context.moveTo(387, 178);
        this.context.lineTo(387, 202);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e219":
        this.context.moveTo(528, 93);
        this.context.lineTo(512, 93);
        this.context.lineTo(512, 178);
        this.context.lineTo(415, 178);
        this.context.lineTo(415, 202);
        this.context.moveTo(512, 178);
        this.context.lineTo(520, 178);
        this.context.lineTo(520, 202);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e220":
        this.context.moveTo(528, 93);
        this.context.lineTo(519, 93);
        this.context.lineTo(519, 168);
        this.context.moveTo(521, 168);
        this.context.lineTo(253, 168);
        this.context.lineTo(253, 404);
        this.context.lineTo(276, 404);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e223":
        this.context.moveTo(528, 93);
        this.context.lineTo(519, 93);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 482);
        this.context.lineTo(392, 482);
        this.context.lineTo(392, 456);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e224":
        this.context.moveTo(528, 93);
        this.context.lineTo(519, 93);
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
        this.context.moveTo(528, 93);
        this.context.lineTo(519, 93);
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
        this.context.moveTo(528, 93);
        this.context.lineTo(519, 93);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 495);
        this.context.lineTo(358, 495);
        this.context.lineTo(358, 518);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e227":
        this.context.moveTo(528, 93);
        this.context.lineTo(519, 93);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 518);
        this.context.moveTo(543, 495);
        this.context.lineTo(432, 495);
        this.context.lineTo(432, 518);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e228":
        this.context.moveTo(528, 93);
        this.context.lineTo(519, 93);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 487);
        this.context.lineTo(575, 487);
        this.context.lineTo(575, 517);
        this.context.moveTo(575, 487);
        this.context.lineTo(637, 487);
        this.context.lineTo(637, 518);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e244":
        this.context.moveTo(528, 93);
        this.context.lineTo(519, 93);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 487);
        this.context.lineTo(640, 487);
        this.context.lineTo(640, 450);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e245":
        this.context.moveTo(528, 93);
        this.context.lineTo(519, 93);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 487);
        this.context.lineTo(670, 487);
        this.context.lineTo(670, 506);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e250":
        this.context.moveTo(528, 93);
        this.context.lineTo(519, 93);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 482);
        this.context.lineTo(279, 482);
        this.context.lineTo(279, 468);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "ifc":
        this.context.moveTo(528, 93);
        this.context.lineTo(519, 93);
        this.context.lineTo(519, 145);
        this.context.lineTo(580, 145);
        this.context.lineTo(580, 103);
        this.context.lineTo(669, 103);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "sec":
        this.context.moveTo(528, 93);
        this.context.lineTo(519, 93);
        this.context.lineTo(519, 145);
        this.context.lineTo(580, 145);
        this.context.lineTo(580, 160);
        this.context.lineTo(674, 160);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "wrs":
        this.context.moveTo(528, 93);
        this.context.lineTo(519, 93);
        this.context.lineTo(519, 168);
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

  public drawPathFromStairCaseA(btnId: string) {
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "lime";
    switch (btnId) {
      case "e201":
        this.context.moveTo(490, 77);
        this.context.lineTo(519, 77);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 495);
        this.context.lineTo(231, 495);
        this.context.lineTo(231, 473);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e203":
        this.context.moveTo(490, 77);
        this.context.lineTo(519, 77);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 495);
        this.context.lineTo(193, 495);
        this.context.lineTo(193, 473);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e208":
        this.context.moveTo(490, 77);
        this.context.lineTo(519, 77);
        this.context.lineTo(519, 141);
        this.context.lineTo(519, 168);
        this.context.moveTo(521, 168);
        this.context.lineTo(253, 168);
        this.context.lineTo(253, 282);
        this.context.lineTo(238, 282);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e212":
        this.context.moveTo(490, 77);
        this.context.lineTo(519, 77);
        this.context.lineTo(519, 168);
        this.context.moveTo(521, 168);
        this.context.lineTo(165, 168);
        this.context.lineTo(165, 152);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e213":
        this.context.moveTo(490, 77);
        this.context.lineTo(519, 77);
        this.context.lineTo(519, 168);
        this.context.lineTo(200, 168);
        this.context.lineTo(200, 152);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e218":
        this.context.moveTo(490, 77);
        this.context.lineTo(512, 77);
        this.context.lineTo(512, 178);
        this.context.lineTo(281, 178);
        this.context.lineTo(281, 202);
        this.context.moveTo(387, 178);
        this.context.lineTo(387, 202);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e219":
        this.context.moveTo(490, 77);
        this.context.lineTo(512, 77);
        this.context.lineTo(512, 178);
        this.context.lineTo(415, 178);
        this.context.lineTo(415, 202);
        this.context.moveTo(512, 178);
        this.context.lineTo(520, 178);
        this.context.lineTo(520, 202);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e220":
        this.context.moveTo(490, 77);
        this.context.lineTo(519, 77);
        this.context.lineTo(519, 168);
        this.context.moveTo(521, 168);
        this.context.lineTo(253, 168);
        this.context.lineTo(253, 404);
        this.context.lineTo(276, 404);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e223":
        this.context.moveTo(490, 77);
        this.context.lineTo(519, 77);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 482);
        this.context.lineTo(392, 482);
        this.context.lineTo(392, 456);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e224":
        this.context.moveTo(490, 77);
        this.context.lineTo(519, 77);
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
        this.context.moveTo(490, 77);
        this.context.lineTo(519, 77);
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
        this.context.moveTo(490, 77);
        this.context.lineTo(519, 77);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 495);
        this.context.lineTo(358, 495);
        this.context.lineTo(358, 518);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e227":
        this.context.moveTo(490, 77);
        this.context.lineTo(519, 77);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 518);
        this.context.moveTo(543, 495);
        this.context.lineTo(432, 495);
        this.context.lineTo(432, 518);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e228":
        this.context.moveTo(490, 77);
        this.context.lineTo(519, 77);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 487);
        this.context.lineTo(575, 487);
        this.context.lineTo(575, 517);
        this.context.moveTo(575, 487);
        this.context.lineTo(637, 487);
        this.context.lineTo(637, 518);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e244":
        this.context.moveTo(490, 77);
        this.context.lineTo(519, 77);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 487);
        this.context.lineTo(640, 487);
        this.context.lineTo(640, 450);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e245":
        this.context.moveTo(490, 77);
        this.context.lineTo(519, 77);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 487);
        this.context.lineTo(670, 487);
        this.context.lineTo(670, 506);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e250":
        this.context.moveTo(490, 77);
        this.context.lineTo(519, 77);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 482);
        this.context.lineTo(279, 482);
        this.context.lineTo(279, 468);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "ifc":
        this.context.moveTo(490, 77);
        this.context.lineTo(519, 77);
        this.context.lineTo(519, 145);
        this.context.lineTo(580, 145);
        this.context.lineTo(580, 103);
        this.context.lineTo(669, 103);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "sec":
        this.context.moveTo(490, 77);
        this.context.lineTo(519, 77);
        this.context.lineTo(519, 145);
        this.context.lineTo(580, 145);
        this.context.lineTo(580, 160);
        this.context.lineTo(674, 160);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "wrs":
        this.context.moveTo(490, 77);
        this.context.lineTo(519, 77);
        this.context.lineTo(519, 168);
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

  public drawPathFromStairCaseB(btnId: string) {
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "lime";
    switch (btnId) {
      case "e201":
        this.context.moveTo(490, 148);
        this.context.lineTo(519, 148);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 495);
        this.context.lineTo(231, 495);
        this.context.lineTo(231, 473);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e203":
        this.context.moveTo(490, 148);
        this.context.lineTo(519, 148);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 495);
        this.context.lineTo(193, 495);
        this.context.lineTo(193, 473);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e208":
        this.context.moveTo(490, 148);
        this.context.lineTo(519, 148);
        this.context.lineTo(519, 168);
        this.context.moveTo(521, 168);
        this.context.lineTo(253, 168);
        this.context.lineTo(253, 282);
        this.context.lineTo(238, 282);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e212":
        this.context.moveTo(490, 148);
        this.context.lineTo(519, 148);
        this.context.lineTo(519, 168);
        this.context.moveTo(521, 168);
        this.context.lineTo(165, 168);
        this.context.lineTo(165, 152);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e213":
        this.context.moveTo(490, 148);
        this.context.lineTo(519, 148);
        this.context.lineTo(519, 168);
        this.context.lineTo(200, 168);
        this.context.lineTo(200, 152);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e218":
        this.context.moveTo(490, 148);
        this.context.lineTo(512, 148);
        this.context.lineTo(512, 178);
        this.context.lineTo(281, 178);
        this.context.lineTo(281, 202);
        this.context.moveTo(387, 178);
        this.context.lineTo(387, 202);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e219":
        this.context.moveTo(490, 148);
        this.context.lineTo(512, 148);
        this.context.lineTo(512, 178);
        this.context.lineTo(415, 178);
        this.context.lineTo(415, 202);
        this.context.moveTo(512, 178);
        this.context.lineTo(520, 178);
        this.context.lineTo(520, 202);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e220":
        this.context.moveTo(490, 148);
        this.context.lineTo(519, 148);
        this.context.lineTo(519, 168);
        this.context.moveTo(521, 168);
        this.context.lineTo(253, 168);
        this.context.lineTo(253, 404);
        this.context.lineTo(276, 404);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e223":
        this.context.moveTo(490, 148);
        this.context.lineTo(519, 148);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 482);
        this.context.lineTo(392, 482);
        this.context.lineTo(392, 456);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e224":
        this.context.moveTo(490, 148);
        this.context.lineTo(519, 148);
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
        this.context.moveTo(490, 148);
        this.context.lineTo(519, 148);
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
        this.context.moveTo(490, 148);
        this.context.lineTo(519, 148);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 495);
        this.context.lineTo(358, 495);
        this.context.lineTo(358, 518);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e227":
        this.context.moveTo(490, 148);
        this.context.lineTo(519, 148);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 518);
        this.context.moveTo(543, 495);
        this.context.lineTo(432, 495);
        this.context.lineTo(432, 518);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e228":
        this.context.moveTo(490, 148);
        this.context.lineTo(519, 148);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 487);
        this.context.lineTo(575, 487);
        this.context.lineTo(575, 517);
        this.context.moveTo(575, 487);
        this.context.lineTo(637, 487);
        this.context.lineTo(637, 518);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e244":
        this.context.moveTo(490, 148);
        this.context.lineTo(519, 148);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 487);
        this.context.lineTo(640, 487);
        this.context.lineTo(640, 450);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e245":
        this.context.moveTo(490, 148);
        this.context.lineTo(519, 148);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 487);
        this.context.lineTo(670, 487);
        this.context.lineTo(670, 506);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e250":
        this.context.moveTo(490, 148);
        this.context.lineTo(519, 148);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 482);
        this.context.lineTo(279, 482);
        this.context.lineTo(279, 468);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "ifc":
        this.context.moveTo(490, 148);
        this.context.lineTo(519, 148);
        this.context.lineTo(580, 148);
        this.context.lineTo(580, 103);
        this.context.lineTo(669, 103);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "sec":
        this.context.moveTo(490, 148);
        this.context.lineTo(519, 148);
        this.context.lineTo(580, 148);
        this.context.lineTo(580, 160);
        this.context.lineTo(674, 160);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "wrs":
        this.context.moveTo(490, 148);
        this.context.lineTo(519, 148);
        this.context.lineTo(519, 168);
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

  public drawPathFromStairCaseE(btnId: string) {
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "lime";
    switch (btnId) {
      case "e201":
        this.context.moveTo(653, 360);
        this.context.lineTo(586, 144);
        this.context.lineTo(519, 144);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 495);
        this.context.lineTo(231, 495);
        this.context.lineTo(231, 473);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e203":
        this.context.moveTo(653, 360);
        this.context.lineTo(586, 144);
        this.context.lineTo(519, 144);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 495);
        this.context.lineTo(193, 495);
        this.context.lineTo(193, 473);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e208":
        this.context.moveTo(653, 360);
        this.context.lineTo(586, 144);
        this.context.lineTo(519, 144);
        this.context.lineTo(519, 168);
        this.context.moveTo(521, 168);
        this.context.lineTo(253, 168);
        this.context.lineTo(253, 282);
        this.context.lineTo(238, 282);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e212":
        this.context.moveTo(653, 360);
        this.context.lineTo(586, 144);
        this.context.lineTo(519, 144);
        this.context.lineTo(519, 168);
        this.context.moveTo(521, 168);
        this.context.lineTo(165, 168);
        this.context.lineTo(165, 152);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e213":
        this.context.moveTo(653, 360);
        this.context.lineTo(586, 144);
        this.context.lineTo(519, 144);
        this.context.lineTo(519, 168);
        this.context.lineTo(200, 168);
        this.context.lineTo(200, 152);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e218":
        this.context.moveTo(653, 360);
        this.context.lineTo(586, 144);
        this.context.lineTo(519, 144);
        this.context.lineTo(519, 183);
        this.context.lineTo(387, 183);
        this.context.lineTo(387, 202);
        this.context.moveTo(387, 183);
        this.context.lineTo(281, 183);
        this.context.lineTo(281, 202);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e219":
        this.context.moveTo(653, 360);
        this.context.lineTo(586, 144);
        this.context.lineTo(519, 144);
        this.context.lineTo(519, 202);
        this.context.moveTo(519, 183);
        this.context.lineTo(414, 183);
        this.context.lineTo(414, 202);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e220":
        this.context.moveTo(653, 360);
        this.context.lineTo(586, 144);
        this.context.lineTo(519, 144);
        this.context.lineTo(519, 168);
        this.context.moveTo(521, 168);
        this.context.lineTo(253, 168);
        this.context.lineTo(253, 404);
        this.context.lineTo(276, 404);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e223":
        this.context.moveTo(653, 360);
        this.context.lineTo(586, 144);
        this.context.lineTo(519, 144);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 482);
        this.context.lineTo(392, 482);
        this.context.lineTo(392, 456);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e224":
        this.context.moveTo(653, 360);
        this.context.lineTo(586, 144);
        this.context.lineTo(519, 144);
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
        this.context.moveTo(653, 360);
        this.context.lineTo(586, 144);
        this.context.lineTo(519, 144);
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
        this.context.moveTo(653, 360);
        this.context.lineTo(586, 144);
        this.context.lineTo(519, 144);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 495);
        this.context.lineTo(358, 495);
        this.context.lineTo(358, 518);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e227":
        this.context.moveTo(653, 360);
        this.context.lineTo(586, 144);
        this.context.lineTo(519, 144);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 518);
        this.context.moveTo(543, 495);
        this.context.lineTo(432, 495);
        this.context.lineTo(432, 518);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e228":
        this.context.arc(592, 212, 15, 0, Math.PI, true);
        this.context.moveTo(653, 360);
        this.context.lineTo(607, 210);
        this.context.moveTo(577, 210);
        this.context.lineTo(577, 517);
        this.context.moveTo(575, 496);
        this.context.lineTo(637, 496);
        this.context.lineTo(637, 518);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e244":
        this.context.arc(592, 212, 15, 0, Math.PI, true);
        this.context.moveTo(653, 360);
        this.context.lineTo(607, 210);
        this.context.moveTo(577, 210);
        this.context.lineTo(577, 480);
        this.context.lineTo(640, 480);
        this.context.lineTo(640, 450);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e245":
        this.context.arc(592, 212, 15, 0, Math.PI, true);
        this.context.moveTo(653, 360);
        this.context.lineTo(607, 210);
        this.context.moveTo(577, 210);
        this.context.lineTo(577, 480);
        this.context.lineTo(670, 480);
        this.context.lineTo(670, 506);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "e250":
        this.context.moveTo(653, 360);
        this.context.lineTo(586, 144);
        this.context.lineTo(519, 144);
        this.context.lineTo(519, 190);
        this.context.lineTo(543, 190);
        this.context.lineTo(543, 482);
        this.context.lineTo(279, 482);
        this.context.lineTo(279, 468);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "ifc":
        this.context.moveTo(653, 360);
        this.context.lineTo(586, 144);
        this.context.lineTo(669, 103);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "sec":
        this.context.moveTo(653, 360);
        this.context.lineTo(592, 160);
        this.context.lineTo(674, 160);
        this.drawEbuildingFloor2_DestinationMarker(btnId);
        break;
      case "wrs":
        this.context.moveTo(653, 360);
        this.context.lineTo(586, 144);
        this.context.lineTo(519, 144);
        this.context.lineTo(519, 168);
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
  // * E BUILDING END *

  // * D BUILDING START *
  public drawDbuildingFloor2_OriginMarker(stairCaseId: string) {
    switch (stairCaseId) {
      case "entrance":
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.drawImage(this.originMarker, 655,205);
        break;

      case "stairCaseD":
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.drawImage(this.originMarker, 35, 540);
        break;

      case "stairCaseD_b":
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.drawImage(this.originMarker, 373, 130);
        break;

      case "stairCaseD_c":
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.drawImage(this.originMarker, 403, 454);
        break;

      case "stairCaseD_d":
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.drawImage(this.originMarker, 733, 200);
        break;        

      case "elevator_a":
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.drawImage(this.originMarker, 360, 438);
        break;

      default:
        break;
    }
  }

  public drawPathFromStairCaseD_x(btnId: string) {
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "lime";
    switch (btnId) {

      case "emg":
        this.context.moveTo(65,554);
        this.context.lineTo(351, 554);
        this.context.lineTo(351, 441);
        this.context.lineTo(610, 441);
        this.context.lineTo(610, 418);
        this.context.lineTo(641, 418);
        this.context.lineTo(641, 429);
        this.context.moveTo(610, 420);
        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "cb3f": 
        this.context.moveTo(67,554);
        this.context.lineTo(119, 554);
        this.context.lineTo(119, 399);
        this.context.lineTo(119, 399);
        this.context.lineTo(119, 245);
        this.context.lineTo(282, 245);
        this.context.lineTo(282, 195);
        this.context.lineTo(403, 197);
        this.context.lineTo(430, 197);
        this.context.lineTo(430, 135);
        this.context.lineTo(418, 135);
        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "eb2f":
        this.context.moveTo(65,554);
        this.context.lineTo(351, 554);
        this.context.lineTo(351, 441);
        this.context.lineTo(610, 441);
        this.context.lineTo(610, 418);
        this.context.lineTo(610, 276);
        this.context.lineTo(677, 276);
        this.context.lineTo(677, 196);
        this.context.lineTo(739, 196);
        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "wrs":
        this.context.moveTo(67,554);
        this.context.lineTo(114, 554);
        this.context.lineTo(114, 337);
        this.context.lineTo(148, 337);
        this.context.lineTo(114, 337);
        this.context.lineTo(114, 251);
        this.context.lineTo(168, 251);
        this.context.lineTo(168, 255);
        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "elevator":
        this.context.moveTo(65,554);
        this.context.lineTo(351, 554);
        this.context.lineTo(351, 441);
        this.context.lineTo(380, 441);
        this.context.lineTo(380, 459);
      break;
      
      case "d201":
        this.context.moveTo(67,554);
        this.context.lineTo(114, 554);
        this.context.lineTo(114, 423);
        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d202":
        this.context.moveTo(67,554);
        this.context.lineTo(114, 554);
        this.context.lineTo(114, 463);
        this.context.lineTo(121, 463);
        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d205":
        this.context.moveTo(67,554);
        this.context.lineTo(114, 554);
        this.context.lineTo(114, 399);
        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d206":
        this.context.moveTo(67,554);
        this.context.lineTo(114, 554);
        this.context.lineTo(114, 399);

        this.context.moveTo(169, 400);        
        this.context.lineTo(114, 399);
        this.context.lineTo(114, 245);
        this.context.lineTo(198, 245);

        this.drawDestinationRoomMarkerD(btnId);

      break;

      case "d209a":
        this.context.moveTo(65,554);
        this.context.lineTo(119, 554);
        this.context.lineTo(119, 399);
        this.context.lineTo(119, 248);
        this.context.lineTo(100, 248);
        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d209":
        this.context.moveTo(65,554);
        this.context.lineTo(119, 554);
        this.context.lineTo(119, 399);
        this.context.lineTo(119, 279);
        this.context.lineTo(91, 279);
        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d210":
        this.context.moveTo(65,554);
        this.context.lineTo(119, 554);
        this.context.lineTo(119, 399);
        this.context.lineTo(119, 248);
        this.context.lineTo(100, 248);
        this.context.lineTo(100, 231);
        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d211":
        this.context.moveTo(65,554);
        this.context.lineTo(119, 554);
        this.context.lineTo(119, 399);
        this.context.lineTo(119, 240);
        this.context.lineTo(244, 240);
        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d212":
        this.context.moveTo(67,554);
        this.context.lineTo(119, 554);
        this.context.lineTo(119, 399);

        this.context.lineTo(119, 399);
        this.context.lineTo(119, 245);
        this.context.lineTo(282, 245);
        this.context.lineTo(282, 250);

        this.drawDestinationRoomMarkerD(btnId);

      break;

      case "d214":
        this.context.moveTo(67,554);
        this.context.lineTo(119, 554);
        this.context.lineTo(119, 399);

        this.context.lineTo(119, 399);
        this.context.lineTo(119, 245);
        this.context.lineTo(282, 245);
        this.context.lineTo(282, 195);
        this.context.lineTo(403, 197);
        this.context.lineTo(403, 200);

        this.drawDestinationRoomMarkerD(btnId);

      break;

      case "d216":
        this.context.moveTo(67,554);
        this.context.lineTo(119, 554);
        this.context.lineTo(119, 399);
        this.context.lineTo(119, 399);
        this.context.lineTo(119, 245);
        this.context.lineTo(282, 245);
        this.context.lineTo(282, 195);
        this.context.lineTo(403, 197);
        this.context.lineTo(445, 197);
        this.context.lineTo(445, 199);

        this.drawDestinationRoomMarkerD(btnId);

      break;      

      case "d218":
        this.context.moveTo(65,554);
        this.context.lineTo(351, 554);
        this.context.lineTo(351, 441);
        this.context.lineTo(610, 441);
        this.context.lineTo(610, 331);
        this.context.lineTo(596, 331);
        this.context.moveTo(610, 420);
        this.context.lineTo(610, 195);
        this.context.lineTo(493, 195);
        this.context.lineTo(493, 205);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d222":
        this.context.moveTo(65,554);
        this.context.lineTo(351, 554);
        this.context.lineTo(351, 441);
        this.context.lineTo(420, 441);
        this.context.lineTo(420, 435);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d224":
        this.context.moveTo(65,554);
        this.context.lineTo(351, 554);
        this.context.lineTo(351, 441);
        this.context.lineTo(380, 441);
        this.context.lineTo(380, 436);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d226":
        this.context.moveTo(65,554);
        this.context.lineTo(337, 554);
        this.context.lineTo(337, 437);

        this.drawDestinationRoomMarkerD(btnId);
      break;      

      case "d227":
        this.context.moveTo(65,554);
        this.context.lineTo(351, 554);
        this.context.lineTo(351, 563);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d229":
        this.context.moveTo(65,554);
        this.context.lineTo(220, 554);
        this.context.lineTo(220, 563);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d230":
        this.context.moveTo(67,554);
        this.context.lineTo(114, 554);
        this.context.lineTo(114, 523);
        this.context.lineTo(121, 523);
        // this.context.moveTo(245, 554);
        // this.context.moveTo(243, 545);
        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d231":
        this.context.moveTo(65,554);
        this.context.lineTo(201, 554);
        this.context.lineTo(201, 563);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d233":
        this.context.moveTo(65,554);
        this.context.lineTo(162, 554);
        this.context.lineTo(162, 563);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d235a":
        this.context.moveTo(65,554);
        this.context.lineTo(125, 554);
        this.context.lineTo(125, 563);

        this.drawDestinationRoomMarkerD(btnId);
      break;


      case "d237":
        this.context.moveTo(65,554);
        this.context.lineTo(89, 554);
        this.context.lineTo(89, 563);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d241":
        this.context.moveTo(65,554);
        this.context.lineTo(351, 554);
        this.context.lineTo(351, 441);
        this.context.lineTo(610, 441);
        this.context.lineTo(610, 418);
        this.context.lineTo(641, 418);
        this.context.moveTo(610, 420);
        this.context.lineTo(610, 342);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d245":
        this.context.moveTo(65,554);
        this.context.lineTo(351, 554);
        this.context.lineTo(351, 441);
        this.context.lineTo(610, 441);
        this.context.lineTo(610, 418);
        this.context.lineTo(610, 276);
        this.context.lineTo(677, 276);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d284":
        this.context.moveTo(65,554);
        this.context.lineTo(351, 554);
        this.context.lineTo(351, 546);
        this.context.lineTo(364, 546);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      default:
        break;
    }
    this.context.stroke();
  }

  public drawPathFromStairCaseD_b(btnId: string) {
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "lime";
    switch (btnId) {

      case "emg":
        this.context.moveTo(369,157);
        this.context.lineTo(296, 157);
        this.context.lineTo(296, 195);
        this.context.lineTo(610, 195);
        this.context.lineTo(610, 276);
        this.context.lineTo(610, 418);
        this.context.lineTo(641, 418);
        this.context.lineTo(641, 429);
        this.context.moveTo(610, 420);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "cb3f": 
        this.context.moveTo(369,157);
        this.context.lineTo(296, 157);
        this.context.lineTo(296, 195);
        this.context.lineTo(403, 197);
        this.context.lineTo(430, 197);
        this.context.lineTo(430, 135);
        this.context.lineTo(418, 135);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "eb2f":
        this.context.moveTo(369,157);
        this.context.lineTo(296, 157);
        this.context.lineTo(296, 195);
        this.context.lineTo(610, 195);
        this.context.lineTo(610, 276);
        this.context.lineTo(677, 276);

        this.context.lineTo(677, 196);
        this.context.lineTo(739, 196);
        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "wrs":
        this.context.moveTo(369,157);
        this.context.lineTo(282, 157);
        this.context.lineTo(282, 244);

        this.context.lineTo(169, 244);
        this.context.lineTo(169, 256);
        this.context.lineTo(169, 244);

        this.context.lineTo(115, 244);
        this.context.lineTo(115, 337);
        this.context.lineTo(145, 337);
        this.drawDestinationRoomMarkerD(btnId);

      break;

      case "elevator":
        this.context.moveTo(369,157);
        this.context.lineTo(296, 157);
        this.context.lineTo(296, 195);
        this.context.lineTo(610, 195);
        this.context.lineTo(610, 441);
        this.context.lineTo(380, 441);
        this.context.lineTo(380, 459);
      break;

      case "d201":
        this.context.moveTo(369,157);
        this.context.lineTo(282, 157);
        this.context.lineTo(282, 244);
        this.context.lineTo(119, 244);
        this.context.lineTo(119, 423);
        this.context.lineTo(112, 423);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d202":
        this.context.moveTo(369,157);
        this.context.lineTo(282, 157);
        this.context.lineTo(282, 244);
        this.context.lineTo(119, 244);
        this.context.lineTo(119, 461);
        this.context.lineTo(122, 461);
        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d205":
        this.context.moveTo(369,157);
        this.context.lineTo(282, 157);
        this.context.lineTo(282, 244);
        this.context.lineTo(119, 244);
        this.context.lineTo(119, 399);
        this.context.lineTo(112, 399);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d206":
        this.context.moveTo(369,157);
        this.context.lineTo(282, 157);
        this.context.lineTo(282, 244);
        this.context.lineTo(196, 244);
        this.context.moveTo(169, 400);        
        this.context.lineTo(119, 399);
        this.context.lineTo(119, 245);
        this.context.lineTo(198, 245);

        this.drawDestinationRoomMarkerD(btnId);

      break;

      case "d209a":

        this.context.moveTo(369,157);
        this.context.lineTo(282, 157);
        this.context.lineTo(282, 244);
        this.context.lineTo(119, 244);
        this.context.lineTo(97, 244);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d209":
        this.context.moveTo(369,157);
        this.context.lineTo(282, 157);
        this.context.lineTo(282, 244);
        this.context.lineTo(119, 244);
        this.context.lineTo(119, 279);
        this.context.lineTo(91, 279);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d210":
        this.context.moveTo(369,157);
        this.context.lineTo(282, 157);
        this.context.lineTo(282, 244);
        this.context.lineTo(119, 244);
        this.context.lineTo(100, 244);
        this.context.lineTo(100, 231);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d211":
        this.context.moveTo(369,157);
        this.context.lineTo(282, 157);
        this.context.lineTo(282, 240);
        this.context.lineTo(119, 240);
        this.context.lineTo(244, 240);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d212":
        this.context.moveTo(369,157);
        this.context.lineTo(282, 157);
        this.context.lineTo(282, 250);

        this.drawDestinationRoomMarkerD(btnId);

      break;

      case "d214":
        this.context.moveTo(369,157);
        this.context.lineTo(296, 157);
        this.context.lineTo(296, 195);
        this.context.lineTo(402, 195);
        this.context.lineTo(402, 200);

        this.drawDestinationRoomMarkerD(btnId);

      break;

      case "d216":
        this.context.moveTo(369,157);
        this.context.lineTo(296, 157);
        this.context.lineTo(296, 195);
        this.context.lineTo(445, 195);
        this.context.lineTo(445, 200);

        this.drawDestinationRoomMarkerD(btnId);

      break;      

      case "d218":
        this.context.moveTo(369,157);
        this.context.lineTo(296, 157);
        this.context.lineTo(296, 195);
        this.context.lineTo(492, 195);
        this.context.lineTo(610, 195);
        this.context.lineTo(610, 331);

        this.context.lineTo(610, 195);
        this.context.lineTo(493, 195);
        this.context.lineTo(493, 205);

        this.context.lineTo(492, 195);
        this.context.lineTo(610, 195);
        this.context.lineTo(610, 331);

        this.context.lineTo(596, 331);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d222":
        this.context.moveTo(369,157);
        this.context.lineTo(296, 157);
        this.context.lineTo(296, 195);
        this.context.lineTo(610, 195);
        this.context.lineTo(610, 441);
        this.context.lineTo(422, 441);
        this.context.lineTo(422, 438);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d224":
        this.context.moveTo(369,157);
        this.context.lineTo(296, 157);
        this.context.lineTo(296, 195);
        this.context.lineTo(610, 195);
        this.context.lineTo(610, 441);
        this.context.lineTo(380, 441);
        this.context.lineTo(380, 435);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d226":
        this.context.moveTo(369,157);
        this.context.lineTo(296, 157);
        this.context.lineTo(296, 195);
        this.context.lineTo(610, 195);
        this.context.lineTo(610, 441);
        this.context.lineTo(380, 441);
        this.context.lineTo(337, 437);
        this.context.lineTo(337, 522);
        
        this.drawDestinationRoomMarkerD(btnId);
      break;      

      case "d227":
        this.context.moveTo(369,157);
        this.context.lineTo(296, 157);
        this.context.lineTo(296, 195);
        this.context.lineTo(610, 195);
        this.context.lineTo(610, 441);
        this.context.lineTo(351, 441);
        this.context.lineTo(351, 563);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d229":

        this.context.moveTo(369,157);
        this.context.lineTo(296, 157);
        this.context.lineTo(296, 195);
        this.context.lineTo(610, 195);
        this.context.lineTo(610, 441);
        this.context.lineTo(351, 441);
        this.context.lineTo(351, 553);
        
        this.context.lineTo(220, 553);
        this.context.lineTo(220, 563);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d230":
        this.context.moveTo(369,157);
        this.context.lineTo(282, 157);
        this.context.lineTo(282, 244);
        this.context.lineTo(119, 244);
        this.context.lineTo(119, 522);
        this.context.lineTo(120, 543);
        this.context.lineTo(245, 543);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d231":
        this.context.moveTo(369,157);
        this.context.lineTo(296, 157);
        this.context.lineTo(296, 195);
        this.context.lineTo(610, 195);
        this.context.lineTo(610, 441);
        this.context.lineTo(351, 441);

        this.context.lineTo(351, 553);

        this.context.lineTo(200, 553);
        this.context.lineTo(200, 563);
        
        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d233":
        this.context.moveTo(369,157);
        this.context.lineTo(296, 157);
        this.context.lineTo(296, 195);
        this.context.lineTo(610, 195);
        this.context.lineTo(610, 441);
        this.context.lineTo(351, 441);
        
        this.context.lineTo(351, 553);

        this.context.lineTo(165, 553); 
        this.context.lineTo(165, 563);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d235a":
        this.context.moveTo(369,157);
        this.context.lineTo(296, 157);
        this.context.lineTo(296, 195);
        this.context.lineTo(610, 195);
        this.context.lineTo(610, 441);
        this.context.lineTo(351, 441);
        
        this.context.lineTo(351, 553);

        this.context.lineTo(126, 553); 
        this.context.lineTo(126, 563);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d237":
        this.context.moveTo(369,157);
        this.context.lineTo(296, 157);
        this.context.lineTo(296, 195);
        this.context.lineTo(610, 195);
        this.context.lineTo(610, 441);
        this.context.lineTo(351, 441);

        this.context.lineTo(351, 553);

        this.context.lineTo(88, 553); 
        this.context.lineTo(88, 563);
        
        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d241":
        this.context.moveTo(369,157);
        this.context.lineTo(296, 157);
        this.context.lineTo(296, 195);
        this.context.lineTo(610, 195);
        this.context.lineTo(610, 276);
        this.context.lineTo(610, 418);
        this.context.lineTo(641, 418);
        this.context.moveTo(610, 420);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d245":
        this.context.moveTo(369,157);
        this.context.lineTo(296, 157);
        this.context.lineTo(296, 195);
        this.context.lineTo(610, 195);
        this.context.lineTo(610, 276);
        this.context.lineTo(677, 276);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d284":
        this.context.moveTo(369,157);
        this.context.lineTo(296, 157);
        this.context.lineTo(296, 195);
        this.context.lineTo(610, 195);
        this.context.lineTo(610, 441);
        this.context.lineTo(380, 441);
        this.context.lineTo(351, 441);
        this.context.lineTo(351, 522);

        this.context.lineTo(351, 546);
        this.context.lineTo(364, 546);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      default:
        break;
    }
    this.context.stroke();
  }

  public drawPathFromStairCaseD_c(btnId: string) {
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "lime";
    switch (btnId) {

      case "emg":
        this.context.moveTo(416,453);
        this.context.lineTo(445,441);

        this.context.lineTo(610, 441);

        this.context.lineTo(610, 439);

        this.context.lineTo(610, 418);
        this.context.lineTo(641, 418);
        this.context.lineTo(641, 429);
        this.context.moveTo(610, 420);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "cb3f": 
        this.context.moveTo(416,453);
        this.context.lineTo(445,441);

        this.context.lineTo(610, 441);
        this.context.lineTo(610, 331);

        this.context.lineTo(610, 439);
        this.context.lineTo(610, 195);
        this.context.lineTo(435, 195);

        this.context.lineTo(435, 134);
        this.context.lineTo(419, 134);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "eb2f":
        this.context.moveTo(416,453);
        this.context.lineTo(445,441);

        this.context.lineTo(610, 441);
        this.context.lineTo(610, 331);

        this.context.lineTo(610, 439);
        this.context.lineTo(610, 276);
        this.context.lineTo(677, 276);

        this.context.lineTo(677, 196);
        this.context.lineTo(739, 196);
        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "wrs":
        this.context.moveTo(416,453);
        this.context.lineTo(380, 441);

        this.context.lineTo(351, 441);    
        this.context.lineTo(351, 553);

        this.context.lineTo(114, 554);
        this.context.lineTo(114, 333);

        this.context.lineTo(145, 333);

        this.context.lineTo(114, 333);
        this.context.lineTo(114, 251);

        this.context.lineTo(168, 251);
        this.context.lineTo(168, 255);
        this.drawDestinationRoomMarkerD(btnId);

      break;

      case "elevator":
        this.context.moveTo(416,453);

        this.context.lineTo(380, 441);
        this.context.lineTo(380, 459);
      break;

      case "d201":
        this.context.moveTo(416,453);
        this.context.lineTo(380, 441);

        this.context.lineTo(351, 441);    
        this.context.lineTo(351, 553);

        this.context.lineTo(114, 554);
        this.context.lineTo(114, 423);

        this.context.lineTo(112, 423);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d202":
        this.context.moveTo(416,453);
        this.context.lineTo(380, 441);

        this.context.lineTo(351, 441);
        this.context.lineTo(351, 543);

        this.context.lineTo(245, 543);
        this.context.lineTo(119, 543);        

        this.context.lineTo(119, 463);
        this.context.lineTo(120, 463);

        this.context.lineTo(121, 463);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d205":
        this.context.moveTo(416,453);
        this.context.lineTo(380, 441);

        this.context.lineTo(351, 441);    
        this.context.lineTo(351, 553);

        this.context.lineTo(114, 554);
        this.context.lineTo(114, 399);

        this.context.lineTo(112, 399);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d206":
        this.context.moveTo(416,453);
        this.context.lineTo(380, 441);

        this.context.lineTo(351, 441);    
        this.context.lineTo(351, 553);

        this.context.lineTo(114, 554);
        this.context.lineTo(114, 399);

        this.context.moveTo(169, 400);        
        this.context.lineTo(114, 399);
        this.context.lineTo(114, 245);
        this.context.lineTo(198, 245);

        this.drawDestinationRoomMarkerD(btnId);

      break;

      case "d209a":
        this.context.moveTo(416,453);
        this.context.lineTo(380, 441);

        this.context.lineTo(351, 441);    
        this.context.lineTo(351, 553);

        this.context.lineTo(114, 554);

        this.context.lineTo(114, 279);

        this.context.lineTo(97, 244);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d209":
        this.context.moveTo(416,453);
        this.context.lineTo(380, 441);

        this.context.lineTo(351, 441);    
        this.context.lineTo(351, 553);

        this.context.lineTo(114, 554);

        this.context.lineTo(114, 279);

        this.context.lineTo(91, 279);
        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d210":
        this.context.moveTo(416,453);
        this.context.lineTo(380, 441);

        this.context.lineTo(351, 441);    
        this.context.lineTo(351, 553);

        this.context.lineTo(114, 554);
        this.context.lineTo(114, 279);

        this.context.lineTo(97, 231);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d211":
        this.context.moveTo(416,453);
        this.context.lineTo(380, 441);

        this.context.lineTo(351, 441);    
        this.context.lineTo(351, 553);

        this.context.lineTo(114, 554);
        this.context.lineTo(114, 279);

        this.context.lineTo(119, 240);
        this.context.lineTo(244, 240);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d212":
        this.context.moveTo(416,453);
        this.context.lineTo(380, 441);

        this.context.lineTo(351, 441);    
        this.context.lineTo(351, 553);

        this.context.lineTo(114, 554);
        this.context.lineTo(114, 399);

        this.context.lineTo(114, 245);

        this.context.lineTo(282, 245);
        this.context.lineTo(282, 250);

        this.drawDestinationRoomMarkerD(btnId);

      break;

      case "d214":
        this.context.moveTo(416,453);
        this.context.lineTo(445,441);

        this.context.lineTo(610, 441);
        this.context.lineTo(610, 331);

        this.context.lineTo(610, 439);
        this.context.lineTo(610, 195);
        this.context.lineTo(402, 195);

        this.context.lineTo(402, 200);

        this.drawDestinationRoomMarkerD(btnId);

      break;

      case "d216":        
        this.context.moveTo(416,453);
        this.context.lineTo(445,441);

        this.context.lineTo(610, 441);
        this.context.lineTo(610, 331);

        this.context.lineTo(610, 439);
        this.context.lineTo(610, 195);
        this.context.lineTo(445, 195);

        this.context.lineTo(445, 200);

        this.drawDestinationRoomMarkerD(btnId);

      break;      

      case "d218":
        this.context.moveTo(416,453);
        this.context.lineTo(445,441);

        this.context.lineTo(610, 441);
        this.context.lineTo(610, 331);
        this.context.moveTo(610, 420);
        this.context.lineTo(610, 195);
        this.context.lineTo(493, 195);
        this.context.lineTo(493, 205);

        this.context.lineTo(492, 195);
        this.context.lineTo(610, 195);
        this.context.lineTo(610, 331);

        this.context.lineTo(596, 331);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d222":
        this.context.moveTo(416,453);
        this.context.lineTo(416,435);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d224":
        this.context.moveTo(416,453);

        this.context.lineTo(380, 441);
        this.context.lineTo(380, 435);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d226":
        this.context.moveTo(416,453);
        this.context.lineTo(380, 441);
        this.context.lineTo(337, 437);
        this.context.lineTo(337, 522);
        
        this.drawDestinationRoomMarkerD(btnId);
      break;      

      case "d227":
        this.context.moveTo(416,453);
        this.context.lineTo(380, 441);
        this.context.lineTo(351, 441);
        this.context.lineTo(351, 563);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d229":
        this.context.moveTo(416,453);
        this.context.lineTo(380, 441);

        this.context.lineTo(351, 441);
        this.context.lineTo(351, 553);

        this.context.lineTo(351, 441);
        this.context.lineTo(351, 553);
        
        this.context.lineTo(220, 553);
        this.context.lineTo(220, 563);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d230":
        this.context.moveTo(416,453);
        this.context.lineTo(380, 441);

        this.context.lineTo(351, 441);
        this.context.lineTo(351, 543);

        this.context.lineTo(245, 543);
        this.context.lineTo(119, 543);

        this.context.lineTo(119, 522);
        this.context.lineTo(120, 543);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d231":
        this.context.moveTo(416,453);
        this.context.lineTo(380, 441);

        this.context.lineTo(351, 441);
        this.context.lineTo(351, 553);

        this.context.lineTo(200, 553);
        this.context.lineTo(200, 563);
        
        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d233":
        this.context.moveTo(416,453);
        this.context.lineTo(380, 441);

        this.context.lineTo(351, 441);
        this.context.lineTo(351, 553);

        this.context.lineTo(165, 553); 
        this.context.lineTo(165, 563);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d235a":
        this.context.moveTo(416,453);
        this.context.lineTo(380, 441);

        this.context.lineTo(351, 441);    
        this.context.lineTo(351, 553);

        this.context.lineTo(126, 553); 
        this.context.lineTo(126, 563);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d237":
        this.context.moveTo(416,453);
        this.context.lineTo(380, 441);

        this.context.lineTo(351, 441);
        this.context.lineTo(351, 553);

        this.context.lineTo(88, 553); 
        this.context.lineTo(88, 563);
        
        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d241":
        this.context.moveTo(416,453);
        this.context.lineTo(445,441);

        this.context.lineTo(610, 441);

        this.context.lineTo(610, 439);
        this.context.lineTo(610, 343);

        this.context.lineTo(610, 418);
        this.context.lineTo(641, 418);
        this.context.moveTo(610, 420);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d245":
        this.context.moveTo(416,453);
        this.context.lineTo(445,441);

        this.context.lineTo(610, 441);

        this.context.lineTo(610, 439);
        this.context.lineTo(610, 343);

        this.context.lineTo(610, 418);
        // this.context.lineTo(641, 418);
        // this.context.moveTo(610, 420);

        //
        // this.context.moveTo(369,157);
        // this.context.lineTo(296, 157);
        // this.context.lineTo(296, 195);
        // this.context.lineTo(610, 195);
        this.context.lineTo(610, 276);
        this.context.lineTo(677, 276);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d284":
        this.context.moveTo(416,453);
        this.context.lineTo(380, 441);

        this.context.lineTo(380, 441);

        this.context.lineTo(380, 441);
        this.context.lineTo(351, 441);
        this.context.lineTo(351, 522);

        this.context.lineTo(351, 546);
        this.context.lineTo(364, 546);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      default:
        break;
    }
    this.context.stroke();
  }

  public drawPathFromStairCaseD_d(btnId: string) {
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "lime";
    switch (btnId) {

      case "emg":
        this.context.moveTo(750,198);
        this.context.lineTo(672,198);        
        this.context.lineTo(672,278);
        this.context.lineTo(610,277);
        this.context.lineTo(610, 418);
        this.context.lineTo(641, 418);
        this.context.lineTo(641, 425);
        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "cb3f": 
        this.context.moveTo(750,198);
        this.context.lineTo(672,198);        
        this.context.lineTo(672,278);
        this.context.lineTo(610,277);

        this.context.lineTo(610, 195);
        this.context.lineTo(493, 195);

        this.context.lineTo(492, 195);
        this.context.lineTo(610, 195);

        this.context.lineTo(610, 195);
        this.context.lineTo(435, 195);

        this.context.lineTo(435, 134);
        this.context.lineTo(419, 134);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "eb2f":
        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "wrs":
        this.context.moveTo(750,198);
        this.context.lineTo(672,198);        
        this.context.lineTo(672,278);
        this.context.lineTo(610,277);

        this.context.lineTo(610, 195);

        this.context.lineTo(282, 196);
        this.context.lineTo(282, 245);   

        this.context.lineTo(168, 245);   
        this.context.lineTo(168, 257);   
        this.context.lineTo(168, 245);   

        this.context.lineTo(116, 245);   
        this.context.lineTo(116, 335);   

        this.context.lineTo(147, 335);   
        this.context.lineTo(147, 338);   

        this.drawDestinationRoomMarkerD(btnId);

      break;

      case "elevator":
        this.context.moveTo(750,198);
        this.context.lineTo(672,198);        
        this.context.lineTo(672,278);
        this.context.lineTo(610,277);

        this.context.lineTo(610, 441);
        this.context.lineTo(380, 441);
        this.context.lineTo(380, 459);

      break;

      case "d201":
        this.context.moveTo(750,198);
        this.context.lineTo(672,198);        
        this.context.lineTo(672,278);
        this.context.lineTo(610,277);

        this.context.lineTo(610, 195);

        this.context.lineTo(282, 196);

        this.context.lineTo(282, 244);

        this.context.lineTo(119, 244);
        this.context.lineTo(119, 423);
        this.context.lineTo(112, 423);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d202":
        this.context.moveTo(750,198);
        this.context.lineTo(672,198);        
        this.context.lineTo(672,278);
        this.context.lineTo(610,277);

        this.context.lineTo(610, 195);
        this.context.lineTo(282, 196);

        this.context.lineTo(282, 244);
        this.context.lineTo(119, 244);

        this.context.lineTo(119, 461);
        this.context.lineTo(122, 461);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d205":
        this.context.moveTo(750,198);
        this.context.lineTo(672,198);        
        this.context.lineTo(672,278);
        this.context.lineTo(610,277);

        this.context.lineTo(610, 195);

        this.context.lineTo(282, 196);

        this.context.lineTo(282, 244);
        this.context.lineTo(119, 244);
        this.context.lineTo(119, 399);
        this.context.lineTo(112, 399);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d206":
        this.context.moveTo(750,198);
        this.context.lineTo(672,198);        
        this.context.lineTo(672,278);
        this.context.lineTo(610,277);

        this.context.lineTo(610, 195);
        this.context.lineTo(282, 196);
        this.context.lineTo(282, 244);

        this.context.lineTo(196, 244);
        this.context.moveTo(169, 400);        
        this.context.lineTo(119, 399);
        this.context.lineTo(119, 245);
        this.context.lineTo(198, 245);


        this.drawDestinationRoomMarkerD(btnId);

      break;

      case "d209a":
        this.context.moveTo(750,198);
        this.context.lineTo(672,198);        
        this.context.lineTo(672,278);
        this.context.lineTo(610,277);

        this.context.lineTo(610, 195);
        this.context.lineTo(282, 196);
        
        this.context.lineTo(282, 244);
        this.context.lineTo(119, 244);
        this.context.lineTo(100, 244);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d209":
        this.context.moveTo(750,198);
        this.context.lineTo(672,198);        
        this.context.lineTo(672,278);
        this.context.lineTo(610,277);

        this.context.lineTo(610, 195);
        this.context.lineTo(282, 196);

        this.context.lineTo(282, 244);
        this.context.lineTo(119, 244);
        this.context.lineTo(119, 279);
        this.context.lineTo(91, 279);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d210":
        this.context.moveTo(750,198);
        this.context.lineTo(672,198);        
        this.context.lineTo(672,278);
        this.context.lineTo(610,277);

        this.context.lineTo(610, 195);
        this.context.lineTo(282, 196);
        this.context.lineTo(282, 244);
        
        this.context.lineTo(119, 244);
        this.context.lineTo(100, 244);
        this.context.lineTo(100, 231);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d211":
        this.context.moveTo(750,198);
        this.context.lineTo(672,198);        
        this.context.lineTo(672,278);
        this.context.lineTo(610,277);

        this.context.lineTo(610, 195);
        this.context.lineTo(282, 196);
        this.context.lineTo(282, 244);

        this.context.lineTo(282, 244);

        this.context.lineTo(119, 244);
        this.context.lineTo(244, 244);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d212":
        this.context.moveTo(750,198);
        this.context.lineTo(672,198);        
        this.context.lineTo(672,278);
        this.context.lineTo(610,277);

        this.context.lineTo(610, 195);

        this.context.lineTo(282, 196);
        this.context.lineTo(282, 250);        

        this.drawDestinationRoomMarkerD(btnId);

      break;

      case "d214":
        this.context.moveTo(750,198);
        this.context.lineTo(672,198);        
        this.context.lineTo(672,278);
        this.context.lineTo(610,277);

        this.context.lineTo(610, 195);
        this.context.lineTo(402, 195);

        this.context.lineTo(402, 200);

        this.drawDestinationRoomMarkerD(btnId);

      break;

      case "d216":        
        this.context.moveTo(750,198);
        this.context.lineTo(672,198);        
        this.context.lineTo(672,278);
        this.context.lineTo(610,277);

        this.context.lineTo(610, 195);
        this.context.lineTo(445, 195);

        this.context.lineTo(445, 200);

        this.drawDestinationRoomMarkerD(btnId);

      break;      

      case "d218":
        this.context.moveTo(750,198);
        this.context.lineTo(672,198);        
        this.context.lineTo(672,278);
        this.context.lineTo(610,277);

        this.context.lineTo(610, 195);
        this.context.lineTo(493, 195);
        this.context.lineTo(493, 205);

        this.context.lineTo(492, 195);
        this.context.lineTo(610, 195);
        this.context.lineTo(610, 331);

        this.context.lineTo(596, 331);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d222":
        this.context.moveTo(750,198);
        this.context.lineTo(672,198);        
        this.context.lineTo(672,278);
        this.context.lineTo(610,277);

        this.context.lineTo(610, 441);
        this.context.lineTo(422, 441);
        this.context.lineTo(422, 438);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d224":

        this.context.moveTo(750,198);
        this.context.lineTo(672,198);        
        this.context.lineTo(672,278);
        this.context.lineTo(610,277);

        this.context.lineTo(610, 441);
        this.context.lineTo(380, 441);
        this.context.lineTo(380, 435);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d226":
        this.context.moveTo(750,198);
        this.context.lineTo(672,198);        
        this.context.lineTo(672,278);
        this.context.lineTo(610,277);

        this.context.lineTo(610, 441);
        this.context.lineTo(380, 441);
        this.context.lineTo(337, 437);
        this.context.lineTo(337, 522);
        
        this.drawDestinationRoomMarkerD(btnId);
      break;      

      case "d227":

        this.context.moveTo(750,198);
        this.context.lineTo(672,198);        
        this.context.lineTo(672,278);
        this.context.lineTo(610,277);

        this.context.lineTo(610, 441);
        this.context.lineTo(351, 441);
        this.context.lineTo(351, 563);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d229":
        this.context.moveTo(750,198);
        this.context.lineTo(672,198);        
        this.context.lineTo(672,278);
        this.context.lineTo(610,277);

        this.context.lineTo(610, 441);
        this.context.lineTo(351, 441);
        this.context.lineTo(351, 553);
        
        this.context.lineTo(220, 553);
        this.context.lineTo(220, 563);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d230":
        this.context.moveTo(750,198);
        this.context.lineTo(672,198);        
        this.context.lineTo(672,278);
        this.context.lineTo(610,277);

        this.context.lineTo(610, 441);
        this.context.lineTo(351, 441);

        this.context.lineTo(351, 543);

        this.context.lineTo(245, 543);
        this.context.lineTo(119, 543);

        this.context.lineTo(119, 522);
        this.context.lineTo(120, 543);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d231":

        this.context.moveTo(750,198);
        this.context.lineTo(672,198);        
        this.context.lineTo(672,278);
        this.context.lineTo(610,277);

        this.context.lineTo(610, 441);
        this.context.lineTo(351, 441);

        this.context.lineTo(351, 553);

        this.context.lineTo(200, 553);
        this.context.lineTo(200, 563);
        
        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d233":
        this.context.moveTo(750,198);
        this.context.lineTo(672,198);        
        this.context.lineTo(672,278);
        this.context.lineTo(610,277);

        this.context.lineTo(610, 441);
        this.context.lineTo(351, 441);
        
        this.context.lineTo(351, 553);

        this.context.lineTo(165, 553); 
        this.context.lineTo(165, 563);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d235a":
        this.context.moveTo(750,198);
        this.context.lineTo(672,198);        
        this.context.lineTo(672,278);
        this.context.lineTo(610,277);
      
        this.context.lineTo(610, 441);
        this.context.lineTo(351, 441);
        
        this.context.lineTo(351, 553);

        this.context.lineTo(126, 553); 
        this.context.lineTo(126, 563);
        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d237":
        this.context.moveTo(750,198);
        this.context.lineTo(672,198);        
        this.context.lineTo(672,278);
        this.context.lineTo(610,277);
      
        this.context.lineTo(610, 441);
        this.context.lineTo(351, 441);

        this.context.lineTo(351, 553);

        this.context.lineTo(88, 553); 
        this.context.lineTo(88, 563);
        
        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d241":
        this.context.moveTo(750,198);
        this.context.lineTo(672,198);        
        this.context.lineTo(672,278);
        this.context.lineTo(610,277);
        this.context.lineTo(610, 418);
        this.context.lineTo(641, 418);
        this.context.moveTo(610, 420);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d245":
        this.context.moveTo(750,198);
        this.context.lineTo(672,198);        
        this.context.lineTo(672,277);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d284":
        this.context.moveTo(750,198);
        this.context.lineTo(672,198);        
        this.context.lineTo(672,278);
        this.context.lineTo(610,277);

        this.context.lineTo(610, 441);
        this.context.lineTo(380, 441);
        this.context.lineTo(351, 441);
        this.context.lineTo(351, 522);

        this.context.lineTo(351, 546);
        this.context.lineTo(364, 546);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      default:
        break;
    }
    this.context.stroke();
  }

  public drawPathFromElevator_a(btnId: string) {
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "lime";
    switch (btnId) {

      case "emg":
        this.context.moveTo(385,441);
        this.context.lineTo(445,441);

        this.context.lineTo(610, 441);

        this.context.lineTo(610, 439);

        this.context.lineTo(610, 418);
        this.context.lineTo(641, 418);
        this.context.lineTo(641, 429);
        this.context.moveTo(610, 420);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "cb3f": 
        this.context.moveTo(385,441);
        this.context.lineTo(445,441);

        this.context.lineTo(610, 441);
        this.context.lineTo(610, 331);

        this.context.lineTo(610, 439);
        this.context.lineTo(610, 195);
        this.context.lineTo(435, 195);

        this.context.lineTo(435, 134);
        this.context.lineTo(419, 134);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "eb2f":
        this.context.moveTo(385,441);
        this.context.lineTo(445,441);

        this.context.lineTo(610, 441);
        this.context.lineTo(610, 331);

        this.context.lineTo(610, 439);
        this.context.lineTo(610, 276);
        this.context.lineTo(677, 276);

        this.context.lineTo(677, 196);
        this.context.lineTo(739, 196);
        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "wrs":
        this.context.moveTo(369,441);

        this.context.lineTo(351, 441);    
        this.context.lineTo(351, 553);

        this.context.lineTo(114, 554);
        this.context.lineTo(114, 333);

        this.context.lineTo(145, 333);

        this.context.lineTo(114, 333);
        this.context.lineTo(114, 251);

        this.context.lineTo(168, 251);
        this.context.lineTo(168, 255);
        this.drawDestinationRoomMarkerD(btnId);

      break;

      // case "elevator":
      //   this.context.moveTo(416,453);

      //   this.context.lineTo(380, 441);
      //   this.context.lineTo(380, 459);
      // break;

      case "d201":
        this.context.moveTo(369,441);

        this.context.lineTo(351, 441);    
        this.context.lineTo(351, 553);

        this.context.lineTo(114, 554);
        this.context.lineTo(114, 423);

        this.context.lineTo(112, 423);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d202":
        this.context.moveTo(369,441);

        this.context.lineTo(351, 441);
        this.context.lineTo(351, 543);

        this.context.lineTo(245, 543);
        this.context.lineTo(119, 543);        

        this.context.lineTo(119, 463);
        this.context.lineTo(120, 463);

        this.context.lineTo(121, 463);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d205":
        this.context.moveTo(369,441);

        this.context.lineTo(351, 441);    
        this.context.lineTo(351, 553);

        this.context.lineTo(114, 554);
        this.context.lineTo(114, 399);

        this.context.lineTo(112, 399);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d206":
        this.context.moveTo(369,441);

        this.context.lineTo(351, 441);    
        this.context.lineTo(351, 553);

        this.context.lineTo(114, 554);
        this.context.lineTo(114, 399);

        this.context.moveTo(169, 400);        
        this.context.lineTo(114, 399);
        this.context.lineTo(114, 245);
        this.context.lineTo(198, 245);

        this.drawDestinationRoomMarkerD(btnId);

      break;

      case "d209a":
        this.context.moveTo(369,441);

        this.context.lineTo(351, 441);    
        this.context.lineTo(351, 553);

        this.context.lineTo(114, 554);

        this.context.lineTo(114, 279);

        this.context.lineTo(97, 244);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d209":
        this.context.moveTo(369,441);

        this.context.lineTo(351, 441);    
        this.context.lineTo(351, 553);

        this.context.lineTo(114, 554);

        this.context.lineTo(114, 279);

        this.context.lineTo(91, 279);
        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d210":
        this.context.moveTo(369,441);

        this.context.lineTo(351, 441);    
        this.context.lineTo(351, 553);

        this.context.lineTo(114, 554);
        this.context.lineTo(114, 279);

        this.context.lineTo(97, 231);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d211":
        this.context.moveTo(369,441);

        this.context.lineTo(351, 441);    
        this.context.lineTo(351, 553);

        this.context.lineTo(114, 554);
        this.context.lineTo(114, 279);

        this.context.lineTo(119, 240);
        this.context.lineTo(244, 240);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d212":
        this.context.moveTo(369,441);

        this.context.lineTo(351, 441);    
        this.context.lineTo(351, 553);

        this.context.lineTo(114, 554);
        this.context.lineTo(114, 399);

        this.context.lineTo(114, 245);

        this.context.lineTo(282, 245);
        this.context.lineTo(282, 250);

        this.drawDestinationRoomMarkerD(btnId);

      break;

      case "d214":
        this.context.moveTo(385,441);
        this.context.lineTo(445,441);

        this.context.lineTo(610, 441);
        this.context.lineTo(610, 331);

        this.context.lineTo(610, 439);
        this.context.lineTo(610, 195);
        this.context.lineTo(402, 195);

        this.context.lineTo(402, 200);

        this.drawDestinationRoomMarkerD(btnId);

      break;

      case "d216":        
        this.context.moveTo(385,441);
        this.context.lineTo(445,441);

        this.context.lineTo(610, 441);
        this.context.lineTo(610, 331);

        this.context.lineTo(610, 439);
        this.context.lineTo(610, 195);
        this.context.lineTo(445, 195);

        this.context.lineTo(445, 200);

        this.drawDestinationRoomMarkerD(btnId);

      break;      

      case "d218":
        this.context.moveTo(385,441);
        this.context.lineTo(445,441);

        this.context.lineTo(610, 441);
        this.context.lineTo(610, 331);
        this.context.moveTo(610, 420);
        this.context.lineTo(610, 195);
        this.context.lineTo(493, 195);
        this.context.lineTo(493, 205);

        this.context.lineTo(492, 195);
        this.context.lineTo(610, 195);
        this.context.lineTo(610, 331);

        this.context.lineTo(596, 331);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d222":
        this.context.moveTo(385,441);
        this.context.lineTo(416,435);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d224":
        this.context.moveTo(385,441);

        this.context.lineTo(380, 441);
        this.context.lineTo(380, 435);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d226":
        this.context.moveTo(369,441);

        this.context.lineTo(337, 437);
        this.context.lineTo(337, 522);
        
        this.drawDestinationRoomMarkerD(btnId);
      break;      

      case "d227":
        this.context.moveTo(369,441);

        this.context.lineTo(351, 441);
        this.context.lineTo(351, 563);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d229":
        this.context.moveTo(369,441);

        this.context.lineTo(351, 441);
        this.context.lineTo(351, 553);

        this.context.lineTo(351, 441);
        this.context.lineTo(351, 553);
        
        this.context.lineTo(220, 553);
        this.context.lineTo(220, 563);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d230":
        this.context.moveTo(369,441);

        this.context.lineTo(351, 441);
        this.context.lineTo(351, 543);

        this.context.lineTo(245, 543);
        this.context.lineTo(119, 543);

        this.context.lineTo(119, 522);
        this.context.lineTo(120, 543);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d231":
        this.context.moveTo(369,441);

        this.context.lineTo(351, 441);
        this.context.lineTo(351, 553);

        this.context.lineTo(200, 553);
        this.context.lineTo(200, 563);
        
        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d233":
        this.context.moveTo(369,441);

        this.context.lineTo(351, 441);
        this.context.lineTo(351, 553);

        this.context.lineTo(165, 553); 
        this.context.lineTo(165, 563);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d235a":
        this.context.moveTo(369,441);

        this.context.lineTo(351, 441);    
        this.context.lineTo(351, 553);

        this.context.lineTo(126, 553); 
        this.context.lineTo(126, 563);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d237":
        this.context.moveTo(369,441);

        this.context.lineTo(351, 441);
        this.context.lineTo(351, 553);

        this.context.lineTo(88, 553); 
        this.context.lineTo(88, 563);
        
        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d241":
        this.context.moveTo(385,441);
        this.context.lineTo(445,441);

        this.context.lineTo(610, 441);

        this.context.lineTo(610, 439);
        this.context.lineTo(610, 343);

        this.context.lineTo(610, 418);
        this.context.lineTo(641, 418);
        this.context.moveTo(610, 420);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d245":
        this.context.moveTo(385,441);
        this.context.lineTo(445,441);

        this.context.lineTo(610, 441);

        this.context.lineTo(610, 439);
        this.context.lineTo(610, 343);

        this.context.lineTo(610, 418);

        this.context.lineTo(610, 276);
        this.context.lineTo(677, 276);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      case "d284":
        this.context.moveTo(369,441);

        this.context.lineTo(351, 441);
        this.context.lineTo(351, 522);

        this.context.lineTo(351, 546);
        this.context.lineTo(364, 546);

        this.drawDestinationRoomMarkerD(btnId);
      break;

      default:
        break;
    }
    this.context.stroke();
  }

  public drawDestinationRoomMarkerD(btnId: String) {
    switch (btnId) {
      
      case "emg":
        this.context.drawImage(this.destinationMarker, 621, 425);
      break;

      case "wrs":
        this.context.drawImage(this.destinationMarker, 140, 322);
        this.context.drawImage(this.destinationMarker, 154, 257);
      break;

      case "cb3f":
        this.context.drawImage(this.destinationMarker, 392, 117);
      break;

      case "eb2f":
        this.context.drawImage(this.destinationMarker, 733, 190);
      break;

      case "d201":
        this.context.drawImage(this.destinationMarker, 80, 395);
      break;

      case "d202":
        this.context.drawImage(this.destinationMarker, 120, 435);
      break;

      case "d205":
        this.context.drawImage(this.destinationMarker, 80, 374);
      break;

      case "d206":
        this.context.drawImage(this.destinationMarker, 170, 374);
        this.context.drawImage(this.destinationMarker, 182, 257);
      break;

      case "d212":
        this.context.drawImage(this.destinationMarker, 282, 234);
      break;

      case "d209a":
        this.context.drawImage(this.destinationMarker, 72, 214);
      break;

      case "d209":
        this.context.drawImage(this.destinationMarker, 67, 250);
      break;

      case "d210":
        this.context.drawImage(this.destinationMarker, 82, 195);
      break;

      case "d211":
          this.context.drawImage(this.destinationMarker, 105, 198);
          this.context.drawImage(this.destinationMarker, 227, 198);
      break;

      case "d230":
        this.context.drawImage(this.destinationMarker, 120, 497);
        this.context.drawImage(this.destinationMarker, 228, 497);
        break;

        
      case "d235a":
        this.context.drawImage(this.destinationMarker, 118, 570);
        break;

      case "d237":
        this.context.drawImage(this.destinationMarker, 65, 570);
        break;

                
      case "d233":
        this.context.drawImage(this.destinationMarker, 145, 570);
        break;

      case "d231":
        this.context.drawImage(this.destinationMarker, 183, 570);
        break;

      case "d229":
        this.context.drawImage(this.destinationMarker, 218, 550);
        break;

      case "d227":
        this.context.drawImage(this.destinationMarker, 325, 560);
        break;

      case "d222":
        this.context.drawImage(this.destinationMarker, 403, 398);
        break;

      case "d224":
        this.context.drawImage(this.destinationMarker, 365, 398);
        break;

      // case "elevator":
      //   this.context.drawImage(this.destinationMarker, 365, 465);
      // break;

      case "d226":
        this.context.drawImage(this.destinationMarker, 300, 498);
        this.context.drawImage(this.destinationMarker, 300, 406);
        break;

      case "d284":
        this.context.drawImage(this.destinationMarker, 363, 520);
        break;
      default:

      case "d214":
        this.context.drawImage(this.destinationMarker, 388, 208);
        break;

      case "d216":
        this.context.drawImage(this.destinationMarker, 446, 192);
        break;

      case "d218":
        this.context.drawImage(this.destinationMarker, 484, 204);
        this.context.drawImage(this.destinationMarker, 563, 310);
        break;

      case "d226":
        this.context.drawImage(this.destinationMarker, 325, 560);
        break;
      
      case "d241":
        this.context.drawImage(this.destinationMarker, 610, 310);
        this.context.drawImage(this.destinationMarker, 638, 382);
        break;

      case "d245":
        this.context.drawImage(this.destinationMarker, 676, 253);
        break;  
    }
  }
  // * D BUILDING END *


  // * C BUILDING START *

  public drawCbuildingFloor2_OriginMarker(stairCaseId: string) {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    switch (stairCaseId) {
      case "elevatorA":
        this.context.drawImage(this.originMarker, 428, 495);
        break;
      case "elevatorB":
        this.context.drawImage(this.originMarker, 205, 610);
        break;
      case "stairCaseA":
        this.context.drawImage(this.originMarker, 547, 0);
        break;
      case "stairCaseB":
        this.context.drawImage(this.originMarker, 396, 83);
        break;
      case "stairCaseC":
        this.context.drawImage(this.originMarker, 130, 300);
        break;
      case "stairCaseD":
        this.context.drawImage(this.originMarker, 197, 537);
        break;
      case "stairCaseE":
        this.context.drawImage(this.originMarker, 203, 570);
        break;
      case "stairCaseF":
        this.context.drawImage(this.originMarker, 390, 470);
        break;
      case "stairCaseG":
        this.context.drawImage(this.originMarker, 651, 290);
        break;
      default:
        break;
    }
  }

  public drawPathFromElevatorA_C(btnId: string) {
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "lime";
    switch (btnId) {
      case "c201":
        this.context.moveTo(435, 524);
        this.context.lineTo(372, 524);
        this.context.lineTo(192, 524);
        this.context.lineTo(192, 580);
        this.context.lineTo(178, 580);
        this.context.moveTo(192, 524);
        this.context.lineTo(192, 422);
        this.context.lineTo(118, 422);
        this.context.lineTo(118, 434);
        this.context.moveTo(118, 422);
        this.context.lineTo(118, 342);
        this.context.lineTo(110, 342);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c210":
        this.context.moveTo(435, 524);
        this.context.lineTo(307, 524);
        this.context.lineTo(307, 535);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c211":
        this.context.moveTo(435, 524);
        this.context.lineTo(372, 524);
        this.context.lineTo(372, 442);
        this.context.lineTo(435, 442);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c212":
        this.context.moveTo(435, 524);
        this.context.lineTo(348, 524);
        this.context.lineTo(348, 535);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c213":
        this.context.moveTo(435, 524);
        this.context.lineTo(372, 524);
        this.context.lineTo(372, 442);
        this.context.lineTo(425, 442);
        this.context.lineTo(425, 435);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c214":
        this.context.moveTo(435, 524);
        this.context.lineTo(372, 524);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(444, 266);
        this.context.lineTo(444, 277);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c221":
        this.context.moveTo(435, 524);
        this.context.lineTo(372, 524);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 358);
        this.context.lineTo(361, 358);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c227":
        this.context.moveTo(435, 524);
        this.context.lineTo(372, 524);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(392, 266);
        this.context.lineTo(392, 282);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c230":
        this.context.moveTo(435, 524);
        this.context.lineTo(372, 524);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 242);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c234":
        this.context.moveTo(435, 524);
        this.context.lineTo(372, 524);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(474, 203);
        this.context.lineTo(474, 193);
        this.context.moveTo(412, 203);
        this.context.lineTo(412, 133);
        this.context.lineTo(423, 133);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c235":
        this.context.moveTo(435, 524);
        this.context.lineTo(372, 524);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(497, 266);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c236":
        this.context.moveTo(435, 524);
        this.context.lineTo(372, 524);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(546, 203);
        this.context.lineTo(546, 193);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c241":
        this.context.moveTo(435, 524);
        this.context.lineTo(372, 524);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(588, 203);
        this.context.lineTo(588, 106);
        this.context.lineTo(653, 106);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c243":
        this.context.moveTo(435, 524);
        this.context.lineTo(372, 524);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(588, 203);
        this.context.lineTo(588, 55);
        this.context.lineTo(596, 55);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c243A":
        this.context.moveTo(435, 524);
        this.context.lineTo(372, 524);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(588, 203);
        this.context.lineTo(588, 72);
        this.context.lineTo(596, 72);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c243B":
        this.context.moveTo(435, 524);
        this.context.lineTo(372, 524);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(588, 203);
        this.context.lineTo(588, 89);
        this.context.lineTo(596, 89);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c246":
        this.context.moveTo(435, 524);
        this.context.lineTo(372, 524);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(588, 203);
        this.context.lineTo(588, 24);
        this.context.lineTo(605, 24);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c247":
        this.context.moveTo(435, 524);
        this.context.lineTo(372, 524);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 200);
        this.context.lineTo(639, 200);
        this.context.lineTo(639, 183);
        this.context.lineTo(653, 183);
        this.context.moveTo(639, 200);
        this.context.lineTo(639, 116);
        this.context.lineTo(649, 116);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c250":
        this.context.moveTo(435, 524);
        this.context.lineTo(372, 524);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 200);
        this.context.lineTo(643, 200);
        this.context.lineTo(643, 207);
        this.context.lineTo(653, 207);
        this.context.moveTo(643, 207);
        this.context.lineTo(643, 267);
        this.context.lineTo(653, 267);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c255":
        this.context.moveTo(435, 524);
        this.context.lineTo(372, 524);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 200);
        this.context.lineTo(643, 200);
        this.context.lineTo(643, 283);
        this.context.lineTo(681, 283);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c256":
        this.context.moveTo(435, 524);
        this.context.lineTo(372, 524);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 200);
        this.context.lineTo(643, 200);
        this.context.lineTo(643, 293);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "grill+co":
        this.context.moveTo(435, 524);
        this.context.lineTo(372, 524);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 413);
        this.context.lineTo(245, 413);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "pizzapizza":
        this.context.moveTo(435, 524);
        this.context.lineTo(372, 524);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 392);
        this.context.lineTo(325, 392);
        this.context.lineTo(325, 375);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "timhortons":
        this.context.moveTo(435, 524);
        this.context.lineTo(372, 524);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 392);
        this.context.lineTo(386, 392);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "wrs":
        this.context.moveTo(435, 524);
        this.context.lineTo(372, 524);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 340);
        this.context.lineTo(325, 340);
        this.context.lineTo(325, 329);
        this.context.moveTo(325, 340);
        this.context.lineTo(268, 340);
        this.context.lineTo(268, 293);
        this.context.lineTo(273, 293);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      default:
        break;
    }
    this.context.stroke();
  }

  public drawPathFromElevatorB_C(btnId: string) {
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "lime";
    switch (btnId) {
      case "c201":
        this.context.moveTo(212, 640);
        this.context.lineTo(192, 640);
        this.context.lineTo(192, 580);
        this.context.lineTo(179, 580);
        this.context.moveTo(192, 640);
        this.context.lineTo(192, 422);
        this.context.lineTo(118, 422);
        this.context.lineTo(118, 434);
        this.context.moveTo(118, 422);
        this.context.lineTo(118, 342);
        this.context.lineTo(110, 342);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c210":
        this.context.moveTo(212, 640);
        this.context.lineTo(192, 640);
        this.context.lineTo(192, 522);
        this.context.lineTo(307, 522);
        this.context.lineTo(307, 535);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c211":
        this.context.moveTo(212, 640);
        this.context.lineTo(192, 640);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(435, 442);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c212":
        this.context.moveTo(212, 640);
        this.context.lineTo(192, 640);
        this.context.lineTo(192, 522);
        this.context.lineTo(348, 522);
        this.context.lineTo(348, 535);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c213":
        this.context.moveTo(212, 640);
        this.context.lineTo(192, 640);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(425, 442);
        this.context.lineTo(425, 435);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c214":
        this.context.moveTo(212, 640);
        this.context.lineTo(192, 640);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(444, 266);
        this.context.lineTo(444, 277);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c221":
        this.context.moveTo(212, 640);
        this.context.lineTo(192, 640);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 358);
        this.context.lineTo(361, 358);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c227":
        this.context.moveTo(212, 640);
        this.context.lineTo(192, 640);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(392, 266);
        this.context.lineTo(392, 282);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c230":
        this.context.moveTo(212, 640);
        this.context.lineTo(192, 640);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 242);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c234":
        this.context.moveTo(212, 640);
        this.context.lineTo(192, 640);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(474, 203);
        this.context.lineTo(474, 193);
        this.context.moveTo(412, 203);
        this.context.lineTo(412, 133);
        this.context.lineTo(423, 133);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c235":
        this.context.moveTo(212, 640);
        this.context.lineTo(192, 640);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(497, 266);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c236":
        this.context.moveTo(212, 640);
        this.context.lineTo(192, 640);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(546, 203);
        this.context.lineTo(546, 193);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c241":
        this.context.moveTo(212, 640);
        this.context.lineTo(192, 640);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(588, 203);
        this.context.lineTo(588, 106);
        this.context.lineTo(653, 106);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c243":
        this.context.moveTo(212, 640);
        this.context.lineTo(192, 640);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(588, 203);
        this.context.lineTo(588, 55);
        this.context.lineTo(596, 55);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c243A":
        this.context.moveTo(212, 640);
        this.context.lineTo(192, 640);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(588, 203);
        this.context.lineTo(588, 72);
        this.context.lineTo(596, 72);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c243B":
        this.context.moveTo(212, 640);
        this.context.lineTo(192, 640);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(588, 203);
        this.context.lineTo(588, 89);
        this.context.lineTo(596, 89);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c246":
        this.context.moveTo(212, 640);
        this.context.lineTo(192, 640);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(588, 203);
        this.context.lineTo(588, 24);
        this.context.lineTo(605, 24);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c247":
        this.context.moveTo(212, 640);
        this.context.lineTo(192, 640);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 200);
        this.context.lineTo(639, 200);
        this.context.lineTo(639, 183);
        this.context.lineTo(653, 183);
        this.context.moveTo(639, 200);
        this.context.lineTo(639, 116);
        this.context.lineTo(649, 116);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c250":
        this.context.moveTo(212, 640);
        this.context.lineTo(192, 640);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 200);
        this.context.lineTo(643, 200);
        this.context.lineTo(643, 207);
        this.context.lineTo(653, 207);
        this.context.moveTo(643, 207);
        this.context.lineTo(643, 267);
        this.context.lineTo(653, 267);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c255":
        this.context.moveTo(212, 640);
        this.context.lineTo(192, 640);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 200);
        this.context.lineTo(643, 200);
        this.context.lineTo(643, 283);
        this.context.lineTo(681, 283);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c256":
        this.context.moveTo(212, 640);
        this.context.lineTo(192, 640);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 200);
        this.context.lineTo(643, 200);
        this.context.lineTo(643, 293);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "grill+co":
        this.context.moveTo(212, 640);
        this.context.lineTo(192, 640);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 413);
        this.context.lineTo(245, 413);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "pizzapizza":
        this.context.moveTo(212, 640);
        this.context.lineTo(192, 640);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 392);
        this.context.lineTo(325, 392);
        this.context.lineTo(325, 375);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "timhortons":
        this.context.moveTo(212, 640);
        this.context.lineTo(192, 640);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 392);
        this.context.lineTo(386, 392);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "wrs":
        this.context.moveTo(212, 640);
        this.context.lineTo(192, 640);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 340);
        this.context.lineTo(325, 340);
        this.context.lineTo(325, 329);
        this.context.moveTo(325, 340);
        this.context.lineTo(268, 340);
        this.context.lineTo(268, 293);
        this.context.lineTo(273, 293);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      default:
        break;
    }
    this.context.stroke();
  }

  public drawPathFromStairCaseA_C(btnId: string) {
      this.context.beginPath();
      this.context.lineWidth = 5;
      this.context.strokeStyle = "lime";
  
      switch (btnId) {

        case "c201":
          this.context.moveTo(575,27);
          this.context.lineTo(586,27);    

          this.context.lineTo(586,202);   
          this.context.lineTo(482,202);   

          this.context.lineTo(390,266);   
          this.context.lineTo(354,266);

          this.context.lineTo(354,471);
          this.context.lineTo(189,471);

          // itersection
          this.context.lineTo(189,471);
          this.context.lineTo(189,584);

          this.context.lineTo(189,424);

          this.context.lineTo(118,424);
          this.context.lineTo(118,430);

          this.context.lineTo(118,424);

          this.context.lineTo(118,343);
          this.context.lineTo(113,343);

          this.context.moveTo(191,584);
          this.context.lineTo(177,584);

          this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;

        case "c210":
          this.context.moveTo(575,27);
          this.context.lineTo(586,27);    

          this.context.lineTo(586,202);   
          this.context.lineTo(482,202);   

          this.context.lineTo(390,266);   
          this.context.lineTo(354,266);

          this.context.lineTo(354,471);
          this.context.lineTo(308,537);

          this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;

        case "c212":
          this.context.moveTo(575,27);
          this.context.lineTo(586,27);    

          this.context.lineTo(586,202);   
          this.context.lineTo(482,202);   

          this.context.lineTo(390,266);   
          this.context.lineTo(354,266);

          this.context.lineTo(354,536);

          this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;

        // tim hortons office
        case "c213":
          this.context.moveTo(575,27);
          this.context.lineTo(586,27);    

          this.context.lineTo(586,202);   
          this.context.lineTo(482,202);   

          this.context.lineTo(390,266);   
          this.context.lineTo(354,266);

          this.context.lineTo(354,446);
          this.context.lineTo(424,446);
          this.context.lineTo(424,434);

          this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;

        case "c211":
          this.context.moveTo(575,27);
          this.context.lineTo(586,27);    

          this.context.lineTo(586,202);   
          this.context.lineTo(482,202);   

          this.context.lineTo(390,266);   
          this.context.lineTo(354,266);

          this.context.lineTo(354,446);
          this.context.lineTo(436,446);
        
          this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;

        case "c214":
          this.context.moveTo(575,27);
          this.context.lineTo(586,27);    

          this.context.lineTo(586,202);   
          this.context.lineTo(482,202);   

          this.context.lineTo(419,241);
          this.context.lineTo(440,272);

          this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;

        case "c221":
          this.context.moveTo(575,27);
          this.context.lineTo(586,27);    

          this.context.lineTo(586,202);   
          this.context.lineTo(482,202);   

          this.context.lineTo(390,266);   
          this.context.lineTo(354,266);

          this.context.lineTo(354,360); 
          this.context.lineTo(362,360); 
        
          this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;

        case "c227":
          this.context.moveTo(575,27);
          this.context.lineTo(586,27);    

          this.context.lineTo(586,202);   
          this.context.lineTo(482,202);   

          this.context.lineTo(404,257);
          this.context.lineTo(391,257);      

          this.context.lineTo(391,277);      

          this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;

        case "c230":
          this.context.moveTo(575,27);
          this.context.lineTo(586,27);    

          this.context.lineTo(586,202);   
          this.context.lineTo(482,202);   

          this.context.lineTo(404,257);
          this.context.lineTo(357,257);      

          this.context.lineTo(357,248);      

          this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;

        case "c235":
          this.context.moveTo(575,27);
          this.context.lineTo(586,27);    

          this.context.lineTo(586,202);   
          this.context.lineTo(482,202);   

          this.context.lineTo(482,266);   
          this.context.lineTo(491,266);   

          this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;

        case "c234":
          this.context.moveTo(575,27);
          this.context.lineTo(586,27);    

          this.context.lineTo(586,202);   
          this.context.lineTo(474,202);   

          this.context.lineTo(474,194); 

          this.context.lineTo(474,202);   
          this.context.lineTo(413,202);   

          this.context.lineTo(413,134);   
          this.context.lineTo(423,134);   

          this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;

        case "c236":
          this.context.moveTo(575,27);
          this.context.lineTo(586,27);    

          this.context.lineTo(586,202);   
          this.context.lineTo(546,202);

          this.context.lineTo(546,194);   

          this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;

        case "c241":
          this.context.moveTo(575,27);
          this.context.lineTo(586,27);    

          this.context.lineTo(586,105); 
          this.context.lineTo(647,105);    
   
          this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;

        case "c243":
          this.context.moveTo(575,27);
          this.context.lineTo(586,27);    

          this.context.lineTo(586,57);    
          this.context.lineTo(596,57);    

          this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;

        case "c243A":
          this.context.moveTo(575,27);
          this.context.lineTo(586,27);    

          this.context.lineTo(586,75);    
          this.context.lineTo(596,75);   

          this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;

        case "c243B":
          this.context.moveTo(575,27);
          this.context.lineTo(586,27);    

          this.context.lineTo(586,87);    
          this.context.lineTo(596,87);     

          this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;

        case "c246":
          this.context.moveTo(575,27);

          this.context.lineTo(601,27);    

          this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;

        case "c247":
          this.context.moveTo(575,27);
          this.context.lineTo(586,27);    

          this.context.lineTo(586,105);    

          this.context.lineTo(586,119); 
          this.context.lineTo(647,119);  
          
          this.context.lineTo(637,119);    
          this.context.lineTo(637,185);    
          this.context.lineTo(645,185);    
   
          this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;

        case "c250":
          this.context.moveTo(575,27);
          this.context.lineTo(586,27);    

          this.context.lineTo(586,203); 
          this.context.lineTo(645,203);  
          
          this.context.lineTo(641,203);    
          this.context.lineTo(641,269);    

          this.context.lineTo(652,269);    

          this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;

        case "c255":
          this.context.moveTo(575,27);
          this.context.lineTo(586,27);    

          this.context.lineTo(586,203); 
          this.context.lineTo(641,203);  
          
          this.context.lineTo(641,203);    
          this.context.lineTo(643,281);    
          this.context.lineTo(683,281);    

          this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;

        case "c256":
          this.context.moveTo(575,27);
          this.context.lineTo(586,27);    

          this.context.lineTo(586,203); 
          this.context.lineTo(641,203);  
          
          this.context.lineTo(641,203);    
          this.context.lineTo(641,288);              

          this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;

        case "grill+co":
          this.context.moveTo(575,27);
          this.context.lineTo(586,27);    

          this.context.lineTo(586,202);   
          this.context.lineTo(482,202);   

          this.context.lineTo(390,266);   
          this.context.lineTo(354,266);

          this.context.lineTo(354,394); 

          this.context.lineTo(246,394); 

          this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;

        case "pizzapizza":
          this.context.moveTo(575,27);
          this.context.lineTo(586,27);    

          this.context.lineTo(586,202);   
          this.context.lineTo(482,202);   

          this.context.lineTo(390,266);   
          this.context.lineTo(354,266);

          this.context.lineTo(354,394); 

          this.context.lineTo(310,394); 
          this.context.lineTo(310,375); 

          this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;

        case "timhortons":
          this.context.moveTo(575,27);
          this.context.lineTo(586,27);    

          this.context.lineTo(586,202);   
          this.context.lineTo(482,202);   

          this.context.lineTo(390,266);   
          this.context.lineTo(354,266);

          this.context.lineTo(354,394); 

          this.context.lineTo(388,394);  


          this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;

        case "wrs":
          this.context.moveTo(575,27);
          this.context.lineTo(586,27);    

          this.context.lineTo(586,202);   
          this.context.lineTo(482,202);   

          this.context.lineTo(390,266);   
          this.context.lineTo(354,266);

          this.context.lineTo(354,342); 

          this.context.lineTo(326,342); 
          this.context.lineTo(326,329);
          
          this.context.lineTo(326,342); 
          this.context.lineTo(269,342); 
          this.context.lineTo(269,288); 
          this.context.lineTo(275,288); 


          this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
  
        default:
          break;
      }
      this.context.stroke();

  }

  public drawPathFromStairCaseB_C(btnId: string) {
    
  }

  public drawPathFromStairCaseC_C(btnId: string) {
    
  }

  public drawPathFromStairCaseD_C(btnId: string) {
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "lime";
    switch (btnId) {
      case "c201":
        this.context.moveTo(201, 563);
        this.context.lineTo(192, 563);
        this.context.lineTo(192, 582);
        this.context.lineTo(179, 582);
        this.context.moveTo(192, 563);
        this.context.lineTo(192, 422);
        this.context.lineTo(118, 422);
        this.context.lineTo(118, 434);
        this.context.moveTo(118, 422);
        this.context.lineTo(118, 342);
        this.context.lineTo(110, 342);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c210":
        this.context.moveTo(201, 563);
        this.context.lineTo(192, 563);
        this.context.lineTo(192, 522);
        this.context.lineTo(307, 522);
        this.context.lineTo(307, 535);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c211":
        this.context.moveTo(201, 563);
        this.context.lineTo(192, 563);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(435, 442);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c212":
        this.context.moveTo(201, 563);
        this.context.lineTo(192, 563);
        this.context.lineTo(192, 522);
        this.context.lineTo(348, 522);
        this.context.lineTo(348, 535);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c213":
        this.context.moveTo(201, 563);
        this.context.lineTo(192, 563);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(425, 442);
        this.context.lineTo(425, 435);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c214":
        this.context.moveTo(201, 563);
        this.context.lineTo(192, 563);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(444, 266);
        this.context.lineTo(444, 277);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c221":
        this.context.moveTo(201, 563);
        this.context.lineTo(192, 563);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 358);
        this.context.lineTo(361, 358);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c227":
        this.context.moveTo(201, 563);
        this.context.lineTo(192, 563);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(392, 266);
        this.context.lineTo(392, 282);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c230":
        this.context.moveTo(201, 563);
        this.context.lineTo(192, 563);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 242);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c234":
        this.context.moveTo(201, 563);
        this.context.lineTo(192, 563);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(474, 203);
        this.context.lineTo(474, 193);
        this.context.moveTo(412, 203);
        this.context.lineTo(412, 133);
        this.context.lineTo(423, 133);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c235":
        this.context.moveTo(201, 563);
        this.context.lineTo(192, 563);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(497, 266);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c236":
        this.context.moveTo(201, 563);
        this.context.lineTo(192, 563);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(546, 203);
        this.context.lineTo(546, 193);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c241":
        this.context.moveTo(201, 563);
        this.context.lineTo(192, 563);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(588, 203);
        this.context.lineTo(588, 106);
        this.context.lineTo(653, 106);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c243":
        this.context.moveTo(201, 563);
        this.context.lineTo(192, 563);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(588, 203);
        this.context.lineTo(588, 55);
        this.context.lineTo(596, 55);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c243A":
        this.context.moveTo(201, 563);
        this.context.lineTo(192, 563);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(588, 203);
        this.context.lineTo(588, 72);
        this.context.lineTo(596, 72);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c243B":
        this.context.moveTo(201, 563);
        this.context.lineTo(192, 563);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(588, 203);
        this.context.lineTo(588, 89);
        this.context.lineTo(596, 89);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c246":
        this.context.moveTo(201, 563);
        this.context.lineTo(192, 563);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(588, 203);
        this.context.lineTo(588, 24);
        this.context.lineTo(605, 24);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c247":
        this.context.moveTo(201, 563);
        this.context.lineTo(192, 563);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 200);
        this.context.lineTo(639, 200);
        this.context.lineTo(639, 183);
        this.context.lineTo(653, 183);
        this.context.moveTo(639, 200);
        this.context.lineTo(639, 116);
        this.context.lineTo(649, 116);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c250":
        this.context.moveTo(201, 563);
        this.context.lineTo(192, 563);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 200);
        this.context.lineTo(643, 200);
        this.context.lineTo(643, 207);
        this.context.lineTo(653, 207);
        this.context.moveTo(643, 207);
        this.context.lineTo(643, 267);
        this.context.lineTo(653, 267);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c255":
        this.context.moveTo(201, 563);
        this.context.lineTo(192, 563);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 200);
        this.context.lineTo(643, 200);
        this.context.lineTo(643, 283);
        this.context.lineTo(681, 283);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c256":
        this.context.moveTo(201, 563);
        this.context.lineTo(192, 563);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 200);
        this.context.lineTo(643, 200);
        this.context.lineTo(643, 293);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "grill+co":
        this.context.moveTo(201, 563);
        this.context.lineTo(192, 563);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 413);
        this.context.lineTo(245, 413);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "pizzapizza":
        this.context.moveTo(201, 563);
        this.context.lineTo(192, 563);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 392);
        this.context.lineTo(325, 392);
        this.context.lineTo(325, 375);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "timhortons":
        this.context.moveTo(201, 563);
        this.context.lineTo(192, 563);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 392);
        this.context.lineTo(386, 392);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "wrs":
        this.context.moveTo(201, 563);
        this.context.lineTo(192, 563);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 340);
        this.context.lineTo(325, 340);
        this.context.lineTo(325, 329);
        this.context.moveTo(325, 340);
        this.context.lineTo(268, 340);
        this.context.lineTo(268, 293);
        this.context.lineTo(273, 293);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      default:
        break;
    }
    this.context.stroke();
  }

  public drawPathFromStairCaseE_C(btnId: string) {
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "lime";
    switch (btnId) {
      case "c201":
        this.context.moveTo(206, 580);
        this.context.lineTo(192, 580);
        this.context.lineTo(192, 580);
        this.context.lineTo(179, 580);
        this.context.moveTo(192, 580);
        this.context.lineTo(192, 422);
        this.context.lineTo(118, 422);
        this.context.lineTo(118, 434);
        this.context.moveTo(118, 422);
        this.context.lineTo(118, 342);
        this.context.lineTo(110, 342);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c210":
        this.context.moveTo(206, 580);
        this.context.lineTo(192, 580);
        this.context.lineTo(192, 522);
        this.context.lineTo(307, 522);
        this.context.lineTo(307, 535);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c211":
        this.context.moveTo(206, 580);
        this.context.lineTo(192, 580);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(435, 442);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c212":
        this.context.moveTo(206, 580);
        this.context.lineTo(192, 580);
        this.context.lineTo(192, 522);
        this.context.lineTo(348, 522);
        this.context.lineTo(348, 535);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c213":
        this.context.moveTo(206, 580);
        this.context.lineTo(192, 580);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(425, 442);
        this.context.lineTo(425, 435);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c214":
        this.context.moveTo(206, 580);
        this.context.lineTo(192, 580);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(444, 266);
        this.context.lineTo(444, 277);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c221":
        this.context.moveTo(206, 580);
        this.context.lineTo(192, 580);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 358);
        this.context.lineTo(361, 358);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c227":
        this.context.moveTo(206, 580);
        this.context.lineTo(192, 580);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(392, 266);
        this.context.lineTo(392, 282);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c230":
        this.context.moveTo(206, 580);
        this.context.lineTo(192, 580);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 242);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c234":
        this.context.moveTo(206, 580);
        this.context.lineTo(192, 580);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(474, 203);
        this.context.lineTo(474, 193);
        this.context.moveTo(412, 203);
        this.context.lineTo(412, 133);
        this.context.lineTo(423, 133);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c235":
        this.context.moveTo(206, 580);
        this.context.lineTo(192, 580);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(497, 266);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c236":
        this.context.moveTo(206, 580);
        this.context.lineTo(192, 580);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(546, 203);
        this.context.lineTo(546, 193);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c241":
        this.context.moveTo(206, 580);
        this.context.lineTo(192, 580);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(588, 203);
        this.context.lineTo(588, 106);
        this.context.lineTo(653, 106);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c243":
        this.context.moveTo(206, 580);
        this.context.lineTo(192, 580);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(588, 203);
        this.context.lineTo(588, 55);
        this.context.lineTo(596, 55);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c243A":
        this.context.moveTo(206, 580);
        this.context.lineTo(192, 580);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(588, 203);
        this.context.lineTo(588, 72);
        this.context.lineTo(596, 72);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c243B":
        this.context.moveTo(206, 580);
        this.context.lineTo(192, 580);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(588, 203);
        this.context.lineTo(588, 89);
        this.context.lineTo(596, 89);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c246":
        this.context.moveTo(206, 580);
        this.context.lineTo(192, 580);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(588, 203);
        this.context.lineTo(588, 24);
        this.context.lineTo(605, 24);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c247":
        this.context.moveTo(206, 580);
        this.context.lineTo(192, 580);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 200);
        this.context.lineTo(639, 200);
        this.context.lineTo(639, 183);
        this.context.lineTo(653, 183);
        this.context.moveTo(639, 200);
        this.context.lineTo(639, 116);
        this.context.lineTo(649, 116);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c250":
        this.context.moveTo(206, 580);
        this.context.lineTo(192, 580);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 200);
        this.context.lineTo(643, 200);
        this.context.lineTo(643, 207);
        this.context.lineTo(653, 207);
        this.context.moveTo(643, 207);
        this.context.lineTo(643, 267);
        this.context.lineTo(653, 267);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c255":
        this.context.moveTo(206, 580);
        this.context.lineTo(192, 580);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 200);
        this.context.lineTo(643, 200);
        this.context.lineTo(643, 283);
        this.context.lineTo(681, 283);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c256":
        this.context.moveTo(206, 580);
        this.context.lineTo(192, 580);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 200);
        this.context.lineTo(643, 200);
        this.context.lineTo(643, 293);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "grill+co":
        this.context.moveTo(206, 580);
        this.context.lineTo(192, 580);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 413);
        this.context.lineTo(245, 413);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "pizzapizza":
        this.context.moveTo(206, 580);
        this.context.lineTo(192, 580);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 392);
        this.context.lineTo(325, 392);
        this.context.lineTo(325, 375);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "timhortons":
        this.context.moveTo(206, 580);
        this.context.lineTo(192, 580);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 392);
        this.context.lineTo(386, 392);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "wrs":
        this.context.moveTo(206, 580);
        this.context.lineTo(192, 580);
        this.context.lineTo(192, 522);
        this.context.lineTo(370, 522);
        this.context.lineTo(370, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 340);
        this.context.lineTo(325, 340);
        this.context.lineTo(325, 329);
        this.context.moveTo(325, 340);
        this.context.lineTo(268, 340);
        this.context.lineTo(268, 293);
        this.context.lineTo(273, 293);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      default:
        break;
    }
    this.context.stroke();
  }

  public drawPathFromStairCaseF_C(btnId: string) {
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "lime";
    switch (btnId) {
      case "c201":
        this.context.moveTo(382, 490);
        this.context.lineTo(372, 490);
        this.context.lineTo(372, 520);
        this.context.lineTo(192, 520);
        this.context.lineTo(192, 580);
        this.context.lineTo(178, 580);
        this.context.moveTo(192, 520);
        this.context.lineTo(192, 422);
        this.context.lineTo(118, 422);
        this.context.lineTo(118, 434);
        this.context.moveTo(118, 422);
        this.context.lineTo(118, 342);
        this.context.lineTo(110, 342);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c210":
        this.context.moveTo(382, 490);
        this.context.lineTo(372, 490);
        this.context.lineTo(372, 522);
        this.context.lineTo(307, 522);
        this.context.lineTo(307, 535);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c211":
        this.context.moveTo(382, 490);
        this.context.lineTo(372, 490);
        this.context.lineTo(372, 442);
        this.context.lineTo(435, 442);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c212":
        this.context.moveTo(382, 490);
        this.context.lineTo(372, 490);
        this.context.lineTo(372, 522);
        this.context.lineTo(348, 522);
        this.context.lineTo(348, 535);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c213":
        this.context.moveTo(382, 490);
        this.context.lineTo(372, 490);
        this.context.lineTo(372, 442);
        this.context.lineTo(425, 442);
        this.context.lineTo(425, 435);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c214":
        this.context.moveTo(382, 490);
        this.context.lineTo(372, 490);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(444, 266);
        this.context.lineTo(444, 277);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c221":
        this.context.moveTo(382, 490);
        this.context.lineTo(372, 490);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 358);
        this.context.lineTo(361, 358);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c227":
        this.context.moveTo(382, 490);
        this.context.lineTo(372, 490);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(392, 266);
        this.context.lineTo(392, 282);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c230":
        this.context.moveTo(382, 490);
        this.context.lineTo(372, 490);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 242);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c234":
        this.context.moveTo(382, 490);
        this.context.lineTo(372, 490);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(474, 203);
        this.context.lineTo(474, 193);
        this.context.moveTo(412, 203);
        this.context.lineTo(412, 133);
        this.context.lineTo(423, 133);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c235":
        this.context.moveTo(382, 490);
        this.context.lineTo(372, 490);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(497, 266);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c236":
        this.context.moveTo(382, 490);
        this.context.lineTo(372, 490);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(546, 203);
        this.context.lineTo(546, 193);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c241":
        this.context.moveTo(382, 490);
        this.context.lineTo(372, 490);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(588, 203);
        this.context.lineTo(588, 106);
        this.context.lineTo(653, 106);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c243":
        this.context.moveTo(382, 490);
        this.context.lineTo(372, 490);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(588, 203);
        this.context.lineTo(588, 55);
        this.context.lineTo(596, 55);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c243A":
        this.context.moveTo(382, 490);
        this.context.lineTo(372, 490);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(588, 203);
        this.context.lineTo(588, 72);
        this.context.lineTo(596, 72);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c243B":
        this.context.moveTo(382, 490);
        this.context.lineTo(372, 490);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(588, 203);
        this.context.lineTo(588, 89);
        this.context.lineTo(596, 89);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c246":
        this.context.moveTo(382, 490);
        this.context.lineTo(372, 490);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 203);
        this.context.lineTo(588, 203);
        this.context.lineTo(588, 24);
        this.context.lineTo(605, 24);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c247":
        this.context.moveTo(382, 490);
        this.context.lineTo(372, 490);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 200);
        this.context.lineTo(639, 200);
        this.context.lineTo(639, 183);
        this.context.lineTo(653, 183);
        this.context.moveTo(639, 200);
        this.context.lineTo(639, 116);
        this.context.lineTo(649, 116);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c250":
        this.context.moveTo(382, 490);
        this.context.lineTo(372, 490);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 200);
        this.context.lineTo(643, 200);
        this.context.lineTo(643, 207);
        this.context.lineTo(653, 207);
        this.context.moveTo(643, 207);
        this.context.lineTo(643, 267);
        this.context.lineTo(653, 267);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c255":
        this.context.moveTo(382, 490);
        this.context.lineTo(372, 490);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 200);
        this.context.lineTo(643, 200);
        this.context.lineTo(643, 283);
        this.context.lineTo(681, 283);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "c256":
        this.context.moveTo(382, 490);
        this.context.lineTo(372, 490);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 266);
        this.context.lineTo(412, 266);
        this.context.lineTo(412, 200);
        this.context.lineTo(643, 200);
        this.context.lineTo(643, 293);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "grill+co":
        this.context.moveTo(382, 490);
        this.context.lineTo(372, 490);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 413);
        this.context.lineTo(245, 413);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "pizzapizza":
        this.context.moveTo(382, 490);
        this.context.lineTo(372, 490);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 392);
        this.context.lineTo(325, 392);
        this.context.lineTo(325, 375);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "timhortons":
        this.context.moveTo(382, 490);
        this.context.lineTo(372, 490);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 392);
        this.context.lineTo(386, 392);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      case "wrs":
        this.context.moveTo(382, 490);
        this.context.lineTo(372, 490);
        this.context.lineTo(372, 442);
        this.context.lineTo(352, 442);
        this.context.lineTo(352, 340);
        this.context.lineTo(325, 340);
        this.context.lineTo(325, 329);
        this.context.moveTo(325, 340);
        this.context.lineTo(268, 340);
        this.context.lineTo(268, 293);
        this.context.lineTo(273, 293);
        this.drawCbuildingFloor2_DestinationMarker(btnId);
        break;
      default:
        break;
    }
    this.context.stroke();
  }

  public drawPathFromStairCaseG_C(btnId: string) {
    
  }
  
  public drawCbuildingFloor2_DestinationMarker(btnId: String) {
    switch (btnId) {  

      case "c201":
        this.context.drawImage(this.destinationMarker, 85, 316); //top
        this.context.drawImage(this.destinationMarker, 105, 436); //mid
        this.context.drawImage(this.destinationMarker, 155, 556); //bottom
      break;

      case "c210":
        this.context.drawImage(this.destinationMarker, 275, 535);
      break;

      case "c211":
        this.context.drawImage(this.destinationMarker, 432, 416);
      break;

      case "c212":
        this.context.drawImage(this.destinationMarker, 325, 535);
      break;

      case "c213":
        this.context.drawImage(this.destinationMarker, 410, 397);
      break;

      case "c214":
        this.context.drawImage(this.destinationMarker, 442, 277);
      break;

      case "c221":
        this.context.drawImage(this.destinationMarker, 355, 326);
      break;

      case "c227":
        this.context.drawImage(this.destinationMarker, 362, 277);
      break;

      case "c230":
        this.context.drawImage(this.destinationMarker, 340, 210);
      break;

      case "c234":
        this.context.drawImage(this.destinationMarker, 457, 156);
        this.context.drawImage(this.destinationMarker, 417, 110);
      break;

      case "c235":
        this.context.drawImage(this.destinationMarker, 485, 236);
      break;

      case "c236":
        this.context.drawImage(this.destinationMarker, 530, 156);
      break;

      case "c241":
        this.context.drawImage(this.destinationMarker, 642, 76);
      break;

      case "c243":
        this.context.drawImage(this.destinationMarker, 601, 20);
      break;

      case "c243A":
        this.context.drawImage(this.destinationMarker, 601, 40);
      break;

      case "c243B":
        this.context.drawImage(this.destinationMarker, 601, 60);
      break;

      case "c246":
        this.context.drawImage(this.destinationMarker, 597, 2);
      break;

      case "c247":
        this.context.drawImage(this.destinationMarker, 642, 96);
        this.context.drawImage(this.destinationMarker, 642, 156);
      break;

      case "c250":
        this.context.drawImage(this.destinationMarker, 642, 175);
        this.context.drawImage(this.destinationMarker, 645, 236);
      break;

      case "c255":
        this.context.drawImage(this.destinationMarker, 675, 265);
      break;

      case "c256":
        this.context.drawImage(this.destinationMarker, 610, 265);
      break;

       // timhortons
      case "pizzapizza":
        this.context.drawImage(this.destinationMarker, 295, 335); 
      break;

      case "grill+co":
        this.context.drawImage(this.destinationMarker, 200, 375); 
      break;

      case "timhortons":
        this.context.drawImage(this.destinationMarker, 375, 365); 
      break;

      case "wrs":
        this.context.drawImage(this.destinationMarker, 311, 290); // men
        this.context.drawImage(this.destinationMarker, 265, 260); // women
      break;

    }
  }
}

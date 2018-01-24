import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { QrscannerPage } from '../qrscanner/qrscanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public qrScanner: QRScanner) {

  }
  scanner() {
    this.navCtrl.push(QrscannerPage);
  }

}

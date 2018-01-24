import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
/**
 * Generated class for the QrscannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qrscanner',
  templateUrl: 'qrscanner.html',
})
export class QrscannerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public qrScanner: QRScanner,
    public viewCtrl: ViewController) {
    this.qrscanner();
  }

  qrscanner() {

    // Optionally request the permission early
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted
          //alert('authorized');
          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
            alert(text);
            //#keep scanner
            this.qrscanner();
            //this.qrScanner.hide(); // hide camera preview
            //scanSub.unsubscribe(); // stop scanning
            // this.navCtrl.pop();
          });

          //this.qrScanner.resumePreview();

          // show camera preview
          window.document.querySelector('ion-app').classList.add('transparent-body');
          this.qrScanner.show()
            .then((data: QRScannerStatus) => {
              //alert(data.showing);
            }, err => {
              alert(err);

            });
          
          // wait for user to scan something, then the observable callback will be called
        } else if (status.denied) {
          alert('denied');
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
          alert('else');
        }
      })
      .catch((e: any) => {
        alert('Error is' + e);
      });

  }
  public dismiss(): void {
    this.viewCtrl.dismiss();
  }
}

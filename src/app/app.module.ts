import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { QRScanner } from '@ionic-native/qr-scanner';

import { QRScannerApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QrscannerPage } from '../pages/qrscanner/qrscanner';

@NgModule({
  declarations: [
    QRScannerApp,
    HomePage,
    QrscannerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(QRScannerApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    QRScannerApp,
    HomePage,
    QrscannerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    QRScanner
  ]
})
export class AppModule {}

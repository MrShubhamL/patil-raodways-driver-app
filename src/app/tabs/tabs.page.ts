import { Component, EnvironmentInjector, inject } from '@angular/core';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonFab,
  IonFabButton,
  Platform
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {triangle, ellipse, square, home, train, person, camera, notifications, barcode, qrCode} from 'ionicons/icons';
import {ActivatedRoute, Router} from "@angular/router";
import {BarcodeScanner} from "@capacitor-mlkit/barcode-scanning";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonFab, IonFabButton, NgIf],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);
  scannedResult: string | null = null;

  constructor(private platform: Platform, private router: Router, private route: ActivatedRoute) {
    addIcons({
      home,
      train,
      person,
      camera,
      notifications,
      barcode,
      qrCode
    });
  }


  async scanBarcode() {
    // Ensure camera works only on real device
    if (!this.platform.is('hybrid')) {
      alert('Barcode scanning only works on a real device.');
      return;
    }

    const supported = await BarcodeScanner.isSupported();
    if (!supported.supported) {
      alert('Barcode scanning not supported on this device.');
      return;
    }

    // Request permissions
    const permission = await BarcodeScanner.requestPermissions();
    if (permission.camera !== 'granted') {
      alert('Camera permission not granted.');
      return;
    }

    // Start scanning
    const { barcodes } = await BarcodeScanner.scan();
    if (barcodes.length > 0) {
      this.scannedResult = barcodes[0].rawValue || 'No data';
      await this.router.navigateByUrl(`/tabs/invoice-info/${this.scannedResult}`);
    } else {
      this.scannedResult = 'No barcode detected';
      alert(this.scannedResult)
    }
  }

  isMenuBarVisible(){
    return this.router.url === "/tabs/invoice-photo";
  }
}

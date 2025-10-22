import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonCard, IonItem, IonLabel, Platform, IonMenuButton
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {barcodeOutline, busOutline, settingsOutline} from "ionicons/icons";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonCard, IonItem, IonLabel, IonMenuButton],
})
export class Tab1Page {
  constructor() {
    addIcons({
      settingsOutline,
      barcodeOutline,
      busOutline
    })
  }
}

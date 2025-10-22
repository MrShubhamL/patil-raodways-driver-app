import { Component } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {arrowBackOutline, chevronDownOutline} from "ionicons/icons";
import {
  IonButton,
  IonButtons, IonCard, IonContent,
  IonHeader,
  IonIcon, IonItem, IonLabel,
  IonMenuButton,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonCard, IonItem, IonLabel, IonMenuButton],
})
export class Tab2Page {

  constructor() {
    addIcons({
      arrowBackOutline,
      chevronDownOutline
    })
  }

}

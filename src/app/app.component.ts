import { Component } from '@angular/core';
import {addIcons} from "ionicons";
import {documentTextOutline, homeOutline, powerOutline, settingsOutline, statsChartOutline} from "ionicons/icons";
import {
  IonAlert, IonApp,
  IonButton,
  IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonChip, IonCol,
  IonContent, IonFooter,
  IonHeader,
  IonIcon, IonItem, IonLabel, IonList, IonMenu, IonRouterOutlet,
  IonRow,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { Platform } from '@ionic/angular';
import { StatusBar, Style } from '@capacitor/status-bar';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonMenu, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, CommonModule, FormsModule,
    IonButton, IonButtons, IonIcon, IonContent, IonRow, IonCol, IonLabel, IonAlert,
    IonItem, IonChip, IonList, IonFooter, IonCard, IonCardHeader, IonCardTitle, IonCardContent
  ]
})
export class AppComponent {
  constructor(private platform: Platform, private router: Router) {
    addIcons({
      homeOutline,
      documentTextOutline,
      statsChartOutline,
      settingsOutline,
      powerOutline
    });
  }

}

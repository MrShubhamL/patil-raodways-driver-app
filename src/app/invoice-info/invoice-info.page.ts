import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {addIcons} from "ionicons";
import {
  arrowForwardCircle,
  arrowForwardCircleOutline,
  barcodeOutline,
  busOutline,
  settingsOutline
} from "ionicons/icons";
import {
  IonButton,
  IonButtons, IonChip, IonCol,
  IonContent, IonFooter,
  IonHeader,
  IonIcon, IonItem, IonLabel, IonList, IonMenuButton,
  IonRow,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-invoice-info',
  templateUrl: './invoice-info.page.html',
  styleUrls: ['./invoice-info.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle,
    IonButton, IonButtons, IonIcon, IonContent, IonRow, IonCol, IonLabel, IonItem, IonChip, IonList, IonFooter, IonMenuButton]
})
export class InvoiceInfoPage implements OnInit {
  barcodeValue: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {
    addIcons({
      settingsOutline,
      barcodeOutline,
      busOutline,
      arrowForwardCircleOutline,
      arrowForwardCircle
    })
    this.barcodeValue = this.route.snapshot.paramMap.get('code');
  }

  ngOnInit() {
  }

  proceedDelivery() {
    this.router.navigate(['/tabs/invoice-photo'])
  }
}

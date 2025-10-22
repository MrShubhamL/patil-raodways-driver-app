import { Component, OnInit } from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {Camera, CameraResultType, CameraSource} from "@capacitor/camera";
import {addIcons} from "ionicons";
import {arrowBackCircle, arrowForwardCircle, arrowUndoCircle, cameraOutline, checkmarkDoneCircle} from "ionicons/icons";
import type { OverlayEventDetail } from '@ionic/core';
import {
  IonAlert,
  IonButton,
  IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonChip, IonCol,
  IonContent, IonFooter,
  IonHeader,
  IonIcon, IonItem, IonLabel, IonList,
  IonRow,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-invoice-photo',
  templateUrl: './invoice-photo.page.html',
  styleUrls: ['./invoice-photo.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, CommonModule, FormsModule,
    IonButton, IonButtons, IonIcon, IonContent, IonRow, IonCol, IonLabel, IonAlert,
    IonItem, IonChip, IonList, IonFooter, IonCard, IonCardHeader, IonCardTitle, IonCardContent
  ]
})
export class InvoicePhotoPage implements OnInit {
  invoicePhotoFile: File | null = null;
  locationPhotoFile: File | null = null;
  invoicePreview: string | null = null;
  locationPreview: string | null = null;

  constructor(private router: Router, private location: Location) {
    addIcons({
      cameraOutline,
      arrowBackCircle,
      arrowForwardCircle,
      arrowUndoCircle,
      checkmarkDoneCircle
    })
  }

  ngOnInit() {
  }
  async takeInvoicePhoto() {
    const fileData = await this.capturePhoto('Invoice');
    if (fileData) {
      this.invoicePhotoFile = fileData.file;
      this.invoicePreview = fileData.preview;
    }
  }

  async takeLocationPhoto() {
    const fileData = await this.capturePhoto('Location');
    if (fileData) {
      this.locationPhotoFile = fileData.file;
      this.locationPreview = fileData.preview;
    }
  }

  async capturePhoto(type: string): Promise<{ file: File; preview: string } | null> {
    try {
      const image = await Camera.getPhoto({
        quality: 80,
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera,
      });

      const base64Data = image.base64String!;
      const byteArray = this.base64ToBlob(base64Data, `image/${image.format}`);
      const file = new File([byteArray], `${type}_${Date.now()}.jpg`, { type: `image/${image.format}` });

      const preview = `data:image/${image.format};base64,${base64Data}`;
      return { file, preview };
    } catch (error) {
      console.log(`${type} photo cancelled or failed`, error);
      return null;
    }
  }

  base64ToBlob(base64Data: string, contentType: string): Blob {
    const byteCharacters = atob(base64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    return new Blob(byteArrays, { type: contentType });
  }

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
        this.completeDelivery()
      },
    },
  ];

  setResult(event: CustomEvent<OverlayEventDetail>) {
    console.log(`Dismissed with role: ${event.detail.role}`);
  }

  completeDelivery() {
    if (!this.invoicePhotoFile || !this.locationPhotoFile) {
      alert('Please capture both photos before completing delivery.');
      return;
    }

    const formData = new FormData();
    formData.append('invoicePhoto', this.invoicePhotoFile);
    formData.append('locationPhoto', this.locationPhotoFile);
    this.resetCaptures();
    alert("The customer order has been delivered successfully!!");
    this.router.navigate(['/tabs/tab1'])
  }

  get isDeliveryReady() {
    return !!(this.invoicePhotoFile && this.locationPhotoFile);
  }

  goBack() {
    this.location.back(); // navigates to previous page
  }

  resetCaptures(){
    this.invoicePhotoFile = null;
    this.invoicePreview = null;
    this.locationPhotoFile = null;
    this.locationPreview = null;
  }
}

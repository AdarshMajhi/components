import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ButtonComponent, ButtonWidth, ButtonShape, NativeButtonType, ButtonSize, ButtonType } from '../atoms/button/button.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,ButtonComponent,],
})
export class HomePage {

  ButtonWidth = ButtonWidth;
  ButtonShape = ButtonShape;
  NativeButtonType = NativeButtonType;
  ButtonSize = ButtonSize;
  ButtonType = ButtonType;
  

  constructor() {}
}

import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
// import { InputFieldComponentComponent } from '../atoms/input-field/input-field.component.component';
// import { InputCheckboxComponent } from '../atoms/input-checkbox/input-checkbox.component';
// import { ButtonComponent } from '../atoms/button/button.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,],
})
export class HomePage {
  constructor() {}
}

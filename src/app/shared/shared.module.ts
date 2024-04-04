import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

// COMPONENTS

import { MinicardClimaComponent } from './components/minicard-clima/minicard-clima.component';
import { CardHorizonListClimaComponent } from './components/card-horizon-list-clima/card-horizon-list-clima.component';
import { CardPrincipalClimaComponent } from './components/card-principal-clima/card-principal-clima.component';



@NgModule({
  declarations: [
    MinicardClimaComponent,
    CardHorizonListClimaComponent,
    CardPrincipalClimaComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    MinicardClimaComponent,
    CardHorizonListClimaComponent,
    CardPrincipalClimaComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationConfirmationPageRoutingModule } from './registration-confirmation-routing.module';

import { RegistrationConfirmationPage } from './registration-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationConfirmationPageRoutingModule
  ],
  declarations: [RegistrationConfirmationPage]
})
export class RegistrationConfirmationPageModule {}

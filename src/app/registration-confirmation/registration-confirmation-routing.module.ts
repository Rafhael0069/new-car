import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationConfirmationPage } from './registration-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationConfirmationPageRoutingModule {}

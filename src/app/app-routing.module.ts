import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { AddressInfoComponent } from './address-info/address-info.component';
import { ADDRESS_INFO_PAGE, PAYMENT_INFO_PAGE, PERSONAL_INFO_PAGE, RESPONSE_PAGE } from 'src/constants';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { ResponsePageComponent } from './response-page/response-page.component';

const routes: Routes = [
  { path: `${PERSONAL_INFO_PAGE}`, component: PersonalInfoComponent },
  { path: `${ADDRESS_INFO_PAGE}`, component: AddressInfoComponent },
  { path: `${PAYMENT_INFO_PAGE}`, component: PaymentInfoComponent },
  { path: `${RESPONSE_PAGE}`, component: ResponsePageComponent },
  { path: '', redirectTo: `/${PERSONAL_INFO_PAGE}`, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { AddressInfoComponent } from './address-info/address-info.component';
import { ADDRESS_INFO_PAGE, PERSONAL_INFO_PAGE } from 'src/constants';

const routes: Routes = [
  { path: `${PERSONAL_INFO_PAGE}`, component: PersonalInfoComponent },
  { path: `${ADDRESS_INFO_PAGE}`, component: AddressInfoComponent },
  {path: '', redirectTo: `/${PERSONAL_INFO_PAGE}`, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

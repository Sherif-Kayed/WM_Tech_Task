import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { userInfoReducer } from './state/userInfo/userInfo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { AddressInfoComponent } from './address-info/address-info.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { PaymentInfoEffects } from './state/userInfo/userInfo.effects';
import { ResponsePageComponent } from './response-page/response-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    AddressInfoComponent,
    PaymentInfoComponent,
    ResponsePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ userState: userInfoReducer }),
    EffectsModule.forRoot([PaymentInfoEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

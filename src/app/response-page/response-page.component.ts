import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectError, selectLoading, selectPaymentDataId } from '../state/userInfo/userInfo.selectors';
import { AppState } from '../state/app.state';

@Component({
  selector: 'app-response-page',
  templateUrl: './response-page.component.html',
  styleUrls: ['./response-page.component.scss']
})
export class ResponsePageComponent {
  constructor(private store: Store<AppState>) {}

  isLoading$ = this.store.select(selectLoading);
  paymentDataId$ = this.store.select(selectPaymentDataId);
  error$ = this.store.select(selectError);

}

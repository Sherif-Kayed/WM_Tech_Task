import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { AppState } from '../state/app.state';
import { selectPaymentInfo } from '../state/userInfo/userInfo.selectors';
import { getPaymentInfo, setPaymentInfo } from '../state/userInfo/userInfo.actions';
import { ADDRESS_INFO_PAGE } from 'src/constants';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.scss']
})
export class PaymentInfoComponent {
  constructor(private store: Store<AppState>, private router: Router) { }

  private destroy$ = new Subject<void>();

  ngOnInit() {
    this.store.select(selectPaymentInfo).pipe(takeUntil(this.destroy$)).subscribe(paymentInfo => {
      if (paymentInfo) {
        this.form.patchValue(paymentInfo);
      }
    });
    this.store.dispatch(getPaymentInfo());
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  form = new FormGroup({
    owner: new FormControl('', [Validators.required]),
    iban: new FormControl('', [Validators.required])
  })

  onClickSubmit() {
    console.log(this.form);
    this.store.dispatch(setPaymentInfo({
      data: {
        customerId: Math.floor(Math.random() * 10) + 1, // change customerId to null to simulate error
        owner: this.form.value.owner!,
        iban: this.form.value.iban!
      }
    }))
  }

  onClickBack() {
    this.router.navigate([`./${ADDRESS_INFO_PAGE}`]);
  }
}

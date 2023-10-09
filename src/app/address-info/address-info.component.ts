import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { getAddressInfo, setAddressInfo } from '../state/userInfo/userInfo.actions';
import { PERSONAL_INFO_PAGE } from 'src/constants';
import { selectAddressInfo } from '../state/userInfo/userInfo.selectors';
import { AppState } from '../state/app.state';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.scss']
})
export class AddressInfoComponent implements OnInit, OnDestroy {
  constructor(private store: Store<AppState>, private router: Router) { }

  private destroy$ = new Subject<void>();

  ngOnInit() {
    this.store.select(selectAddressInfo).pipe(takeUntil(this.destroy$)).subscribe(addressInfo => {
      if (addressInfo) {
        this.form.patchValue(addressInfo);
      }
    });
    this.store.dispatch(getAddressInfo());
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  form = new FormGroup({
    street: new FormControl('', [Validators.required]),
    houseNumber: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
  })

  onClickNext() {
    console.log(this.form);
    this.store.dispatch(setAddressInfo({
      data: {
        street: this.form.value.street!,
        houseNumber: this.form.value.houseNumber!,
        zipCode: this.form.value.zipCode!,
        city: this.form.value.city!
      }
    }))
  }

  onClickBack() {
    this.router.navigate([`./${PERSONAL_INFO_PAGE}`]);
  }
}

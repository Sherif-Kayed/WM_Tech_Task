import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { getPersonalInfo, setPersonalInfo } from '../state/userInfo/userInfo.actions';
import { ADDRESS_INFO_PAGE } from 'src/constants';
import { selectPersonalInfo } from '../state/userInfo/userInfo.selectors';
import { Subject, takeUntil } from 'rxjs';
import { AppState } from '../state/app.state';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  constructor(private store: Store<AppState>, private router: Router) { }

  private destroy$ = new Subject<void>();

  form = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required])
  })

  ngOnInit() {
    this.store.select(selectPersonalInfo).pipe(takeUntil(this.destroy$)).subscribe(personalInfo => {
      if (personalInfo) {
        this.form.patchValue(personalInfo);
      }
    });
    this.store.dispatch(getPersonalInfo());
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onClickNext() {
    console.log(this.form);
    this.store.dispatch(setPersonalInfo({
      data: {
        firstName: this.form.value.firstName!,
        lastName: this.form.value.lastName!,
        telephone: this.form.value.telephone!
      }
    }))
    this.router.navigate([`./${ADDRESS_INFO_PAGE}`]);
  }
}

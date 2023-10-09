import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { setPersonalInfo } from '../state/userInfo/userInfo.actions';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent {
    constructor(private store: Store) {}

    form = new FormGroup({
      firstName: new  FormControl('',[Validators.required]),
      lastName: new  FormControl('',[Validators.required]),
      telephone: new  FormControl('',[Validators.required])
    })

    onClickNext() {
      console.log(this.form);
      this.store.dispatch(setPersonalInfo({
        data: {
          firstName: this.form.value.firstName!,
          lastName: this.form.value.lastName!,
          telephone: this.form.value.telephone!
        }
      }))
    }
}

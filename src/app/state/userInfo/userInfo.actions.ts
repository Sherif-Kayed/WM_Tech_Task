import { createAction, props } from '@ngrx/store';
import { SET_PERSONAL_INFO } from 'src/constants';

export const setPersonalInfo = createAction (
    SET_PERSONAL_INFO,
    props<{ data: { firstName: string, lastName: string, telephone: string} }>()
)
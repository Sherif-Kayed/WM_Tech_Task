import { createAction, props } from '@ngrx/store';
import { GET_ADDRESS_INFO, GET_PERSONAL_INFO, SET_ADDRESS_INFO, SET_PERSONAL_INFO } from 'src/constants';

export const setPersonalInfo = createAction (
    SET_PERSONAL_INFO,
    props<{ data: { firstName: string, lastName: string, telephone: string} }>()
)

export const getPersonalInfo = createAction (GET_PERSONAL_INFO)

export const setAddressInfo = createAction (
    SET_ADDRESS_INFO,
    props<{ data: { street: string, houseNumber: string, zipCode: string, city: string} }>()
)

export const getAddressInfo = createAction (GET_ADDRESS_INFO);
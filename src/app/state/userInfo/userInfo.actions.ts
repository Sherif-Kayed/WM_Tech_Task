import { createAction, props } from '@ngrx/store';
import {
    GET_ADDRESS_INFO,
    GET_PAYMENT_INFO,
    GET_PERSONAL_INFO,
    PAYMENT_REQUEST_FAILURE,
    PAYMENT_REQUEST_SUCCESS,
    SET_ADDRESS_INFO,
    SET_PAYMENT_INFO,
    SET_PERSONAL_INFO
} from 'src/constants';

// Personal Info
export const setPersonalInfo = createAction(
    SET_PERSONAL_INFO,
    props<{ data: { firstName: string, lastName: string, telephone: string } }>()
);
export const getPersonalInfo = createAction(GET_PERSONAL_INFO)

// Address Info
export const setAddressInfo = createAction(
    SET_ADDRESS_INFO,
    props<{ data: { street: string, houseNumber: string, zipCode: string, city: string } }>()
);
export const getAddressInfo = createAction(GET_ADDRESS_INFO);

// Payment Info
export const setPaymentInfo = createAction(
    SET_PAYMENT_INFO,
    props<{ data: { customerId: number, owner: string, iban: string } }>() // change customerId to any to simulate error
);
export const getPaymentInfo = createAction(GET_PAYMENT_INFO);
export const paymentRequestSuccess = createAction(
    PAYMENT_REQUEST_SUCCESS,
    props<{paymentDataId: any}>()
);
export const paymentRequestFailure = createAction(
    PAYMENT_REQUEST_FAILURE,
    props<{error: any}>()
);
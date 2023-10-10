import { createReducer, on } from "@ngrx/store";
import { paymentRequestFailure, paymentRequestSuccess, setAddressInfo, setPaymentInfo, setPersonalInfo } from "./userInfo.actions";

export interface UserInfoState {
    personalInfo: {
        firstName: string,
        lastName: string,
        telephone: string
    },
    addressInfo: {
        street: string,
        houseNumber: string,
        zipCode: string,
        city: string
    },
    paymentInfo: {
        customerId: any,
        owner: string,
        iban: string;
    },
    paymentDataId: string,
    error: any,
    loading: boolean
}

export const initialState: UserInfoState = {
    personalInfo: {
        firstName: '',
        lastName: '',
        telephone: ''
    },
    addressInfo: {
        street: '',
        houseNumber: '',
        zipCode: '',
        city: ''
    },
    paymentInfo: {
        customerId: null,
        owner: '',
        iban: ''
    },
    paymentDataId: '',
    error: null,
    loading: false
};

export const userInfoReducer = createReducer(
    initialState,
    on(setPersonalInfo, (state, { data }) => ({ ...state, personalInfo: data })),
    on(setAddressInfo, (state, { data }) => ({ ...state, addressInfo: data })),
    on(setPaymentInfo, (state, { data }) => ({ ...state, paymentInfo: data, loading: true })),
    on(paymentRequestSuccess, (state, { paymentDataId }) => ({ ...state, paymentDataId, loading: false, error: null })),
    on(paymentRequestFailure, (state, { error }) => ({ ...state, error, loading: false }))
)
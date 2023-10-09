import { createReducer, on } from "@ngrx/store";
import { setAddressInfo, setPersonalInfo } from "./userInfo.actions";

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
    }
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
    }
};

export const userInfoReducer = createReducer(
    initialState,
    on(setPersonalInfo, (state, { data }) => ({ ...state, personalInfo: data })),
    on(setAddressInfo, (state, { data }) => ({ ...state, addressInfo: data })),
)
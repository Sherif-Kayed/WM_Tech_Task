import { createReducer, on } from "@ngrx/store";
import { setPersonalInfo } from "./userInfo.actions";

export interface UserInfoState {
    personalInfo: {
        firstName: string,
        lastName: string,
        telephone: string
    },
}

export const initialState: UserInfoState = {
    personalInfo: {
        firstName: '',
        lastName: '',
        telephone: ''
    }
};

export const userInfoReducer = createReducer(
    initialState,
    on(setPersonalInfo, (state, { data }) => ({ ...state, personalInfo: data })),
)
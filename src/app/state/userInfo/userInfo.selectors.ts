import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { UserInfoState } from "./userInfo.reducer";

export const selectUserState = (state: AppState) => state.userState;
export const selectPersonalInfo = createSelector(
    selectUserState, (userState: UserInfoState) => userState.personalInfo
);
export const selectAddressInfo = createSelector(
    selectUserState, (userState: UserInfoState) => userState.addressInfo
)
export const selectPaymentInfo = createSelector(
    selectUserState, (userState: UserInfoState) => userState.paymentInfo
)
export const selectLoading = createSelector(
    selectUserState,(userState :UserInfoState)=>  userState.loading
)
export const selectPaymentDataId = createSelector(
    selectUserState, (userState: UserInfoState) => userState.paymentDataId
)
export const selectError = createSelector(
    selectUserState , (userState: UserInfoState )=>   userState.error
)
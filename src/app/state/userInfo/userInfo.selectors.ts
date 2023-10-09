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



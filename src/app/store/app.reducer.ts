import { ActionReducerMap } from "@ngrx/store";
import { historyReducer, HistoryState } from "./history/history.reducer";
import { userReducer, UserState } from "./user/user.reducer";

export interface AppState {
    user: UserState;
    history: HistoryState
}

export const reducers: ActionReducerMap<AppState> = {
    user: userReducer,
    history: historyReducer
};
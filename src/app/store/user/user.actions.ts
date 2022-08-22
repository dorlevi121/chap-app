import { createAction, props } from "@ngrx/store";

export const ADD_USER_TO_ACTIVE_LIST = "ADD_USER_TO_ACTIVE_LIST";
export const REMOVE_USER_FROM_ACTIVE_LIST = "REMOVE_USER_FROM_ACTIVE_LIST";

export const addUserToActiveList = createAction(ADD_USER_TO_ACTIVE_LIST, props<{ userId: string }>());
export const removeUserFromActiveList = createAction(REMOVE_USER_FROM_ACTIVE_LIST, props<{ userId: string }>());
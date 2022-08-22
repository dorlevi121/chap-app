import { createAction, props } from "@ngrx/store";
import { Message } from "src/app/models/meesage";

export const ADD_MESSAGE_TO_HISTORY = "ADD_MESSAGE_TO_HISTORY";


export const addMessageToHistory = createAction(ADD_MESSAGE_TO_HISTORY, props<{ room: string, history: Message }>());

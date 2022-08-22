import { createReducer, on } from "@ngrx/store";
import { Message } from "src/app/models/meesage";
import * as actions from "./history.actions";

export interface HistoryState {
    history: { [room: string]: Message[] }
}

const initialState: HistoryState = {
    history: {}
}

export const historyReducer = createReducer(initialState,
    // Add Message To History
    on(actions.addMessageToHistory, (state, payload) => {
        const history = { ...state.history };
        let roomMessage: Message[];
        if (state.history[payload.room]) {
            roomMessage = [...state.history[payload.room]];
        }
        else {
            roomMessage = []
        }
        roomMessage.push(payload.history);
        history[payload.room] = roomMessage;

        return {
            ...state,
            // TODO: check without spreading
            history: { ...history }
        }
    }),
    )
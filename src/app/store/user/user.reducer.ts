import { createReducer, on } from "@ngrx/store";
import { User } from "../../models/user";
import * as actions from "./user.actions";

export interface UserState {
    users: User[];
    activeUsers: number;
}

const initialState: UserState = {
    users: [
        {
            id: '1',
            firstName: "John",
            lastName: "Cena",
            isActive: true
        },
        {
            id: '2',
            firstName: "Dor",
            lastName: "Levi",
            isActive: true
        },
        {
            id: '3',
            firstName: "Arkadi",
            lastName: "gaidamak",
            isActive: false
        },
        {
            id: '4',
            firstName: "April",
            lastName: "O'neil",
            isActive: false
        },
        {
            id: '5',
            firstName: "Mark",
            lastName: "Rich",
            isActive: false
        },
        {
            id: '4',
            firstName: "Sanna",
            lastName: "Marin",
            isActive: false
        }
    ],
    activeUsers: 2
}

export const userReducer = createReducer(
    initialState,
    on(actions.addUserToActiveList, (state, payload) => {
        const userIndex = state.users.findIndex(user => user.id === payload.userId);
        if (userIndex === -1 || state.activeUsers >= 4) {
            return state;
        }
        const user: User = { ...state.users[userIndex] };
        user.isActive = true;
        const copyUsers = [...state.users];
        copyUsers[userIndex] = user;

        return {
            ...state,
            users: [...copyUsers],
            activeUsers: state.activeUsers + 1
        }
    }),
    on(actions.removeUserFromActiveList, (state, payload) => {
        const userIndex = state.users.findIndex(user => user.id === payload.userId);
        if (userIndex === -1) {
            return state;
        }

        const user = { ...state.users[userIndex] }
        user.isActive = false;

        const copyUsers = [...state.users];
        copyUsers[userIndex] = user;

        return {
            ...state,
            users: [...copyUsers],
            activeUsers: state.activeUsers - 1
        }
    })
);
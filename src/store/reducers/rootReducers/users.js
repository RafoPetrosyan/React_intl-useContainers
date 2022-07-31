import * as types from "../../types/users";
import Account from "../../../helpers/Account";

const initialState = {
    currentUser: Account.getAccount(),
    users: [],
    dataCount: 0,
    loader: false,
};

const users = (state = initialState, { type, payload }) => {
    switch (type){

        case types.USERS_LIST_REQUEST:
            return {
                ...state,
                loader: true,
            }

        case types.USERS_LIST_SUCCESS:
            return {
                ...state,
                users: payload.users,
                dataCount: payload.dataCount,
                loader: false,
            }

        case types.SET_LOADER:
            return {
                ...state,
                loader: payload,
            }

        default: {
            return state;
        }
    }
};

export default users;
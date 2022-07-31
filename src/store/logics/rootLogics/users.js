import { createLogic } from 'redux-logic';
import * as types from "../../types/users";
import Account from "../../../helpers/Account";
import history from "../../../helpers/history";

const signIn = createLogic({
    type: types.SIGN_IN_REQUEST,
    latest: true,
    async process({ getState, action, httpClient }, dispatch, done) {

        dispatch({
            type: types.SET_LOADER,
            payload: true,
        });

        try {
            const {data: { user, token }} = await httpClient.post('/user/sign-in-admin', action.payload);
            Account.setToken(token);
            Account.setAccount(user);
            history.push('/');

            action.cb && action.cb('success');
        }catch (e){
            dispatch({
                type: types.SET_LOADER,
                payload: false,
            });
        }
        done();
    },
});

const getUserList = createLogic({
    type: types.USERS_LIST_REQUEST,
    latest: true,
    async process({ getState, action, httpClient }, dispatch, done) {
        try {
            const {data: { users, dataCount }} = await httpClient.get('/user');
            dispatch({
                type: types.USERS_LIST_SUCCESS,
                payload: { users, dataCount },
            });
            action.cb && action.cb('success');
        }catch (e){
            dispatch({
                type: types.SET_LOADER,
                payload: false,
            });
        }
        done();
    },
});

export const users = [signIn, getUserList];
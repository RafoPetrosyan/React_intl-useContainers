import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeAction } from "../../store/actions/makeAction";
import * as types from '../../store/types/users';

const useContainer = () => {
    const dispatch = useDispatch();
    const { users, dataCount } = useSelector(({users}) => users);
    const [value, setValue] = useState('');

    useEffect(() => {
        dispatch(makeAction(types.USERS_LIST_REQUEST));
    }, []);

    return {
        users,
        dataCount,
        value,
        setValue
    }

};

export default useContainer;
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";

import { makeAction } from "../../store/actions/makeAction";
import { SET_INTL } from "../../store/types/intl";
import { LOCALE_INTL } from "../../constants";
import Account from "../../helpers/Account";
import history from "../../helpers/history";

const options = {
    en: { value: 'en', label: 'EN' },
    am: { value: 'am', label: 'AM' },
};

const selectOptions = Object.values(options);

const useContainer = () => {
    const dispatch = useDispatch();
    const { locale } = useSelector(({intl}) => intl)
    const [initialLanguage, setInitialLanguage] = useState(() => options[locale]);

    const changeLanguage = (e) => {
        setInitialLanguage(e);
        dispatch(makeAction(SET_INTL, LOCALE_INTL[e.label]));
        localStorage.setItem('language', JSON.stringify(e));
    };

    const logAuth = () => {
        Account.delete();
        history.replace('/auth/sign-in');
    }

    return {
        initialLanguage,
        selectOptions,
        changeLanguage,
        logAuth,
    }
};

export default useContainer;
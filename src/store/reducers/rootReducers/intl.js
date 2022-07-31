import { SET_INTL } from "../../types/intl";
import { INITIAL_LANGUAGE } from "../../../constants";

const initialState = {
    ...INITIAL_LANGUAGE,
};

const intlReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case SET_INTL:
            return {
                ...payload,
            }

        default:
            return state;
    }
};

export default intlReducer;






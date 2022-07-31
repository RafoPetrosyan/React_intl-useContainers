import { useDispatch } from "react-redux";
import {SIGN_IN_REQUEST} from "../../store/types/users";
import {makeAction} from "../../store/actions/makeAction";

const useContainer = () => {
    const dispatch = useDispatch();

    const onFinish = (value) => {
        dispatch(makeAction(SIGN_IN_REQUEST, value));
    }

    return {
        onFinish,
    }

};

export default useContainer;
import { Navigate, Outlet } from "react-router-dom"
import Account from "../../helpers/Account";

const AuthorizedGuard = () => {
    const auth = Account.getAccount();
    const accessToken = Account.getToken();
    if(auth && accessToken) {
        return <Outlet />
    }
    return <Navigate to='/auth/sign-in' replace />
};

export default AuthorizedGuard;
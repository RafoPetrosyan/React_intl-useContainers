import { Navigate, Outlet } from "react-router-dom"
import Account from "../../helpers/Account";

const AuthGuard = () => {
    const auth = Account.getAccount();
    const accessToken = Account.getToken();
    if(auth && accessToken) {
        return <Navigate to='/' replace />
    }
    return <Outlet />
};

export default AuthGuard;
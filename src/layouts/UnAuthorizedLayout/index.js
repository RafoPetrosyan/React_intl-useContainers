import React from "react";

import Header from "../../components/Header";
import "./style.scss";

const UnAuthorizedLayout = ({ children }) => (
    <div className='unAuthorizedLayout'>
        <Header />
        {children}
    </div>
);

export default UnAuthorizedLayout;
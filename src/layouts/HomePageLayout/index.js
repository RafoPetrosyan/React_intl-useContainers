import React from "react";

import Header from "../../components/Header";
import "./style.scss";

const HomePageLayout = ({ children }) => (
    <div className='homePageLayout'>
        <Header />
        {children}
    </div>
);

export default HomePageLayout;
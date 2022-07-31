import React from "react";
import { FormattedMessage } from "react-intl";
import HomePageLayout from "../../layouts/HomePageLayout";
import "./style.scss";

const Users = () => {

    return (
        <HomePageLayout>
            <FormattedMessage id="users_title" />
        </HomePageLayout>
    )
};

export default Users;
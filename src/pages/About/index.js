import React from "react";
import { FormattedMessage } from "react-intl";
import HomePageLayout from "../../layouts/HomePageLayout";
import "./style.scss";

const About = () => {

    return (
        <HomePageLayout>
            <FormattedMessage id="aboutUs_title" />
        </HomePageLayout>
    )
}

export default About;
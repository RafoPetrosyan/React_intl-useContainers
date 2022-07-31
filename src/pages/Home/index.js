import React from "react";
import { FormattedMessage } from "react-intl";

import HomePageLayout from "../../layouts/HomePageLayout";
import useContainer from "./hook";
import "./style.scss";

const Home = () => {
    const { users, dataCount, value, setValue } = useContainer();

    return (
        <HomePageLayout>
            <div>
                <h1>
                    <FormattedMessage id="home_title" />
                </h1>
                {users.map(({username, _id}) => (
                    <p key={_id}>{username}</p>
                ))}
            </div>
            <p>
                <FormattedMessage id="home_users_count" values={{count: dataCount}} />
            </p>
            <input value={value} onChange={({target: {value}}) => setValue(value) } />
        </HomePageLayout>
    )
}

export default Home;
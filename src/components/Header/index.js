import React from "react";
import { NavLink } from "react-router-dom";
import Select from "react-select";
import { Button } from "antd";

import { PAGES } from "../../constants";
import useContainer from "./hook";
import "./style.scss";

const Header = () => {
   const { initialLanguage, selectOptions, changeLanguage, logAuth } = useContainer();

    return (
        <div className='header'>
            <div className='content'>
                <div className='navBar'>
                    {PAGES.map(item => (
                        <NavLink to={item.to} key={item.to} className={({isActive}) => isActive ? 'activeNavLink' : 'navLink' }>
                            {item.name}
                        </NavLink>
                    ))}
                </div>
                <div className='options'>
                    <Select options={selectOptions} value={initialLanguage} onChange={changeLanguage}/>
                </div>
                <Button onClick={logAuth}>help</Button>
            </div>
        </div>
    )
}
export default Header;
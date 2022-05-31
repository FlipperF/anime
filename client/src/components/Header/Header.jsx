import React from 'react';
import MainMenu from '../MainMenu/MainMenu';
import Search from '../Search/Search';
import UserAccount from '../UserAccount/UserAccount';
import Logo from '/Users/99web/Desktop/react test 2/client/src/img/logo.svg';
const Header = () => {
    return (
        <div>
            <header>
                <div className="header-flex container">

                    <img className="siteLogo" src={Logo}></img>

                    <MainMenu/>
                    <Search/>
                    <UserAccount/>
                   

                </div>
            </header>
        </div>
    );
};

export default Header;
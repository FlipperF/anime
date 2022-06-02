import React from 'react';
import classes from '../UserAccount.module.css'

const AccountNotAuthorized = () => {

    function setPopup () {
        console.log("popup open")
    }

    return (

        <div className={classes.notAutorisationBlock}>
            <button className={classes.notAutorisationBlock_btn} onClick={setPopup}>
                <i className={`${classes.notAutorisationBlock_btn_icon} fa fa-user`} aria-hidden="true"></i>
                <span className={classes.notAutorisationBlock_btn_title}>Авторизация</span>
            </button>
        </div>
    );
};

export default AccountNotAuthorized;
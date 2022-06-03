import React, { useState } from 'react';
import classes from '../UserAccount.module.css'

const AccountNotAuthorized = ({props}) => {

    const [modalActive, setModalactive] = useState(true)

    return (

        <div className={classes.notAutorisationBlock}>
            <button className={classes.notAutorisationBlock_btn} onClick={() => setModalactive(true)}>
                <i className={`${classes.notAutorisationBlock_btn_icon} fa fa-user`} aria-hidden="true"></i>
                <span className={classes.notAutorisationBlock_btn_title}>Авторизация</span>
            </button>
        </div>
    );
};

export default AccountNotAuthorized;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { togglePopupState } from '../../../Actions/ui';
import classes from '../UserAccount.module.css'

const AccountNotAuthorized = ({props}) => {

    const dispatch = useDispatch()
    const hundleClick = () => {
        dispatch(togglePopupState())
    }

    return (

        <div className={classes.notAutorisationBlock}>
            <button className={classes.notAutorisationBlock_btn} onClick={hundleClick}>
                <i className={`${classes.notAutorisationBlock_btn_icon} fa fa-user`} aria-hidden="true"></i>
                <span className={classes.notAutorisationBlock_btn_title}>Авторизация</span>
            </button>
        </div>
    );
};

export default AccountNotAuthorized;
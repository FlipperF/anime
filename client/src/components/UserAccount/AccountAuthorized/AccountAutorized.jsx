import React from 'react';
import classes from '../UserAccount.module.css'

const AccountAutorized = () => {
    return (
        <div className={classes.autorisationBlock}>
            <button className={classes.autorisationBlock_btn}>
                <img src="https://nyaa.shikimori.one/system/animes/preview/20.jpg" className={classes.autorisationBlock_btn_img}></img>
                <span className={classes.autorisationBlock_btn_login}>Flipper123</span>
                <span className={classes.autorisationBlock_btn_arrow}><i className={`${classes.autorisationBlock_btn_arrow_icon} fa fa-chevron-down`}></i></span>
            </button>
        </div>
    );
};

export default AccountAutorized;
import React, { useState } from 'react';
import LoginForm from './LoginForm/LoginForm';
import classes from './Popups.module.css';

const Popups = ({acive, setActive}) => {

    let [popUpStatus, setPopUpstatus] = useState("hidden")


    return (
        <div className={classes.frame} status={popUpStatus} >

            <div className={classes.container}>
                <div className={classes.kagune12}>
                    <div className={classes.kagune34}>
                        <LoginForm/>
                    </div>
                </div>
                <button className={classes.close}><i className='fa fa-close'></i></button>
            </div>
        </div>
    );
};

export default Popups;
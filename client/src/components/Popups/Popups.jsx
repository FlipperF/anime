import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { togglePopupState } from '../../Actions/ui';
import LoginForm from './LoginForm/LoginForm';
import classes from './Popups.module.css';

const Popups = ({acive, setActive}) => {
    
    const isVisiblePopup = useSelector( (state) => state.isVisiblePopup)

    const dispatch = useDispatch()
    const hundleClick = () => {
        dispatch(togglePopupState())
    }

    if (!isVisiblePopup) {
        return null
    }

    return (
        <div className={classes.frame} >

            <div className={classes.container}>
                <div className={classes.kagune12} onClick={(e) => e.stopPropagation()}>
                    <div className={classes.kagune34}>
                        <LoginForm/>
                    </div>
                </div>
                <button className={classes.close} onClick={hundleClick}><i className='fa fa-close'></i></button>
            </div>
        </div>
    );
};

export default Popups;
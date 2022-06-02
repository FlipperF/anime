import React from 'react';
import classes from './LoginForm.module.css'

import img from './2.jpg'
const LoginForm = () => {
    return (
        <div className={classes.content}>
            <div className={classes.imageBlock}>
                <img className={classes.formImg} src={img}/>
            </div>
            <div className={classes.formBlock}>
                <div className={classes.formContent}>
     
                        <h3>Авторизация на сайте</h3>
                        <form>
                            
                        </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
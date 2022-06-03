import React from 'react';
import classes from './LoginForm.module.css'

import img from './2_1.jpg'
const LoginForm = () => {
    return (
        <div className={classes.content}>
            <div className={classes.imageBlock}>
                <img className={classes.formImg} src={img}/>
            </div>
            <div className={classes.formBlock}>
                <div className={classes.formContent}>
                        <h3 className={classes.title}>Авторизация на сайте</h3>
                        <form className={classes.formBody}>
                            <div className={classes.inputFieldBlock}>
                                <div className={classes.border}>
                                    <input className={`${classes.inputField} login`} placeholder='E-mail:'></input>
                                </div>
                                <div className={classes.fieldIcon}><i className='fa fa-at'></i></div>
                            </div>

                            <div className={classes.inputFieldBlock}>
                                <div className={classes.border}>
                                    <input className={`${classes.inputField} login`} placeholder='password:' type="password"></input>
                                </div>
                                <div className={classes.fieldIcon}><i className='fa fa-lock'></i></div>
                            </div>

                            <button type="submit" className={classes.submitBtn}>Войти</button>

                        </form>
                        <div className={classes.supportBtn}>
                            <button>Забыли пароль?</button>
                            <button>Регистрация</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
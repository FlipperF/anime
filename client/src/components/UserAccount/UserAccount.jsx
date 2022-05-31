import React from 'react';
import AccountAutorized from './AccountAuthorized/AccountAutorized';
import AccountNotAuthorized from './AccountNotAuthorized/AccountNotAuthorized';
import classes from './UserAccount.module.css'

const UserAccount = () => {
    return (
        <div className={classes.accountBlock}>
            {/* <AccountNotAuthorized/> */}
            <AccountAutorized/>
        </div>
    );
};

export default UserAccount;
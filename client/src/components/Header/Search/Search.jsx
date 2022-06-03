import React from 'react';
import classes from './Search.module.css'

const Search = () => {
    return (
        <div className={classes.search}>
            <div className={classes.searchBlock}>
                <i className={`fa fa-search ${classes.searchBlock__icon}`} aria-hidden="true"></i>
                <input id="headerSearch" className={classes.searchBlock_input} placeholder='Поиск...'></input>
            </div>
        </div>
    );
};

export default Search;
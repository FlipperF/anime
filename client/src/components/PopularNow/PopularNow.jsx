import React from 'react';
import ItemCard from './components/ItemCard/ItemCard';
import classes from './PopularNow.module.css'

const PopularNow = () => {
    return (
        <div className={classes.block}>
            <div className={classes.slider}>
                <div className={classes.slideSection}>
                   <ItemCard/>
                   <ItemCard/>
                   <ItemCard/>
                   <ItemCard/>
                   <ItemCard/>
                   <ItemCard/>
                   <ItemCard/>
                   <ItemCard/>
                   <ItemCard/>
                   <ItemCard/>
                   <ItemCard/>
                   <ItemCard/>
                </div>
            </div>
        </div>
    );
};

export default PopularNow;
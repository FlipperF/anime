import React from 'react';
import classes from './ItemCard.module.css'
import parent from '../../PopularNow.module.css'

const ItemCard = () => {
    return (
        <div className={parent.item}>
            <div className={classes.content}>
                <div className={classes.mediaInfo}>
                    <div className={classes.image}>
                        <img src="https://nyaa.shikimori.one/system/animes/preview/20.jpg"></img>
                        <div className={classes.dark}></div>
                    </div>
                    <div className={classes.infoBlock}>
                        <div className={classes.infoItem}><span className={classes.ratingBlock}>9.1</span></div>
                        <div className={classes.infoItem}><span className={classes.seriesBlock}>5/12</span></div>
                    </div>
                </div>
               <div className={classes.titleInfo}>
                    <p className={classes.title}>Наруто: Ураганные хроники</p>
               </div>

            </div>
        </div>
    );
};

export default ItemCard;
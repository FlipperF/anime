import React from "react";
import classes from './AnimeCard.module.css'

const AnimeCard = (props) =>{

    console.log(props.data.status)
    let cardClass = '';
    if(props.data.status == 'complete'){
        cardClass = classes.complete + ' ' + classes.animeCard;
    }
    
    else if(props.data.status == 'whatch'){
        cardClass = classes.whatch + ' ' + classes.animeCard;
    }

    else{
        cardClass = classes.animeCard;
    }

    return(
        <a className={cardClass} href={props.data.href} key={props.data.id}>

            <img className={classes.animeImg} src={props.data.img}/>
            <p className={classes.animeName}>{props.data.title}</p>
            
            <div className={classes.animeInfo}>
                <div><span>{props.data.type}</span></div>
                <div><span>{props.data.year}</span></div>
            </div>
        </a>

    )
}

export default AnimeCard;
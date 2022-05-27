import React from "react";
import AnimeCard from "../AnimeCard/AnimeCard";
import classes from './DataList.module.css'

const DataList = ({data, title}) => {
    
    const listAnime = data.map((data) => 
        <AnimeCard data={data}/>
    );


    return(
        <div>
            <h2 className={classes.pageName}>{title}</h2>
            <div className={classes.dataList}>
                {listAnime}
            </div>
        </div>

    );
};

export default DataList;
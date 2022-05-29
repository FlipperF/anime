import React from "react";
import AnimeCard from "../AnimeCard/AnimeCard";
import classes from './DataList.module.css'

const DataList = ({data, title}) => {
    
    const request = async() => {
        //localhost:8000/anime

        try{
            const response = await fetch("http://localhost:8000/anime", {

                headers: {
                  "Content-Type": 'application/json',                   
                  "Access-Control-Allow-Origin": '*'
                }
            });
    
            const result = await response.json();
            console.log(result)
        }

        catch(e){
            console.log(e)
        }

    }

    

    const listAnime = data.map((data) => 
        <AnimeCard data={data}/>
    );


    return(
        <div>
            <h2 className={classes.pageName}>{title}</h2>
            <div className={classes.dataList}>
                {listAnime}
            </div>

            <button onClick={request}>Запрос</button>
        </div>

    );
};

export default DataList;
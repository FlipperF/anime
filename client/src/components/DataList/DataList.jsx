import React from "react";
import AnimeCard from "../AnimeCard/AnimeCard";
import classes from './DataList.module.css'

const DataList = ({data, title}) => {
    
    const request = async() => {
        fetch('http://localhost:8000/anime')
        .then(  
            function(response) {  
            if (response.status !== 200) {  
                console.log('Ошибка. Статус код: ' +  response.status);  
                return;
            }

            // Examine the text in the response  
            response.json().then(function(data) {  
                console.log(data);  
            });  
            }
        )  
        .catch(function(err) {  
            console.log('Fetch Error :-S', err);  
        });

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
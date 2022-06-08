import React from 'react';
import DataList from '../../DataList/DataList';
import PopularNow from '../../PopularNow/PopularNow';

const MainPage = () => {

    let anime = [{
        id: '1',
        title: 'Наруто',
        year: '2002',
        type: 'TV Serial',
        img: 'https://nyaa.shikimori.one/system/animes/preview/20.jpg',
        status: 'whatch',
        href:''
      },
      {
        id: '2',
        title: 'Наруто: Ураганные хроники 3 — Наследники воли огня',
        year: '2009',
        type: 'Фильм',
        img: 'https://nyaa.shikimori.one/system/animes/original/6325.jpg?1633690005',
        status: 'complete',
        href: ''
      },
      {
        id: '3',
        title: 'Наруто: Пересечение дорог',
        year: '2009',
        type: 'Спешл',
        img: 'https://moe.shikimori.one/system/animes/original/7367.jpg?1633690031',
        status: '',
        href: ''
      },
      {
        id: '4',
        title: 'Наруто: Спортивный фестиваль Конохи',
        year: '2004',
        type: 'Спешл',
        img: 'https://desu.shikimori.one/system/animes/original/2248.jpg?1633689983',
        status: '',
        href: ''
      }
        
      ];
      
      let manga = [{
        id: '1',
        title: 'Наруто',
        year: '2002',
        type: 'TV Serial',
        img: 'https://nyaa.shikimori.one/system/animes/preview/20.jpg',
        status: 'whatch',
        href:''
      },
      {
        id: '2',
        title: 'Наруто: Ураганные хроники 3 — Наследники воли огня',
        year: '2009',
        type: 'Фильм',
        img: 'https://nyaa.shikimori.one/system/animes/original/6325.jpg?1633690005',
        status: 'complete',
        href: ''
      },
      {
        id: '3',
        title: 'Наруто: Пересечение дорог',
        year: '2009',
        type: 'Спешл',
        img: 'https://moe.shikimori.one/system/animes/original/7367.jpg?1633690031',
        status: '',
        href: ''
      },
      {
        id: '4',
        title: 'Наруто: Спортивный фестиваль Конохи',
        year: '2004',
        type: 'Спешл',
        img: 'https://desu.shikimori.one/system/animes/original/2248.jpg?1633689983',
        status: '',
        href: ''
      }
        
      ];
      

    return (
        <div className='container'>
            {/* <DataList data={anime} title="Список аниме"/>
            <DataList data={manga} title="Список Манги"/> */}
            <PopularNow/>
        </div>
    );
};

export default MainPage;
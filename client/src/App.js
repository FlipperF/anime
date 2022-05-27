import AnimeCard from './components/AnimeCard/AnimeCard';
import DataList from './components/DataList/DataList';
import './style/App.css';

let anime = [{
  title: 'Наруто',
  year: '2002',
  type: 'TV Serial',
  img: 'https://nyaa.shikimori.one/system/animes/preview/20.jpg',
  status: 'whatch',
  href:''
},
{
  title: 'Наруто: Ураганные хроники 3 — Наследники воли огня',
  year: '2009',
  type: 'Фильм',
  img: 'https://nyaa.shikimori.one/system/animes/original/6325.jpg?1633690005',
  status: 'complete',
  href: ''
},
{
  title: 'Наруто: Пересечение дорог',
  year: '2009',
  type: 'Спешл',
  img: 'https://moe.shikimori.one/system/animes/original/7367.jpg?1633690031',
  status: '',
  href: ''
},
{
  title: 'Наруто: Спортивный фестиваль Конохи',
  year: '2004',
  type: 'Спешл',
  img: 'https://desu.shikimori.one/system/animes/original/2248.jpg?1633689983',
  status: '',
  href: ''
}
  
];

let manga = [{
  title: 'Наруто',
  year: '2002',
  type: 'TV Serial',
  img: 'https://nyaa.shikimori.one/system/animes/preview/20.jpg',
  status: 'whatch',
  href:''
},
{
  title: 'Наруто: Ураганные хроники 3 — Наследники воли огня',
  year: '2009',
  type: 'Фильм',
  img: 'https://nyaa.shikimori.one/system/animes/original/6325.jpg?1633690005',
  status: 'complete',
  href: ''
},
{
  title: 'Наруто: Пересечение дорог',
  year: '2009',
  type: 'Спешл',
  img: 'https://moe.shikimori.one/system/animes/original/7367.jpg?1633690031',
  status: '',
  href: ''
},
{
  title: 'Наруто: Спортивный фестиваль Конохи',
  year: '2004',
  type: 'Спешл',
  img: 'https://desu.shikimori.one/system/animes/original/2248.jpg?1633689983',
  status: '',
  href: ''
}
  
];


function App() {
  return (
    <div className="App">
      <DataList data={anime} title="Список аниме"/>
      <DataList data={manga} title="Список Манги"/>
    </div>
  );
}

export default App;

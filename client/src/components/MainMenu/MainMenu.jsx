import React from 'react';
import MenuList from './MenuList.json'
import classes from './MainMenu.module.css'

// Массив ключей
let menu = []

for (var key in MenuList) {
    menu.push(key)
}

// Карта ключей
const menuList = MenuList.map((menuItem) =>
    <li key={menuItem.id} className={classes.mainMenu__li}><a className={classes.mainMenu__li__link}>{menuItem.name}</a></li>
);

const MainMenu = () => {
    return (
        <div className={classes.menuBlock}>
             <ul className={classes.mainMenu}>
                {menuList}  
            </ul>
        </div>
    );
};

export default MainMenu;
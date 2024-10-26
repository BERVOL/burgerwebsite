import React from 'react'
import { Data } from '../helpers/Data.jsx';
import MenuItem from '../components/MenuItem.jsx';
import '../styles/Menu.css'



export const Menu = () => {
    return (
        <div className='menu'>
            <h1 className='menuTitle'>Kedi Burgerlerimiz</h1>
            <div className='menuList'>
                {Data.map((menuItem, key) => {
                    return (
                        <MenuItem
                            key={key}
                            image={menuItem.image}
                            name={menuItem.name}
                            content={menuItem.content}
                            price={menuItem.price}
                        />
                    )
                })}
            </div>
        </div>
    )
}

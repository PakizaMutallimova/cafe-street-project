import React, { useState } from 'react'
import style from './menu.module.css'
import datas from "../../data"
import Card from '../Card'


const Menu = () => {

    return (
        <div className={style.menuPlace}>
            {datas.map((dataItem) =>
                <Card product={dataItem} />
            )}
        </div>
    )
}

export default Menu
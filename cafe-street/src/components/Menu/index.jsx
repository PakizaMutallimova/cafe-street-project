import React, { useState } from 'react'
import useSWR from 'swr'
import style from './menu.module.css'
import datas from "../../data"

const Menu = () => {
    const [price, setprice] = useState(0)
    
    const data = datas.map(i => {
        const {name, image, count} = i
        return (name, image, count)
    })
    
    
    // console.log(count);

  return (
    <div className={style.menuPlace}>
        <div className={style.menuCards}>
            <div className={style.card}>
                <div className={style.cardShape}>
                    <img className={style.image} src="https://food-images.files.bbci.co.uk/food/recipes/tiktok_breakfast_42301_16x9.jpg" alt="" />
                    <div className={style.cardContext}>
                        <div className={style.nameAndPrice}>
                            <p>Sendwich</p>
                            <span>20$</span>
                        </div>
                        <div className={style.buyingButtons}>
                            <button className={style.cardBtn}>-</button>
                            <button className={style.cardBtn}>+</button>
                            <button className={style.cardBtn}>Order Now</button>
                            <span>{price}$</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={style.menuCards}>
            <div className={style.card}>
                <div className={style.cardShape}>
                    <img className={style.image} src="https://food-images.files.bbci.co.uk/food/recipes/tiktok_breakfast_42301_16x9.jpg" alt="" />
                    <div className={style.cardContext}>
                        <div className={style.nameAndPrice}>
                            <p>Sendwich</p>
                            <span>15$</span>
                        </div>
                        <div className={style.buyingButtons}>
                            <button className={style.cardBtn}>-</button>
                            <button className={style.cardBtn}>+</button>
                            <button className={style.cardBtn}>Order Now</button>
                            <span>{price}$</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={style.menuCards}>
            <div className={style.card}>
                <div className={style.cardShape}>
                    <img className={style.image} src="https://food-images.files.bbci.co.uk/food/recipes/tiktok_breakfast_42301_16x9.jpg" alt="" />
                    <div className={style.cardContext}>
                        <div className={style.nameAndPrice}>
                            <p>Sendwich</p>
                            <span>23$</span>
                        </div>
                        <div className={style.buyingButtons}>
                            <button className={style.cardBtn}>-</button>
                            <button className={style.cardBtn}>+</button>
                            <button className={style.cardBtn}>Order Now</button>
                            <span>{price}$</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Menu
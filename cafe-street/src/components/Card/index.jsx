import React, { useState } from 'react'
import { toast } from 'react-toastify'
import style from '../Menu/menu.module.css'

const Card = ({product}) => {
    const [active, setActive] = useState(true)
    const [price, setPrice] = useState(0)
    const [clickTime, setClickTime] = useState(0)
    const {name, image, count} = product


    function toBuy() {
        if (price !== 0) {
            toast.success('Order recieved')
        }
    }

    function decrementPrice() {
        if (price > 0) {
            setPrice(price - count)
        }
    }
    function collectPrice() {
        setClickTime(clickTime + 1)
    }
  return (
    <div className={style.menuCards}>
        <div className={style.card}>
            <div className={style.cardShape}>
                <img className={style.image} src={image} alt="" />
                <div className={style.cardContext}>
                    <div className={style.nameAndPrice}>
                        <p>{name}</p>
                        <span>{count}$</span>
                    </div>
                    <div className={style.buyingButtons}>
                        <button onClick={decrementPrice} className={style.cardBtn}>-</button>
                        <button onClick={collectPrice} className={style.cardBtn}>+</button>
                        <button onClick={toBuy} className={`${style.cardBtn} ${price==0&&style.passive}`}>Order Now</button>
                        <span>{clickTime * count}$</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
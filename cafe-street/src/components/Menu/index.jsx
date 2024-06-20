import React, { useState } from 'react'
// import useSWR from 'swr'
import style from './menu.module.css'
import datas from "../../data"

const Menu = () => {
    const [price, setPrice] = useState(0)
    
    const data = datas.map(i => {
        // const {name, image, count} = i
        return i

        // <div className={style.menuCards}>
        //     <div className={style.card}>
        //         <div className={style.cardShape}>
        //             <img className={style.image} src="${image}" alt="" />
        //             <div className={style.cardContext}>
        //                 <div className={style.nameAndPrice}>
        //                     <p>${name}</p>
        //                     <span>${count}$</span>
        //                 </div>
        //                 <div className={style.buyingButtons}>
        //                     <button className={style.cardBtn}>-</button>
        //                     <button className={style.cardBtn}>+</button>
        //                     <button className={style.cardBtn}>Order Now</button>
        //                     <span>{price}$</span>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    })

    const {name, image, count} = data[0]
    const {name:name1, image:image1, count:count1} = data[1]
    const {name:name2, image:image2, count:count2} = data[2]
    const {name:name3, image:image3, count:count3} = data[3]
    // console.log({name, name1, name2, name3});
    // console.log(setprice);

    function decrementPrice(params) {
        if (price > 0) {
            setPrice(price - count)
            
        }
    }
    function collectPrice() {
        setPrice(price + count)

    }

  return (
    <div className={style.menuPlace}>
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
                    <img className={style.image} src={image1} alt="" />
                    <div className={style.cardContext}>
                        <div className={style.nameAndPrice}>
                            <p>{name1}</p>
                            <span>{count1}$</span>
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
                    <img className={style.image} src={image2} alt="" />
                    <div className={style.cardContext}>
                        <div className={style.nameAndPrice}>
                            <p>{name2}</p>
                            <span>{count2}$</span>
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
                    <img className={style.image} src={image3} alt="" />
                    <div className={style.cardContext}>
                        <div className={style.nameAndPrice}>
                            <p>{name3}</p>
                            <span>{count3}$</span>
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
import React from 'react'
import "./style.css"

const Header = () => {
  return (
    <div>
        <div className="nav">
            <div className="logo">
                <img src="https://cafe-street-gamma.vercel.app/static/media/headerIcon.9ce34df13605bea89476bd70ff1b4eca.svg" alt="" />
            </div>
            <ul className='d-flex'>
                <li className='active'>About Us</li>
                <li>Our Projects</li>
                <li>Delivery</li>
            </ul>
        </div>
    </div>
  )
}

export default Header
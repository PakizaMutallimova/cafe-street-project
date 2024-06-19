import React from 'react'
import "./main.css"
import Menu from '../Menu'

const Main = () => {
  return (
    <>
        <div className='d-flex main'>
            <div className="content">
                <div className="text-content">
                    <h2>Enjoy Your <span>Cofee</span> before your activity</h2>
                    <p>Boost your productivity and build your mood with a glass of coffee in the morning</p>
                </div>
                <div className="buttons">
                    <button className="btn order-btn">Order Now</button>
                    <button className="btn">Feedback</button>
                </div>
            </div>
            <div className="side-photo">
                <img src="https://cafe-street-gamma.vercel.app/static/media/sectionImage.7db8e1eacf9c034507b6a09b89d5aa3e.svg" alt="" />
            </div>
        </div>
            <Menu/>
    </>
  )
}

export default Main
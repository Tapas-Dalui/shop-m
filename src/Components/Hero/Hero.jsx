import React from 'react'
import './Hero.css'
import hand_icon from '../../assets/hand_icon.png'
import { IoMdArrowRoundForward } from "react-icons/io";
import hero_img from '../../assets/hero_image.png'

function Hero() {
  return (
    <>
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hreo-hand-icon">
                        <p>New</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>collection</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-button">
                    <div>Latest Collection</div>
                    <IoMdArrowRoundForward className='arrow-icon'/>
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_img} alt="" />
            </div>
        </div>
    </>
  )
}

export default Hero

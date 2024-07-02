import React from 'react'
import './Hero.css'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_top from '../../assets/hero_top.jpg'


function Hero() {
    return (
        <>
            <div className="hero">
                <div className="banner-top">
                    <img src={hero_top} alt="" />
                </div>
                <div className="banner-bottom">
                    <img src={hero_banner} alt="" />
                </div>
            </div>
        </>
    )
}

export default Hero

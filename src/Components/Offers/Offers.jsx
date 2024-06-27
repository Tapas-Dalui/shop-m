import React from 'react'
import './Offers.css'
import exclusive_image from '../../assets/offers.jpg'

function Offers() {
  return (
    <>
        <div className="offers">
            <div>
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    </>
  )
}

export default Offers

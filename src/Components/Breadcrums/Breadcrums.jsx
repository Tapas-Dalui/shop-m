import React from 'react'
import './Breadcrums.css'
import { IoChevronForwardOutline } from "react-icons/io5";
function Breadcrums(props) {

    const {product} = props

  return (
    <>
        <div className="breadcrum">
            HOME <IoChevronForwardOutline />
            SHOP <IoChevronForwardOutline />{product.category}
            <IoChevronForwardOutline /> {product.name}
        </div>
    </>
  )
}

export default Breadcrums

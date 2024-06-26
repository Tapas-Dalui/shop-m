import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'


function ProductDisplay({product}) {

    const {
        addToCart,
    } = useContext(ShopContext)

    return (
        <>
            <div className="productdisplay">
                <div className="left">
                    <div className="image-list">
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                    </div>
                    <div className="image">
                        <img className='main-img' src={product.image} alt="" />
                    </div>
                </div>
                <div className="right">
                    <h1>{product.name}</h1>
                    <div className="stars">
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_dull_icon} alt="" />
                        <p>(122)</p>
                    </div>
                    <div className="prices">
                        <div className="new-price">${product.new_price}</div>
                        <div className="old-price">${product.old_price}</div>
                    </div>
                    <div className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eaque aliquam possimus, consequatur sapiente maxime labore dolorum perferendis optio alias aliquid omnis, nostrum voluptatum ad itaque voluptates, facere quidem nam?
                    </div>
                    <div className="product-size">
                        <h1>Select Size</h1>
                        <div className="sizes">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <button onClick={()=>{addToCart(product.id)}}>Add to cart</button>
                    <p className='category'><span>Category: </span>{product.category}</p>
                    <p className='category'><span>Tags: </span>Mordern, Latest</p>
                </div>
            </div>
        </>
    )
}

export default ProductDisplay

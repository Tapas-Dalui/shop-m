import React, { useContext } from "react";
import './CartItems.css'
import { ShopContext } from "../../Context/ShopContext";
import { ImCross } from "react-icons/im";

function CartItems() {
    const { all_product, cartItem, addToCart, removeFromCart,getTotalCartAmount } =
        useContext(ShopContext);

    return (
        <>
            <div className="cart-item">
                <div className="format-main">
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr />

                {
                    all_product.map((item) => {
                        if (cartItem[item.id] > 0) {
                            return (
                                <div>
                                    <div className="cart-format format-main">
                                        <img src={item.image} className="cart-icon" alt="" />
                                        <p>{item.name}</p>
                                        <p>${item.new_price}</p>
                                        <button className="quantity">{cartItem[item.id]}</button>
                                        <p>${item.new_price * cartItem[item.id]}</p>
                                        <ImCross onClick={() => { removeFromCart(item.id) }} className="cart-remove-icon"/>
                                        
                                    </div>
                                    <hr />
                                </div>
                            )
                        }
                        return null
                    })
                }

                <div className="cart-items-down">
                    <div className="cart-total">
                        <h1>Cart Totals</h1>
                        <div>
                            <div className="total-items">
                                <p>Sub Total</p>
                                <p>${getTotalCartAmount()}</p>
                            </div>
                            <hr />
                            <div className="total-items">
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>
                            <hr />
                            <div className="total-items">
                                <h3>Total</h3>
                                <h3>${getTotalCartAmount()}</h3>
                            </div>
                        </div>
                        <button>Proceed To Checkout</button>
                    </div>
                    <div className="promocode">
                       <p>If you have promocode, Please enter here</p> 
                        <div className="promo-box">
                            <input type="text" placeholder="Enter Code Here..." />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartItems;

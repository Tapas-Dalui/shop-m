import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

function Navbar() {

    const [menu, setMenu] = useState("Shop")
    const {getTotalCartItems} = useContext(ShopContext)
    return (
        <>
            <div className="navbar">
                <div className="nav-logo">
                    <img src={logo} alt="" />
                    <p>SHOP-m</p>
                </div>
                <ul className="nav-menu">
                    <li onClick={()=>{setMenu("Shop")}}> <Link to='/'>Shop</Link>  {menu=== "Shop"? <hr/>: <></> } </li>
                    <li onClick={()=>{setMenu("Mens")}}><Link to='/mens'>Mens</Link> {menu=== "Mens"? <hr/>: <></> } </li>
                    <li onClick={()=>{setMenu("Womens")}}><Link to='/womens'>Womens</Link> {menu=== "Womens"? <hr/>: <></> } </li>
                    <li onClick={()=>{setMenu("Kids")}}><Link to='/kids'>Kids</Link> {menu=== "Kids"? <hr/>: <></> } </li>
                </ul>
                <div className="nav-login-cart">
                    <Link to='/login'><button>Login</button></Link>
                    <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                    <div className="nav-cart-count">
                        {getTotalCartItems()}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar
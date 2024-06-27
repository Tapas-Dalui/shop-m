import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/Shop.png'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

function Footer() {
    const date = new Date()
    return (
        <>
            <div className="footer">
                <div className="footer-logo">
                    <img src={footer_logo} alt="" />
                    
                </div>
                <ul className="footer-links">
                    <li>Company</li>
                    <li>Products</li>
                    <li>Offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="footer-socials-icons">
                    <div className="footer-icons-container">
                        <FaWhatsapp className='icons'/>
                    </div>
                    <div className="footer-icons-container">
                        <FaFacebook className='icons'/>
                    </div>
                    <div className="footer-icons-container">
                        <FaInstagram className='icons' />
                    </div>
                    <div className="footer-icons-container">
                        <FaPinterest className='icons' />
                    </div>
                </div>
                <div className="footer-copyright">
                    <hr />
                    <p>Copyright &copy; {date.getFullYear()} - All Right Reserved</p>
                </div>
            </div>
        </>
    )
}

export default Footer

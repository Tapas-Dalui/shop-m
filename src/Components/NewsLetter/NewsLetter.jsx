import React from 'react'
import './NewsLetter.css'

function NewsLetter() {
    return (
        <>
            <div className="newsletter">
                <h1>Get Exclusive Offers on your Email</h1>
                <p>Subscribe to our news letter to stay updated</p>
                <div>
                    <input type="email" placeholder='Enter your Email'/>
                    <button>Subscribe</button>
                </div>
            </div>
        </>
    )
}

export default NewsLetter

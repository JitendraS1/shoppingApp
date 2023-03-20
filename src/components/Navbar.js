import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Navbar() {

    const items = useSelector((state) => state.cart)
    return (

        <div className='navbar'>
            <span className='logo'>🛒 𝕁𝕊 𝕄𝕒𝕣𝕥</span>
            <div>
                <Link className='navLink' to='/'>Home</Link>
                <Link className='navLink' to='/cart'>Cart</Link>
                <span className='cartCount'>
                    Cart Items : {items.length}
                </span>
            </div>
        </div>
    )
}


export default Navbar

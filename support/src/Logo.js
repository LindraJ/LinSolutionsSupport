import React from 'react'
import './Logo.css'
import logo from './icons8-customer-support-100.png'


const Logo = () => {
    return(
        <div className='flex h3'>
            <img src={logo} />
            <div className='flex justify-center items-center tc '>
                <h1>Lin Solutions Support</h1>
            </div>
        </div>
    )
}

export default Logo
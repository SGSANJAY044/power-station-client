import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='w-full h-20  p-10 '>
            <div className='w-full h-full flex items-center justify-center gap-32 '>
                <Link to='/user/home'>Home</Link>
                <Link to='/user/map'>Map</Link>
                <Link to='/user/about'>About</Link>
                <Link to='/user/contact'>contact</Link>
            </div>
        </div>
    )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='w-full h-20  p-10'>
            <div className='w-full h-full flex items-center justify-center gap-32 '>
                <Link to='/host/home'>Home</Link>
                <Link to='/host/map'>Map</Link>
                <Link to='/host/control'>Control</Link>
                <Link to='/host/contact'>Contact</Link>
            </div>
        </div>
    )
}

export default Navbar

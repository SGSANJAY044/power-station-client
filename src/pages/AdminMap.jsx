import React from 'react'
import Navbar from '../components/admin/Navbar'
import Map from '../components/user/Map'

function AdminMap() {
    return (
        <div className='w-full h-[80vh]'>
            <Navbar/>
            <Map/>
        </div>
    )
}

export default AdminMap

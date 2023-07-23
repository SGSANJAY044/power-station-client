import React from 'react'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
function Home() {
    const data=useSelector(state=>state.user.data)
    console.log(data)
    const {name,email,phone,password,created_at}=data
    return (
        <div className='h-80  bg-[#3e8fec] m-10 mx-20 rounded-2xl p-10 text-2xl flex flex-col justify-center gap-3'>
            <h1 className='font-bold text-4xl'>{name}</h1>
            <h1>{email}</h1>
            <h1>{phone}</h1>
            <h1>{created_at}</h1>
            <Link className='p-2 bg-white w-44 flex items-center justify-center rounded-2xl font-bold text-[#3e8fec] hover:bg-[#ffffff72] hover:text-white hover:outline-5' to='/user/map'>View Stations</Link>
        </div>
    )
}

export default Home

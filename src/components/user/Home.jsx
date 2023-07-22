import React from 'react'
import {useSelector} from 'react-redux'
function Home() {
    const data=useSelector(state=>state.user.data)
    console.log(data)
    const {name,email,phone,password,created_at}=data
    return (
        <div>
            <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{phone}</h1>
            <h1>{password}</h1>
            <h1>{created_at}</h1>
        </div>
    )
}

export default Home

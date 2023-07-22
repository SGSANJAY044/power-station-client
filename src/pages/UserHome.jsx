import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/user/Navbar'
import Home from '../components/user/Home'

function UserHome() {
    return (
    <div>
        <Navbar/>
        <Home/>
    </div>
    )
}

export default UserHome

import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import UserHome from './pages/UserHome'
import AdminHome from './pages/AdminHome'
import UserMap from './pages/UserMap'
import AdminControl from './pages/AdminControl'
import AdminMap from './pages/AdminMap'
import UserAbout from './pages/UserAbout'
import UserContact from './pages/UserContact'
import AdminContact from './pages/AdminContact'
import HostHome from './pages/HostHome'
import HostMap from './pages/HostMap'
import HostControl from './pages/HostControl'
import HostContact from './pages/HostContact'
function AllRoutes() {
    const token = localStorage.getItem("token");
    return (
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signin' element={<Signup/>}/>
            { token ? <>
            <Route path='/user/home' element={<UserHome/>}/>
            <Route path='/admin/home' element={<AdminHome/>}/>
            <Route path='/user/map' element={<UserMap/>}/>
            <Route path='/admin/control' element={<AdminControl/>}/>
            <Route path='/admin/map' element={<AdminMap/>}/>
            <Route path='/user/about' element={<UserAbout/>}/>
            <Route path='/user/contact' element={<UserContact/>}/>
            <Route path='/admin/contact' element={<AdminContact/>}/>
            <Route path='/host/home' element={<HostHome/>}/>
            <Route path='/host/map' element={<HostMap/>}/>
            <Route path='/host/control' element={<HostControl/>}/>
            <Route path='/host/contact' element={<HostContact/>}/>
            </>:<>Bad request</>
            }
        </Routes>
    )
}

export default AllRoutes

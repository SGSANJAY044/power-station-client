import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import car from '../assets/images/login.png'
import { useDispatch } from 'react-redux';
import { userAction } from '../reducers/user';
function Signup() {
    const dispatch=useDispatch()
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [phone,setPhone]=useState('');
    const [name,setName]=useState('');
    const handleSubmit=()=>{
        console.log("hi");
        axios.post('http://localhost:8088/api/user/signin', {
            name:name,
            email: email,
            password: password,
            phone:phone
          })
          .then(function (response) {
            console.log(response);
            dispatch(userAction.Adduser(response?.data?.user))
            if(response?.data?.user?.email===email){
                navigate('/home')
              }
        })
        .catch(function (error) {
            alert(error.response.data)
            console.log(error);
          });
          
    }
    return (
        <div className='flex w-screen h-screen overflow-y-hidden'>
        <div className=' w-1/2 h-full'>
            <img src={car} alt=""  className='my-32 absolute h-3/5'/>
            <div className='h-full w-1/3 bg-[#4461F2]'/>
        </div>
        <div className='flex w-1/2 h-full items-center justify-center'>
        <form >
           <input type="text" value={name} placeholder='Enter Name' onChange={e => setName(e.target.value)} className='bg-[#EAF0F7] text-xl px-10 py-3 my-4 rounded-lg w-full focus:outline-none' />
            <br/>
            <input type="text" value={email} placeholder='Email' onChange={e => setEmail(e.target.value)} className='bg-[#EAF0F7] text-xl px-10 py-3 my-4 rounded-lg w-full focus:outline-none'/>
            <br />
            <input type="text" value={password} placeholder='Password' onChange={e => setPassword(e.target.value)} className='bg-[#EAF0F7] text-xl px-10 py-3 my-4 rounded-lg focus:outline-none'/>
            <br/>
            <input type="text" value={phone}  placeholder='Phone' onChange={e => setPhone(e.target.value)} className='bg-[#EAF0F7] text-xl px-10 py-3 my-4 rounded-lg focus:outline-none' />
            <br />
            <input type="button" value="login"  onClick={handleSubmit} className='bg-[#4461F2] text-xl px-6 py-3 font-bold my-12 rounded-lg w-full text-white shadow-xl cursor-pointer hover:shadow-[#4461f280]'/>
            <Link className='text-[#4461F2] w-full text-center' to='/login'>new? register now</Link>
        </form>
        </div>
        </div>
    )
}

export default Signup

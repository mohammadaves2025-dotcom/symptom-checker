import React from 'react'
import { VscAccount } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { RiMenu2Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <div className='h-20 w-full bg-indigo-900 text-white flex items-center justify-between px-12'>
      <div onClick={()=> navigate('/')}>
        <h1 className='text-5xl'>MediFind</h1>
      </div>
      <div className='flex gap-5 text-2xl'>
        <VscAccount />
        <CiSearch />
        <RiMenu2Line />
        
      </div>
    </div>
  )
}

export default Navbar

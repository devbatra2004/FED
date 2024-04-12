import React from 'react'
import { Link } from 'react-router-dom'
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { BiSolidPlaylist } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import'./Navbar.css'
const Navbar = () => {
  return (
    <div className='h-[8vh] w-[100vw]'>
      <ul className='flex justify-around'>
        <Link to='/'>
        <li className="hover:scale-110 transition-all">
          <div className="text-2xl flex justify-center items-center">
          <GoHome />
          </div>
          <div className=' font-thin Navtext'>
          Home  
          </div>
          </li>
        </Link>
        <Link to='/search'>
        <li className="hover:scale-110 transition-all">
          <div className="text-2xl flex justify-center items-center">
          <CiSearch />
          </div>
          <div className=' font-thin Navtext'>
          Search  
          </div>
          </li>
        </Link>
        <Link to='/playlist'>
        <li className="hover:scale-110 transition-all">
          <div className="text-2xl flex justify-center items-center">
          <BiSolidPlaylist />
          </div>
          <div className=' font-thin Navtext'>
          PlayList  
          </div>
          </li>
        </Link>
        <Link to='/LoginSignup/'>
        <li className="hover:scale-110 transition-all">
          <div className="text-2xl flex justify-center items-center">
          <BiUser />
          </div>
          <div className=' font-thin Navtext'>
          Profile  
          </div>
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar

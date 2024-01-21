import React from 'react'
import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
import profilePic from '../assets/profile_image_default.png'

export default function Header() {

    const {currentUser} = useSelector((state) => state.user)

  return (
    <header className='bg-cyan-100 shadow-md'>

        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to = '/'> 
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-slate-500'>Home</span>
                <span className='text-slate-800'>Harbor</span>
            </h1>
            </Link>

            <form className='bg-white p-3 rounded-lg flex items-center'>
                <input type='text' placeholder='Search...' 
                className='bg-transparent focus:outline-none w-24 sm:w-64'
                />
                <FaSearch className='text-slate-600'/>
            </form>

            <ul className='flex gap-5 '>
                <Link to='/'>
                <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer font-semibold'> Home </li>
                </Link>
                <Link to='/about'>
                <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer font-semibold'>About</li>
                </Link>
                
                <Link to='/profile'>

                    {currentUser ? (
                        <img  className='rounded-full h-8 w-8 ml-3' src={profilePic} alt ='profile'/>
                    ) : (
                    <li className='text-slate-700 hover:underline cursor-pointer font-semibold'>
                        Sign In</li>
                    )
                }
                
                </Link>
            </ul>

        </div>
        
    </header>
  )
}

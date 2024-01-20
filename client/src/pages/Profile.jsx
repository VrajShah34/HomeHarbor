import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
  const {currentUser} = useSelector((state) => state.user);

  return (
    <div className='p-3 max-w-lg  mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'> Profile</h1>
      <form className='flex flex-col gap-4'>
          <img src = {currentUser.avatar} alt='profile' className='rounded-full h-24 w-24 object-cover self-center mt-2'/>
          <input type='text' placeholder='Username' className='border p-3 rounded-lg' id='username'/>
          <input type='email' placeholder='email' className='border p-3 rounded-lg' id='email'/>
          <input type='text' placeholder='password' className='border p-3 rounded-lg' id='password'/>
          <button className='bg-slate-700 text-white rounded-lg p-3 uppercase
          hover:opacity-90 disabled:opacity-80 mt-7'>Update</button>

      </form>

      <div className='flex justify-between mt-7'>
        <span className='text-red-600 cursor-pointer font-semibold' >Delete Account</span>
        <span className='text-red-600 cursor-pointer font-semibold'>Sign Out</span>
      </div>

    </div>

  )
}

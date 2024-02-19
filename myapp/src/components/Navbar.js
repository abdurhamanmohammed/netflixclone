import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='absolute w-full p-4 flex items-center justify-between z-50'><Link to="/" ><h1 className='uppercase text-red-600 font-sans-bold cursor-pointer text-5xl font-bold'>netflix</h1></Link>
    <div>
        <Link to="/login">
            <button className='capitalize pr-4'>Login</button>
        </Link>
        <Link to="/signup">
            <button className='capitalize bg-red-600 px-6 py-2 rounded cursor-pointer'>Sign up</button>
        </Link>
    </div>
    </div>
  )
}

export default Navbar
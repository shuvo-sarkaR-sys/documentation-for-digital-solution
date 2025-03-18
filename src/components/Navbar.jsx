import React from 'react'
import img1 from '../assets/img1.png'
const Navbar = () => {
  return (
    <div className='flex xl:hidden justify-between mx-10 h-32'>
       <img src={img1} alt="" />
       <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>
</button>
    </div>
  )
}

export default Navbar

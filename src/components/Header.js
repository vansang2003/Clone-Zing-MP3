import React from 'react'
import icons from '../ultis/icons'
import Search from './Search'

const {HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight} = icons

const Header = () => {
  return (
    <div className=' w-full flex justify-between items-center'>
        <div className='flex gap-6 w-full items-center'>
            <div className='flex gap-6 text-gray-500'>
              <span className='cursor-pointer'><HiOutlineArrowNarrowLeft size={24}/></span>
              <span className='cursor-pointer'><HiOutlineArrowNarrowRight size={24}/></span>
            </div>
            <div className='w-1/2'>
               <Search/>
            </div>
        </div>
        <div>
           Login
        </div>
    </div>
  )
}

export default Header
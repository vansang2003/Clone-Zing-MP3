import React from 'react'
import icons from '../ultis/icons'

const { GoSearch } = icons

const Search = () => {
  return (
    <div className='w-full flex items-center '>
        <span className='h-10 pl-4 flex items-center justify-center bg-[#DDF4F4]  rounded-l-[20px] text-gray-500 cursor-pointer'>
            <GoSearch size={22}/>
        </span>
        <input 
            type='text'
            placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát,...'
            className='w-full h-10 outline-none text-gray-500 bg-[#DDF4F4] px-4 py-2 rounded-r-[20px]'
        />
    </div>
  )
}

export default Search
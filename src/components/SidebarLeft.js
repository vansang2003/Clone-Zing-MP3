import React from 'react'
import logo from "../assets/logo.svg"
import { sidebarMenu } from '../ultis/menu'
import { NavLink } from 'react-router-dom'

const notActiveStyle = 'py-2 px-[25px] text-[14px] text-[#32323D] flex gap-[12px] items-center'
const activeStyle = 'py-2 px-[25px] text-[14px] text-[#0F7070] flex gap-[12px] items-center'

const SidebarLeft = () => {
  return (
    <div className='flex flex-col bg-[#DDE4E4]'>
      <div className='w-full h-[70px] py-[15px] px-[25px] flex items-center justify-start '>
        <img src={logo} alt="logo" className='w-[120px] h-10'/> 
      </div>
      <div className='flex flex-col'>
        {sidebarMenu.map((item) => (
          <NavLink
          to={item.path}
          key={item.path}
          end={item.end}
          className={({isActive}) => 
            isActive ? activeStyle : notActiveStyle
          }
        >
          {item.icon}
          <span>{item.text}</span>
        </NavLink>
        ))}
      </div>
    </div>
  )
}

export default SidebarLeft
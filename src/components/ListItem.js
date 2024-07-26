import React, { memo } from 'react'
import icons from "../ultis/icons"
import moment from 'moment'

//truyen props phai de memo de tranh re render component
const ListItem = ({ songData }) => {
    // console.log(songData)
    const { CiMusicNote1 } = icons
    return (
        <div className='flex justify-between items-center p-[10px] border-t border-[rgba(0,0,0,0.05)] hover:bg-[#DDF4F4] cursor-pointer'>
            <div className='flex items-center gap-3 flex-1'>
               <span><CiMusicNote1/></span>
               <img src={songData?.thumbnail} alt='thumbnail' className='w-10 h-10 object-cover rounded-md '/>
               <span className='flex flex-col '>
                    <span className='text-sm font-semibold'>{ songData?.title?.length > 30 ? `${songData?.title?.slice(0, 30)}...` : songData?.title }</span> 
                    <span>{songData?.artistsNames}</span>
               </span>
            </div>
            <div className='flex-1 flex justify-center '>
            { songData?.album?.title?.length > 30 ? `${songData?.album?.title?.slice(0, 30)}...` : songData?.album?.title }
                {/* {songData?.album?.title} */}
            </div>
            <div className='flex-1 flex justify-end'>
               {moment.utc(songData?.duration*1000).format('mm:ss')}
            </div>
        </div>
    )
}

export default memo(ListItem)
import React, { memo } from 'react'
import { ListItem } from "./"
import icons from '../ultis/icons'
import moment from 'moment'

//List có S là listSong
//List khong s là listItem
const { BsDot } = icons

const ListSong = ({songs, totalDuration}) => {
    // console.log({songs, totalDuration})
  return (
    <div className='w-full flex flex-col text-xs text-gray-600'>
        <div className='flex justify-between items-center p-[10px] font-semibold'>
           <span>BÀI HÁT</span>
           <span>ALBUM</span>
           <span>THỜI GIAN</span>
        </div>
        <div className='flex flex-col'>
           {songs?.map((item) => (
            <ListItem key={item.encodeId} songData={item}/>
           ))}
        </div>
        <span className='flex items-center gap-1 py-[10px] border-t border-[rgba(0,0,0,0.05)] '>
          <span>{`${songs?.length} bài hát`}</span>
          <BsDot/>
          <span>{moment.utc(totalDuration * 1000).format('HH:mm:ss')}</span>
        </span>
    </div>
  )
}

export default memo(ListSong)
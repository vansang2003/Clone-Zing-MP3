import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import * as apis from "../apis";
import icons from "../ultis/icons";

const {
  CiHeart,
  FaHeart,
  HiOutlineDotsHorizontal,
  IoRepeatOutline,
  MdSkipNext,
  MdSkipPrevious,
  PiShuffle,
  IoIosPause,
  BsPlayFill
} = icons;

const Player = () => {
  const audioElement = new Audio('')
  // console.log(audioElement);
  const { currentSongId, isPlaying } = useSelector((state) => state.music);
  // console.log(isPlaying);
  // console.log(currentSongId);
  const [songInfo, setSongInfo] = useState(null);
  // const [isPlaying, setIsPlaying] = useState(false);
  const [source, setSource] = useState(null)
 

  useEffect(() => {
    const fetchDetailSong = async () => {
      const [res1, res2] = await Promise.all([
          apis.apiGetDetailSong(currentSongId),
          apis.apiGetSong(currentSongId)
      ])
      if (res1.data.err === 0) {
          setSongInfo(res1.data.data)
      }
      if (res2.data.err === 0) {
          setSource(res2.data.data['128'])
      }
    }

    fetchDetailSong();
  }, [currentSongId]);

  // useEffect(() => {

  // },[currentSongId]);

  const handleTogglePlay = () => {
    // setIsPlaying(pre => !pre)
  }

  return (
    <div className="h-full bg-main-400 px-5 flex ">
      <div className="w-[30%] flex-auto flex items-center gap-3">
        <img
          src={songInfo?.thumbnail}
          alt="thumbnail"
          className="w-16 h-16 object-cover rounded-md"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-sm text-gray-700">
            {songInfo?.title}
          </span>
          <span className="text-xs text-gray-500">
            {songInfo?.artistsNames}
          </span>
        </div>
        <div className="flex gap-4 pl-2">
          <span className="cursor-pointer">
            <CiHeart size={16} />
          </span>
          {/* <span><FaHeart/></span> */}
          <span className="cursor-pointer">
            <HiOutlineDotsHorizontal size={16} />
          </span>
        </div>
      </div>

      <div className="w-[40%] flex-auto flex  flex-col items-center justify-center gap-2 py-2">
        <div className="flex gap-8 justify-center items-center">
          <span title="Bật phát ngẫu nhiên" className="cursor-pointer"><PiShuffle size={24}/></span>
          <span className="cursor-pointer"><MdSkipPrevious size={24}/></span>
          <span 
            className="p-1 border border-gray-700 rounded-full cursor-pointer hover:text-main-500"
            onClick={handleTogglePlay}
            >
            {isPlaying ? <IoIosPause size={30}/> : <BsPlayFill size={30}/>}
           </span>
          <span className="cursor-pointer"><MdSkipNext size={24}/></span>
          <span title="Bật phát lại tất cả" className="cursor-pointer"><IoRepeatOutline size={24}/></span>
        </div>
        <div>Progress</div>
      </div>

      <div className="w-[30%] flex-auto">Volumn</div>
    </div>
  );
};

export default Player;

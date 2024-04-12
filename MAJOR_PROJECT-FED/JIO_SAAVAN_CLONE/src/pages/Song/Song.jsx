import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import songs from '../../data/songs'
import { useContext } from 'react'
import Context from '../../pages/context/context'
import { IoPlayOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { AddSong } from '../playlist/PlaylistSongSlice'
import { useSelector, useDispatch } from 'react-redux'
import { MdOutlinePlaylistAdd } from "react-icons/md";

const Song = () => {
  const dispatch=useDispatch();
  const {currentSong,isPlaying,playMusic}=useContext(Context)
    const params=useParams();
    const [song,setSong]=useState(songs.find(item=>item.id==params.songId))
    console.log(song)
  return (
    <div className='w-scren h-screen md:flex-row md:justify-center md:items-start flex flex-col items-center'>
      <div className='md:w-[30%] w-[40%] '>
      <img src={song.img} alt="" className=' object-contain'  />
      </div>
      <div className='flex flex-col my-5 lg:w-[50vw]  h-[32%] lg:pl-[3%] lg:justify-center'>
      <div className={` text-3xl w-full flex lg:justify-start justify-center ${currentSong&&currentSong.id==song.id?"text-cyan-600":"text-black"}`}>
        {song.name}
      </div>
      <div className=' text-xl w-full lg:justify-start flex justify-center'>
        
        <Link to={`/Album/${song.album.id}`}>{song.album.name}</Link >&nbsp; by &nbsp;<Link to={`/artist/${song.singer.id}`}>{song.singer.name}</Link>
      </div>
      <div onClick={()=>playMusic(song)} className='flex w-full justify-center my-8'>
      <IoPlayOutline size={50} className='hover:bg-[#228579] transition-all  bg-[#2bc5b4] text-white rounded-full p-2'/>
      </div>
      <div onClick={()=>dispatch(AddSong(song))}><MdOutlinePlaylistAdd className='hover:scale-110' size={30}/></div>
      </div>
    </div>
  )
}

export default Song

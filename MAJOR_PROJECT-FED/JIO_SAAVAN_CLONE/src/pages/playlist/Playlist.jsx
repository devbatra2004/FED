import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IoPlayOutline } from "react-icons/io5";
import { removeSong } from './PlaylistSongSlice';
import Context from '../../pages/context/context'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { MdOutlinePlaylistRemove } from "react-icons/md";
const Playlist = () => {
    const dispatch=useDispatch()
    const {currentSong,isPlaying,playMusic,setPlay}=useContext(Context)
    const playList=useSelector(state=>state.Playlist.AddedSongs)
  
  return (
    <div>
        <div className='text-2xl text-stone-800 w-screen flex justify-center items-center'>Your PlayList</div>
       <div className='AlbumSongs'>
         {playList?playList.map((item,index) => <div key={item.id} className='AlbumSongCont ' >
            <div className='indexOfSong relative ' >{index+1}
            <div  onClick={()=>{playMusic(item);setPlay()}} className='AlbumPlay absolute -top-1 -left-2 hidden' id={item.id}>
          <IoPlayOutline size={30} className='hover:bg-[#228579] transition-all  bg-[#2bc5b4] text-white rounded-full p-1'/>
          </div>
            </div>
          
            <div className='text-singers'>
            <div className='singer-album'>
            <Link to={`/song/${item.id}`}><div className={` ${currentSong&&currentSong.id==item.id?'AlbumSinger text-[#2BC5B4]':'text-black'}`} >{item.name}</div></Link>
            <Link to={`/album/${item.album.id}`}><div className='SongAlbumName'>{item.album.name}</div></Link>
            </div>
            <Link to={`/artist/${item.singer.id}`}><div className='AlbumSongSinger'>{item.singer.name}</div></Link>
            </div>
            <div onClick={()=>dispatch(removeSong(item.id))}><MdOutlinePlaylistRemove className='hover:scale-100' size={30}/></div>
          </div>
        ): <div className='text-red-600 text-2xl sm:text-3xl'>"No Song Added In Playlist"</div> }
         </div>
    </div>
  )
}

export default Playlist

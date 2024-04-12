import React,{useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import Albums from  '../../data/Albums'
import Songs from '../../data/songs' 
import Context from '../context/context'
import { IoPlayOutline } from "react-icons/io5";
import { useContext } from 'react'
import { AddSong } from '../playlist/PlaylistSongSlice'
import { useSelector, useDispatch } from 'react-redux'
import { MdOutlinePlaylistAdd } from "react-icons/md";
import './Album.css'
const Album = () => {
  const dispatch=useDispatch()
  const {currentSong,playMusic} =useContext(Context)
  const params=useParams()
  const[album,setAlbum]=useState(Albums.find(item=>item.id==params.albumId))
  const [songs,setSongs]=useState(Songs.filter(item=>album&&item.album.id==album.id))
    return (

    <div >
      {album?
      <div className='ContAlbum'>
        <div className='AlbumData'>
         <div className='ContMainImgCont rounded-[10px] '><img src={album.img} alt="" /></div>
         
         <div className='AlbumDataAndPlay'>
         <div className='AlbumDataName'>{album.name}</div>
         <div className='AlbumDataSinger'>By {album.singer.name}</div>
         <div onClick={()=>playMusic(songs[0])} className='AlbumPlay '>
          <IoPlayOutline size={50} className='hover:bg-[#228579] transition-all  bg-[#2bc5b4] text-white rounded-full p-2'/>
          </div>
          </div>


        </div>
         <div className='AlbumSongs'>
         {songs.map((item,index) => <div key={item.id} className='AlbumSongCont ' >
            <div className='indexOfSong relative ' >{index+1}
            <div  onClick={()=>playMusic(item)} className='AlbumPlay absolute -top-1 -left-2 hidden' id={item.id}>
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
            <div onClick={()=>dispatch(AddSong(item))}><MdOutlinePlaylistAdd className='hover:scale-110' size={30}/></div>
          </div>
        )}
         </div>
      </div>
      : <div className='flex sm:text-6xl text-4xl text-red-700 w-full h-full justify-center items-center'>"No Album found"</div> }
    </div>
  )
}

export default Album


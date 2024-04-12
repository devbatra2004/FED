import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Artist from '../../data/Artist'
import Albums from '../../data/Albums'
import Songs from '../../data/songs'
import { IoPlayOutline } from "react-icons/io5";
import Context from '../context/context'
import { useContext } from 'react'
import { AddSong } from '../playlist/PlaylistSongSlice'
import { useSelector, useDispatch } from 'react-redux'
import { MdOutlinePlaylistAdd } from "react-icons/md";
const Singer = () => {
  const dispatch=useDispatch()
  const {currentSong,playMusic} =useContext(Context)
  const params = useParams()
  const [artist, setArtist] = useState(Artist.find(item => item.id == params.artistId))
  const [songs, setSongs] = useState(Songs.filter(item => item.singer.id == artist.id))
  const [albums, setAlbums] = useState(Albums.filter(item => item.singer.id == artist.id))
  const [show, setShow] = useState(0)
  return (
    <div>
      <div>
      <div className='AlbumData'>
         <div className='ContMainImgCont '><img src={artist.img} alt="" className='rounded-full' /></div>
         
         <div className='AlbumDataAndPlay'>
         <div className='AlbumDataName '>{artist.name}</div>
         <div onClick={()=>playMusic(songs[0])} className='AlbumPlay '>
          <IoPlayOutline size={50} className='hover:bg-[#228579] transition-all  bg-[#2bc5b4] text-white rounded-full p-2'/>
          </div>
          </div>


        </div>
        
        <div className='w-[80vw] border-b-black border-b h-[10vh] items-center flex pl-[10px] mx-auto'>
           <ul className='flex gap-6'>
          <li onClick={() => setShow(0)} className='hover:cursor-pointer' >Songs</li>
          <li onClick={() => setShow(1)} className='hover:cursor-pointer'>Albums</li>
        </ul>
        </div>

        {show == 0 ?  <div className='AlbumSongs'>
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
         </div> : <div className='mx-[10vw] my-[2vh]'>
         {albums.map(item=> <div key={item.id} className='flex flex-col  w-[150px] justify-center items-center'>
             <Link to={`/album/${item.id}`} > <div className=' rounded overflow-hidden'><img src={item.img} alt="" /></div></Link>
                <div>
                  <Link to={`/album/${item.id}`}>  <div className='text-sm  w-[150px] overflow-hidden text-nowrap  text-center text-ellipsis h-[20px] '>{item.name}</div></Link>
                  <Link to={`/artist/${item.singer.id}`}><div className='text-xs w-full  flex justify-center items-center'>{item.singer.name}</div></Link>
                </div>
             </div> )}
        </div>}
      </div>
    </div>
  )
}

export default Singer

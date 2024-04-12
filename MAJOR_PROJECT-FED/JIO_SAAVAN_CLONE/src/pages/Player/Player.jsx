import React, { useEffect, useRef } from 'react'
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { IoVolumeMedium } from "react-icons/io5";
import './Player.css'
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import VolumeControl from './VolumeControl';
import Context from '../context/context'
import { useContext } from 'react'
const Player = () => {
  const playRef=useRef(null);
  const {currentSong,playNext,playPrev,isPlaying,playMusic}=useContext(Context)
  useEffect(()=>{
     if(currentSong)
     {
      const audioElement=currentSong.audio;
      const handelTimeUpdate=()=>{
        const duration=Number(currentSong.time)
        const currentTime=audioElement.currentTime
        const newTiming=(currentTime/duration)*100
        playRef.current.value=newTiming
      }
      const handelSongEnd=()=>playNext();

      audioElement.addEventListener("timeupdate",handelTimeUpdate)
      audioElement.addEventListener("ended",handelSongEnd)
      return ()=>{
        audioElement.removeEventListener("timeupdate",handelTimeUpdate)
        audioElement.removeEventListener("ended",handelSongEnd)
      }
     }
  })
  const handelProgressChange=(event)=>{
            const newPercentage=parseFloat(event.target.value)
            const newTime=(newPercentage/100)*Number(currentSong.time)
            currentSong.audio.currentTime=newTime
  }
  return ( 
    <div className='h-[12vh] flex flex-col'>
      <input type="range" 
      min={0} 
      max={100} 
      step='0.1' 
      value={0} 
      ref={playRef}
      onChange={handelProgressChange}
      className='w-full h-[5px] text-green-400 range' />
<div className='flex justify-between mx-3'>
      <div className='flex justify-start items-center gap-3 lg:[30vw]'>
         <div className='w-[50px] h-[50px] rounded overflow-hidden '>
            <img src={currentSong&&currentSong.img} alt="" />
        </div>
        <div className=''>
            <div className='' >{currentSong&&currentSong.name}</div>
            <div className='text-xs text-gray-500' >{currentSong&&currentSong.singer.name}</div>
        </div>
    </div>
    <div className='flex items-center text-2xl gap-2'>
    <MdSkipPrevious className='text-3xl' onClick={()=>playPrev()}/>   {isPlaying?<FaPause onClick={()=>playMusic(currentSong)} size={30}/>:<FaPlay onClick={()=>playMusic(currentSong)} size={25}/>} <MdSkipNext className='text-3xl' onClick={()=>playNext()}/>
        </div>
    <div className=' items-center text-3xl lg:flex  hidden relative sound'><div className='hidden'><VolumeControl /></div> <IoVolumeMedium /></div>
    </div>
    </div>
  )
}

export default Player

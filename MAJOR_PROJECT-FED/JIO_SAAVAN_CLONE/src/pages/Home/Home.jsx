import React, { useState,useMemo } from 'react'
import songs from '../../data/songs'
import Artist from '../../data/Artist'
import Slider from '../Reusable/Slider'
const Home = () => {
  const [trendingSongs,setTrendingSongs]=useState(useMemo(()=>songs.filter((item,index)=>index<=19&&item.trending)))
  const [newSongs,setNewSongs]=useState(useMemo(()=>songs.filter((item,index)=>index<=19&&item.new)))
  const [topArtist,setTopArtist]=useState(useMemo(()=>Artist.filter((item,index)=>index<=8&&item.top)))
  return (
    <div>
      <div className='my-5'>
        <div className='text-xl px-5 py-3 font-semibold text-gray-700 w-full lg:w-[78vw] mx-auto'>Trending Now</div>
      <Slider data={trendingSongs} type={true}/>
      </div>
      <div className='my-5'>
        <div className='text-xl px-5 py-3 font-semibold text-gray-700 w-full lg:w-[78vw] mx-auto'>New Released</div>
      <Slider data={newSongs} type={true}/>
      </div>
      <div className='my-5'>
        <div className='text-xl px-5 py-3 font-semibold text-gray-700 w-full lg:w-[78vw] mx-auto'>New Released</div>
      <Slider data={topArtist} type={"Artist"}/>
      </div>
    </div>
  )
}

export default Home

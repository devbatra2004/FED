import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Search } from './SearchSlice'
import { FiSearch } from "react-icons/fi";
import { Link } from 'react-router-dom';
import './Searched.css'
const Searched = () => {
  const dispatch=useDispatch()
  const [search,setSearch]=useState("")
  const GoSearch=()=>{
    if(search.trim().length!=0)
    {
      dispatch(Search(search))
    }
  }
  const results=useSelector(state=>state.Search.result)
  const  handleChange=(e)=>{
    setSearch(e.target.value)
  }
  console.log(results)
  return (
    <div className='w-screen'>
        <div className=' w-screen flex justify-center'>
        <div className='flex w-[40vw] h-[8vh] hover:scale-105 search rounded-3xl'><button className='border border-white rounded-s-full border-e-0 p-4' onClick={GoSearch}><FiSearch size={20} /></button><input className=' w-5/6 bg-inherit border border-white border-s-0 rounded-e-full outline-none  ' type="text" onKeyUp={(e)=>e.key=="Enter"&&GoSearch()}  value={search} onChange={(e)=>{handleChange(e); GoSearch()}}  /></div>
        </div>
        <div>
          <div >
          <div className='w-screen m-[2vw] text-xl'>
            Songs
          </div>
          <div className='flex flex-wrap w-screen gap-[2vw] m-[2vw]'>
          {results.song.map(item=> <div key={item.id} className='flex flex-col  w-[150px] justify-center items-center'>
             <Link to={`/song/${item.id}`} > <div className=' rounded overflow-hidden'><img src={item.img} alt="" /></div></Link>
                <div>
                  <Link to={`/song/${item.id}`}>  <div className='text-sm  w-[150px] overflow-hidden text-nowrap  text-center text-ellipsis h-[20px] '>{item.name}</div></Link>
                  <Link to={`/artist/${item.singer.id}`}><div className='text-xs w-full  flex justify-center items-center'>{item.singer.name}</div></Link>
                </div>
             </div> )}
          </div>
          </div>
          <div>
            <div  className='w-screen m-[2vw] text-xl'>Album</div>
          <div className='flex flex-wrap w-screen gap-[2vw] m-[2vw]'>
          {results.album.map(item=> <div key={item.id} className='flex flex-col  w-[150px] justify-center items-center'>
             <Link to={`/album/${item.id}`} > <div className=' rounded overflow-hidden'><img src={item.img} alt="" /></div></Link>
                <div>
                  <Link to={`/album/${item.id}`}>  <div className='text-sm  w-[150px] overflow-hidden text-nowrap  text-center text-ellipsis h-[20px] '>{item.name}</div></Link>
                  <Link to={`/artist/${item.singer.id}`}><div className='text-xs w-full  flex justify-center items-center'>{item.singer.name}</div></Link>
                </div>
             </div> )}
          </div>
          </div>
          <div>
            <div  className='w-screen m-[2vw] text-xl'>
              Artist
            </div>
          <div className='flex flex-wrap w-screen gap-[2vw] m-[2vw]'>
          {results.singer.map(item=> <div key={item.id} className='flex flex-col  w-[150px] justify-center items-center'>
             <Link to={`/artist/${item.id}`} > <div className=' rounded-full overflow-hidden'><img src={item.img} alt="" /></div></Link>
              <div>
              <Link to={`/artist/${item.id}`}><div className='text-ms w-full  flex justify-center items-center'>{item.name}</div></Link>
              </div>
             </div> )}
          </div>
          </div>
        </div>
    </div>
  )
}

export default Searched

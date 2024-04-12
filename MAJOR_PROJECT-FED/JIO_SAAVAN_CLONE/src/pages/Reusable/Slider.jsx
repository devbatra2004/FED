import React, { useRef } from 'react'
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Slider = ({data,type}) => {
  const scrollRef=useRef(null)
 const scrollRight=()=>{
  scrollRef.current.scrollLeft+=500;
 }
 const scrollLeft=()=>{
  scrollRef.current.scrollLeft-=500;
 }
  return (
    <div className='flex justify-center items-center gap-2'>
        <FaChevronLeft className='text-3xl text-gray-600 hover:scale-125 transition-all duration-500 ease-in-out cursor-pointer hidden md:block' onClick={scrollLeft}/>
       {type!="Artist"? <div className='grid grid-rows-2 grid-flow-col-dense  w-full lg:w-[78vw] px-5 gap-4 overflow-x-scroll scroll-hide' ref={scrollRef}>
             {data.map(item=> <div key={item.id} className='flex flex-col  w-[150px] justify-center items-center'>
             <Link to={type?`song/${item.id}`:`album/${item.id}`} > <div className=' rounded overflow-hidden'><img src={item.img} alt="" /></div></Link>
                <div>
                  <Link to={type?`song/${item.id}`:`album/${item.id}`} >  <div className='text-sm  w-[150px] overflow-hidden text-nowrap  text-center text-ellipsis h-[20px] '>{item.name}</div></Link>
                  <Link to={`artist/${item.singer.id}`}><div className='text-xs w-full  flex justify-center items-center'>{item.singer.name}</div></Link>
                </div>
             </div> )}
        </div>
      : <div className='grid grid-rows-1 grid-flow-col-dense  w-full lg:w-[78vw] px-5 gap-4 overflow-x-scroll scroll-hide' ref={scrollRef}>
       {data.map(item=> <div key={item.id} className='flex flex-col  w-[150px] justify-center items-center'>
             <Link to={`/artist/${item.id}`} > <div className=' rounded-full overflow-hidden'><img src={item.img} alt="" /></div></Link>
              <div>
              <Link to={`/artist/${item.id}`}><div className='text-ms w-full  flex justify-center items-center'>{item.name}</div></Link>
              </div>
             </div> 
            )}
 </div> 
      }

        <FaChevronRight onClick={scrollRight} className='text-3xl text-gray-600 hover:scale-125 transition-all duration-500 ease-in-out cursor-pointer hidden md:block'/>
    </div>
  )
}

export default Slider

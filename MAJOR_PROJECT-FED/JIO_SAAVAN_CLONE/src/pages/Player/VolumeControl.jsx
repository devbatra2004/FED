import React from 'react'

const VolumeControl = () => {
  return (
    <div className='w-[80px] h-4  flex absolute -rotate-90 px-2 bottom-[65px] -right-7 shadow-md  rounded-lg bg-white '>
      <input type="range" min={0} max={100} step='0.1' value={0} className='w-full h-[5px] text-green-400 range m-auto' />
    </div>
  )
}

export default VolumeControl

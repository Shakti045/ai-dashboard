import React from 'react'
import Inputs from './Inputs'

const MainContent = () => {
  return (
    <div  className='p-5 max-sm:p-2 border-[1px] max-sm:border-0 border-neutral-500 h-full w-full rounded-lg flex flex-col justify-center items-center'>
      <div className=' flex flex-col gap-2 text-center'>
        <p className=' font-bold text-2xl'>Generate Series</p>
        <p>Create engaging video content effortlesly with Pandu Ai</p>
      </div>
      <div className=' flex-1'></div>
      <Inputs/>
    </div>
  )
}

export default MainContent
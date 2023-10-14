import React from 'react'

export default function Neshane() {
  return (
    <div className='flex justify-evenly mt-10'>
    <div className='flex justify-center items-center mt-3'>
        <div className='h-[20px] w-[20px]  bg-gray-300 rounded-md flex items-center justify-center z-10 ml-2 ' ></div>
        <span className='ml-1'>بازدید</span>
    </div>

    <div className='flex justify-center items-center mt-3'>
        <div className='h-[20px] w-[20px] bg-indigo-400 rounded-md flex items-center justify-center z-10 ml-2 ' ></div>
        <span className='ml-1'>لایک</span>
    </div>

    <div className='flex justify-center items-center mt-3'>
        <div className='h-[20px] w-[20px]  bg-indigo-950 rounded-md flex items-center justify-center z-10 ml-2 ' ></div>
        <span className='ml-1'>کامنت</span>
    </div>

    
    </div>
  )
}

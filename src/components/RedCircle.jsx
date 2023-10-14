import React from 'react'
import {AiFillCaretRight} from 'react-icons/ai'

export default function RedCircle() {
  return (
    <div className=''>
    <div className=' h-[18px] w-[18px] bg-red-600 rounded-3xl flex items-center justify-center z-10 mb-2  '>
        <AiFillCaretRight className='items-center  text-white w-5 h-5 m-10px'/>
    </div>
  </div>
  )
}
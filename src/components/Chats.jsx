import React, { useState } from 'react';
import RedCircle from './RedCircle'
import db from '../data.json'
function Charts() {
    const [data, Setdata] = useState([...db.posts])
    const [isHovered, setHovered] = useState({});
    const [info, setInfo] = useState('');

    console.log(isHovered)

    return (

        <div className=" flex items-end  p-4">
            <div className='flex flex-col '>
                <div className="p-[60px]  mt-[500px]">800</div>
                <div className="p-[60px] mt-3">400</div>
                <div className="p-[60px] mt-4">200</div>
                <div className="p-[60px] mt-5 ">0</div>
            </div>

            {data.map(item => (

       
                <div className='  relative flex-col ml-2 ' key={item.id}
   
                    onMouseEnter={()=>setHovered(item)} onMouseLeave={ ()=>setHovered(null)}>
                    <div className='flex flex-col items-start'>
                      
     
                        {item.type === 'video' ? <RedCircle /> : null}
                        <div className={`absolute  z--${item.views} overflow-hidden h-[${item.views}px] bottom-full mb-4 rounded-t-lg bg-gray-300 w-3`}> </div>
                    </div>
                    <div className={`absolute z--${item.likes} overflow-hidden h-[${item.likes}px] mb-4 bottom-full rounded-t-lg  bg-indigo-400 w-3`}> </div>
                    <div className={`absolute z--${item.comments} overflow-hidden h-[${item.comments}px] mb-4 bottom-full rounded-t-lg  bg-indigo-950 w-3`}>  </div>
                    <span className='mt-2'>{item.efficiency}</span>
                </div>
            ))}


        
      

      {isHovered&& (
                        <div className='w-[400px h-[200px] border-spacing-2  p-4 border-solid border-4 border-red-600  rounded-md'>
                            <div> کامنت:{isHovered.comments}</div>
                            <div> بازدید:{isHovered.views}</div>
                            <div> لایک:{isHovered.likes}</div>
                            <div> تاریخ:{isHovered.date}</div>
                        </div>
                       )}
        </div>
    );
}

export default Charts;
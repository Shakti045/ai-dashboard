import { sideBarItems } from '@/contstants'
import { BsFillRocketFill } from "react-icons/bs";
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

const SideBar = () => {
  return (
    <div className=' w-full h-full bg-neutral-900 rounded-l-lg flex flex-col justify-between overflow-y-scroll scrollbaroff'>
       <div className=' flex items-center'>
        <Image src='/logo.png' width={100} height={100} alt='logo'/>
        <h1 className=' text-2xl font-bold text-white font-serif'>Pandu Ai</h1>
       </div>
       <div className=' flex flex-col flex-1   text-white'>
         {
            sideBarItems.map((item)=>{
                return (
                    <div key={item.id} className={`pl-10 p-4   mr-8 rounded-r-full ${item.id===1 && 'bg-green-500  '}`}>
                     {
                       item.route ? (<Link className=' flex gap-3 items-center' href={item.route}>
                        {item.icon({size:20})}
                        {item.title}
                       </Link>):(<div>
                        <button  className=' flex  items-center gap-3'>{item.icon({size:20})} {item.title}</button>
                        <div className=' flex flex-col gap-3 mt-2 pl-10'>
                        {
                            item.sublinks?.map((sublink)=>{
                                return (
                                    <Link key={sublink.id} href={sublink.route}>
                                        - {sublink.title}
                                    </Link>
                                )
                            })
                        }
                        </div>
                       </div>)
                     }
                    </div>
                )
            })
         }
       </div>
       <div className=' border-t-2 border-slate-400 w-full  mt-10 px-10'>
          <button className=' mt-2 w-full py-3 rounded-lg font-bold bg-green-500 text-black flex items-center gap-3 justify-center'>
            <BsFillRocketFill size={20}/>
            <span>Upgrade Plan</span>
         </button>
       </div>
       <div className=' w-full  mt-4 mb-10 flex justify-center items-center'>
          <p className=' opacity-25  text-white'>App version - 1.1</p>
       </div>
    </div>
  )
}

export default SideBar
import MainContent from '@/components/MainContent';
import MobileSideBar from '@/components/MobileSideBar';
import React from 'react'
import { FaFacebookMessenger } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";

const Home = () => {
  return (
    <div className=' w-full h-full  flex flex-col rounded-r-lg '>
        <div className=' w-full py-2 border-b-[1px] border-neutral-500 rounded-tr-lg text-black flex justify-around items-center flex-wrap gap-2 max-sm:justify-between max-sm:p-2'>
          <div className=' hidden max-sm:block'>
          <MobileSideBar/>
          </div>
          <p className=' max-sm:hidden text-center p-2'>Take Your video generation game to next level with Pandu Ai 2.0 - <span className=' font-bold'>Learn More</span></p>
          <p className=' max-sm:block hidden font-bold text-lg'>Pandu Ai</p>
          <div className='max-sm:flex hidden  items-center gap-2'>
              {/* <FaFacebookMessenger size={20}/> */}
              <IoIosNotifications size={20}/>
              {/* <IoIosLogOut size={20}/> */}
          </div>
          <div className=' flex gap-2 items-center max-sm:hidden'>
            <button className=' flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg'><FaFacebookMessenger size={20}/> Chat</button>
            <button className=' flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg'><IoIosNotifications size={20}/> Notification</button>
            <button className=' flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg'><IoIosLogOut size={20}/> Logout</button>
          </div>
        </div>
        <div className=' flex-1 p-5 max-sm:p-0'>
           <MainContent/>
        </div>
    </div>
  )
}

export default Home
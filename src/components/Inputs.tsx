import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MdAttachFile } from "react-icons/md";
import { RiAiGenerate  } from "react-icons/ri";
import { FaArrowUpLong } from "react-icons/fa6";

const selections = [
  {title:'Video type', options:['All', 'Video', 'Channel', 'Playlist']},
  {title:'Voice',options:['All', 'Video', 'Channel', 'Playlist']},
  {title:'Template',options:['All', 'Video', 'Channel', 'Playlist']},
  {title:'Branding',options:['All', 'Video', 'Channel', 'Playlist']},
  {title:'Background',options:['All', 'Video', 'Channel', 'Playlist']},
];
const Inputs = () => {
  return (
    <div className=' flex flex-col w-full gap-2'>
      <div className=' w-full flex justify-center gap-3 max-sm:hidden'>
        
           {
            selections.map((selection, index) => {
              return (
                <Select key={index}>
                <SelectTrigger className='border-[1px] border-neutral-500  bg-transparent rounded-full'>
                  <SelectValue placeholder={selection.title} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>{selection.title}</SelectLabel>
                    {selection.options.map((option, index) => {
                      return (
                        <SelectItem key={index} value={option}>{option}</SelectItem>
                      )
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
              )
            })
           }
        
      </div>
      <div className=' w-full flex gap-3 items-center  p-2 rounded-full border-[1px] border-neutral-500'>
        <button className=' text-white p-2 bg-black rounded-full'>
          <MdAttachFile size={20}/>
        </button>
        <input className=' outline-none border-none bg-transparent flex-1' placeholder='Type your video prompt'/>
        <button className=' text-white p-2 px-4 bg-black rounded-full  flex gap-2 items-center max-md:hidden'>
          <span>Generate Video</span>
          <RiAiGenerate size={20}/> 
        </button>
        <button className=' hidden max-sm:block text-white p-2 bg-black rounded-full'>
          <FaArrowUpLong size={20}/>
        </button>
      </div>
    </div>
  )
}

export default Inputs
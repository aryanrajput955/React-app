import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data,refrence}) {
  // alert(data)
  // console.log(data.desc)
  return (
    <motion.div drag 
    dragConstraints={refrence}
     dragElastic={5} 
     whileDrag={{scale:1.1}}
     dragTransition={{ bounceStiffness: 200, bounceDamping: 30 }} 
     className='relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[40px] text-white p-5 overflow-hidden px-8 py-10'>
        <FaFileAlt />
        <p className=' text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
        <div className=' footer absolute bottom-0 w-full  left-0'>
          <div className='flex items-center justify-between py-3 px-8 mb-3'>
            <h5>{data.filesize}</h5>
            <span  className='w-7 h-7 bg-zinc-500 rounded-full flex items-center justify-center'>
              {data.close ? <IoClose size="1.1em"/>:<MdOutlineFileDownload  size=".9em" color='#fff'/> }
            
            </span>
          </div>
          {
            data.tag.isOpen &&(
            <div className={`tag w-full py-4 ${data.tag.tagColor==="blue"?"bg-blue-600": "bg-green-600"} flex items-center justify-center`}>
            <h3 className=' font-semibold text-sm'>{data.tag.tagTitle}</h3>
            </div>
            )
          }
          
      </div>
    </motion.div>

  )
}

export default Card

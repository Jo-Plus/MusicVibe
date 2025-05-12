import React from 'react'
import { MdTouchApp } from "react-icons/md";
import { MdOutlineFingerprint } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { IoAppsOutline } from "react-icons/io5";


const features =[
  {
    id:1,
    title:'touch to buy',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.',
    icon:<MdTouchApp className='w-12 h-12 text-pink-600 mx-auto' />
  },
  {
    id:2,
    title:'Secure Data',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.',
    icon:<MdOutlineFingerprint  className='w-12 h-12 text-pink-600 mx-auto' />
  },
  {
    id:3,
    title:'Instant Chat',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.',
    icon:<IoChatbubbleEllipsesOutline  className='w-12 h-12 text-pink-600 mx-auto' />
  },
  {
    id:4,
    title:'Live Notification',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.',
    icon:<IoNotifications  className='w-12 h-12 text-pink-600 mx-auto' />
  },
  {
    id:5,
    title:'Wifi Support',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.',
    icon:<FaWifi  className='w-12 h-12 text-pink-600 mx-auto' />
  },
  {
    id:6,
    title:'App Watch',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.',
    icon:<IoAppsOutline   className='w-12 h-12 text-pink-600 mx-auto' />
  }
]

const Features = () => {
  return (<>
  <div  className="pt-16 pb-16" id='about'>
    <div className="mx-auto w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {features.map((feature , index)=>{
      return <div  data-aos="fade-up"  data-aos-delay={index * 100} data-aos-anchor-placement="top-center" className="text-center mx-auto" key={feature.id}>
        <div className="mx-auto text-center">{feature.icon}</div>
        <h1 className='mt-4 text-lg font-semibold text-gray-900 dark:text-white'>{feature.title}</h1>
        <p className='text-sm text-gray-600 dark:text-gray-300'>{feature.description}</p>
      </div>
    })}
    </div>
  </div>
  </>)
}

export default Features
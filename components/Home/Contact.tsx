import React from 'react'
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="pt-16 pb-16" id='contact'>
      <h1 className="text-2xl sm:text-3xl text-center text-gray-800 dark:text-white font-bold">Get In Touch</h1>
      <span className="w-16 h-1 bg-pink-600 mx-auto mt-3 block"></span>
      <p className="text-center text-sm sm:text-base text-gray-700 dark:text-gray-200 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nesciunt?</p>
      <p className="text-center text-sm sm:text-base text-gray-700 dark:text-gray-200">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      <div className="sm:w-[80%] w-[90%] lg:w-[60%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mt-16 ">
        <div className="h-full">
          <input type="text" placeholder='Name' className='w-full block text-black bg-gray-200 shadow-md outline-none px-6 py-3.5 rounded-md mb-4' />
          <input type="email" placeholder='Email' className='w-full block text-black bg-gray-200 shadow-md outline-none px-6 py-3.5 rounded-md mb-4' />
          <input type="text" placeholder='Subject' className='w-full block text-black bg-gray-200 shadow-md outline-none px-6 py-3.5 rounded-md' />
        </div>
        <div className="h-full">
          <textarea name="" id="" placeholder='Message' className='w-full h-full block text-black bg-gray-200 shadow-md outline-none px-6 py-3.5 rounded-md mb-4'></textarea>
        </div>
      </div>
      <button className='mt-8 flex items-center gap-2 bg-pink-800 text-white px-6 py-4 rounded-md shadow-md hover:bg-pink-900 transition mx-auto cursor-pointer'>
      <FaPaperPlane size={18} /> Send Message
      </button>
    </div>
  )
}

export default Contact
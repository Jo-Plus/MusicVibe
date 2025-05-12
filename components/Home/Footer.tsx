import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";





const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-950">
      <div className="w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 grid ">
        <div className="">
          <div className="text-white font-bold text-3xl">Logo</div>
          <p className="mt-5 font-semibold text-gray-300 text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quibusdam. Dolorum nam ad repellendus consequatur!</p>
          <div className="flex items-center text-white space-x-4 mt-6">
            <div className="w-8 h-8 bg-blue-700 flex items-center justify-center flex-col rounded-full"><FaFacebookF /></div>
            <div className="w-8 h-8 bg-sky-500 flex items-center justify-center flex-col rounded-full"><FaTwitter  /></div>
            <div className="w-8 h-8 bg-red-700 flex items-center justify-center flex-col rounded-full"><IoLogoYoutube  /></div>
            <div className="w-8 h-8 bg-yellow-500 flex items-center justify-center flex-col rounded-full"><FaWhatsapp  /></div>
          </div>
        </div>
          <div className="space-y-5">
            <h1 className="text-lg text-white font-bold">Company</h1>
            <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">About Us</p>
            <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">Services</p>
            <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">Our Customer</p>
            <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">Portfolio</p>
            <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">Blogs</p>
          </div>
          <div className="space-y-5">
            <h1 className="text-lg text-white font-bold">Support</h1>
            <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">Legal Information</p>
            <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">Terms & Conditions</p>
            <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">Report Abuse</p>
            <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">Privacy Police</p>
          </div>
          <div className="space-y-5">
            <h1 className="text-lg text-white font-bold">Get In Touch</h1>
            <div className="mt-6">
              <h1 className="text-sm text-white">Our Mobile Number</h1>
              <h1 className="text-base text-bold text-white mt-1">+01010283262</h1>
            </div>
            <div className="mt-6">
              <h1 className="text-sm text-white">Our Address</h1>
              <h1 className="text-base text-bold text-white mt-1">Egypt, Al-Qalyubia</h1>
            </div>
          </div>
      </div>
      <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p className="text-center md:text-left">Copyright © 2025 Webdev. All rights reserved</p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0 ">
          <span>Social : </span>
          <span className="text-gray-500 hover:text-gray-800 "><FaFacebookF /></span>
          <span className="text-gray-500 hover:text-gray-800 "><FaTwitter /></span>
          <span className="text-gray-500 hover:text-gray-800 "><FaWhatsapp /></span>
        </div>
      </div>
    </div>
  )
}

export default Footer
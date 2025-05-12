import Image from 'next/image';
import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";


type props={
  image:string;
  name:string;
  role:string;
}
const ReviewCard = ({image,name,role}:props) => {
  return (
    <div>
      <FaQuoteLeft className='w-14 h-14 text-pink-500' />
      <p className="text-center text-gray-800 dark:text-gray-200 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi doloribus molestias itaque unde sunt incidunt veniam quod eaque quas, quis perferendis, amet commodi ratione inventore delectus nostrum non beatae explicabo at dolor, aut perspiciatis debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ipsa?</p>
      <div className="mt-6">
      <Image src={image} alt='image' width={100} height={100} className='object-center mx-auto rounded-full'/>
      <h1 className='text-center text-lg font-bold mt-4'>{name}</h1>
      <h1 className='text-center text-gray-500'>{role}</h1>
      </div>
    </div>
  )
}

export default ReviewCard
import React from 'react'
import ReviewSlider from './ReviewSlider'

const Review = () => {
  return (
    <div className='pt-16 pb-16' id='testimonials'>
      <h1 className="text-2xl sm:text-3xl text-center font-bold text-gray-900 dark:text-white">10k+ Customer's Trust Us</h1>
      <span className="w-16 h-1 bg-pink-600 mx-auto mt-3 block"></span>
      <div className="w-[90%] sm:w-[80%] lg:[60%] mx-auto mt-16 ">
      <ReviewSlider/>
      </div>
    </div>
  )
}

export default Review
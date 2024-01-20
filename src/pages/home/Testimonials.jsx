import React from 'react'

const Testimonials = () => {
  return (
    <div className='section-container bg-white'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:w-1/2'>
            <img src='images/chef2.jpg'  alt=''/>
        </div>
        <div className='md:w-1/2'>
            <div className='text-center'>
              <p className='subtitle'>Customer Favorite</p>
              <h2 className='title'>Popular Categories</h2>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
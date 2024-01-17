import React from 'react'

const Banner = () => {
  return (
    <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
        <div className='py-2 flex flex-col md:flex-row justify-between items-center gap-8'>
            <div className='md:w-1/2 space-y-7 px-4'>
                <h2 className='md:text-5xl text-black text-4xl font-bold md:leading-snug leading-snug'>
                    Dive into delight of Delectable <span className='text-orange-400'>Food</span>.
                </h2>
                <p className='text-xl text-[#4A4A4A]'>Where each Plate waves a story of Culinary Mastery and Passionate Craftmanship</p>
                <button className='btn bg-orange-400 px-8 py-3 text-white font-semibold rounded-full'>Order Now</button>
            </div>
            <div className='md:w-1/2 chef_img'>
                <img src='/blackChef.jpg' alt='chef' />
            </div>
        </div>
    </div>
  )
}

export default Banner
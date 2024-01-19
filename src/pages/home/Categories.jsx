import React from 'react'

const CategoryItems = [
  {id: 1, title :'Main Dish', des: '(86 dishes)', image: '/food1.jpg'},
  {id: 2, title :'Break Fast', des: '(12 dishes)', image: '/food2.jpg'},
  {id: 3, title :' Special Dish', des: '(48 dishes)', image: '/food3.jpg'},
  {id: 4, title :'Browse All', des: '(255 dishes)', image: '/food4.jpg'},
]

const Categories = () => {
  return (
    <div className='section-container p-8 my-9'>
            <div className='text-center pb-7'>
                <p className='subtitle'>Customer Favorite</p>
                <h2 className='title'>Popular Categories</h2>
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {CategoryItems.map((item) => (
                <div key={item.id} className='w-full shadow-lg rounded-md py-6 px-5 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all'>

                  <div className='bg-[#c1f1c6] w-full h-[90px] lg:h-[200px] rounded-[12px]'>
                    <img src={item.image} alt='' className='w-full h-full cover'/>
                  </div>
                  <div className='mt-5 space-y-1'>
                    <h5>{item.title}</h5>
                    <p>{item.des}</p>

                  </div>
                </div>
              ))}
            </div>
    </div>
  )
}

export default Categories
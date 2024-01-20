import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import React, { useEffect, useState } from 'react';
import Cards from '../../components/Cards';
import { FaAngleRight } from 'react-icons/fa6'
import { FaAngleLeft } from 'react-icons/fa';


const simpleNextArrow = (props) => {
  const {className, style, onClick} = props;
  return (
    <div className={className} style={{...style, display: 'block', background: 'red'}} onClick={onClick}>NEXT</div>
  )
}

const simplePrevArrow = () => {
  const {className, style, onClick} = props;
  return (
    <div className={className} style={{...style, display: 'block', background: 'red'}} onClick={onClick}>PREVIEW</div>
  )
}

const SpecialDishes = () => {
const [recipes, setRecipes]= useState([]);
const slider = React.useRef(null);

useEffect(() => {
    fetch('/menu.json').then(res => res.json()).then(data => {
      const specials = data.filter((item) => item.category === 'popular')
      setRecipes(specials)
    })
})

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite:true,
              dots: true,
            },
          },
        ],

        nextArrow: <simpleNextArrow/>,
        prevArrow: <simplePrevArrow/>
      };
  return (
    <div className='section-container my-20'>
        <div className='text-center pb-7'>
                <p className='subtitle'>Special Dishes</p>
                <h2 className='title'>Standout Dishes From Our Menu</h2>
        </div>

  <div className='flex justify-end  right-3 top-8 mb-10 md:mr-24'>
    <button onClick={() => slider ?.current?.slickPrev()} className='btn p-2 rounded-full ml-5 bg-green-700'>
      <FaAngleLeft className='lg:w-8 h-8 p-1'/>
    </button>
    <button onClick={() => slider ?.current?.slickNext()} className='btn p-2 rounded-full ml-5 bg-green-700'>
      <FaAngleRight className='h-8  w-8 p-1' />
    </button>
  </div>
        <Slider ref={slider} {...settings} className='overflow-hidden mt-10 space-x-5'>
          {recipes.map((item) => (
            <Cards key={item.id} item={item}/>
          ))}
        </Slider>
    </div>
  )
}

export default SpecialDishes
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import React, { useEffect, useState } from 'react';

const SpecialDishes = () => {
const [recipes, setRecipes]= useState([]);
const slider = React.useRef(null);

useEffect(() => {
    fetch('/menu.json').then(res => res.json()).then(data => {
      console.log(data)
    
    })
})

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='section-container my-20'>
        <div className='text-center pb-7'>
                <p className='subtitle'>Special Dishes</p>
                <h2 className='title'>Standout Dishes From Our Menu</h2>
        </div>

        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
    </div>
  )
}

export default SpecialDishes
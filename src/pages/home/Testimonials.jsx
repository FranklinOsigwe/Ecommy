import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="section-container bg-white ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 mx-10">
        <div className="md:w-1/2 pt-10">
          <img src="images/chef2.jpg" alt="" className='' />
        </div>

        <div className="md:w-1/2">
          <div className="text-left">
            <p className="subtitle">Testimonials</p>
            <h2 className="title text-purple-900">What our customers say about us</h2>
            <blockqoute className="my-5 text-black-300 leading-[30px]">
              "I had the pleasure of dining at mama P last night and I am still
              raving about the experience! The attention to details in
              presentation and service was Impeccable"
            </blockqoute>

            <div className='flex items-center gap-4 flex-wrap'>
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="w-12 bg-neutral text-neutral-content">
                    <span>+99</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <h5 className='text-lg font-semibold'>Customer's Feedback</h5>
                <div className='flex items-center gap-2'>
                    <FaStar className='text-yellow-400'/> 
                    <span className='font-medium'>4.9</span><span className='text-[#807E7E]'>(18.6k Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

import React from 'react';
import "./Banner.css"

import banner from '../../../assets/Mesh-gradient.png'
const Banner = () => {
    return (
        <div className=''>
      <div>
        <div className='flex justify-end relative'>
        <div className='w-[50vw] h-300px  font-koulen absolute left-0 top-1/4 pl-10 text-center space-y-5'>
        <h2 className='text-6xl font-semibold'>Entertainment</h2>



            <div className="relative">
            <div className="border-t border-gray-800 w-full absolute"></div>
            <div className="absolute -top-3 left-1/2 bg-white px-4 transform -translate-x-1/2">
            and take part in the 
            </div>
          </div>


            <h1 className='font-bold text-8xl pt-6 year'>2023</h1>
            <p className='text-5xl'>Get your ticket</p>
           
        </div>
            <div className='flex'><img className='banner ' src={banner} alt="" /></div>
        </div>
      </div>
        </div>
    );
};

export default Banner;
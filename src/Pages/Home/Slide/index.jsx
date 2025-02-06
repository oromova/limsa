import React from 'react'
import Marquee from 'react-fast-marquee';

export const Slide = () => {
  return (
    <Marquee Marquee direction='right' speed={100} >
        <div className='mt-[50px] text-3xl font-bold'>
          <span className='px-[5px] mr-20'>WEBSITE BUILDING SERVICE</span>
          <span className='px-[5px] mr-20'>/</span>
          <span className='px-[5px] mr-20'>MOBILE APPS</span>
          <span className='px-[5px] mr-20'>/</span>
          <span className='px-[5px] mr-20'>AUTOMATION SYSTEMS</span>
          <span className='px-[5px] mr-20'>/</span>
          <span className='px-[5px] mr-20'>DIGITAL SOLUTIONS</span>
        </div>
      </Marquee>
  )
}

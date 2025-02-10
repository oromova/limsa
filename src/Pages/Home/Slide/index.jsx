import React from 'react'
import Marquee from 'react-fast-marquee';
import { useTranslation } from 'react-i18next';

export const Slide = () => {
   const { t } = useTranslation();

  return (
    <Marquee Marquee direction='right' speed={100} >
        <div className='mt-[50px] text-3xl font-bold'>
          <span className='px-[5px] mr-20'>{t("slide.slide1")}</span>
          <span className='px-[5px] mr-20'>/</span>
          <span className='px-[5px] mr-20'>{t("slide.slide2")}</span>
          <span className='px-[5px] mr-20'>/</span>
          <span className='px-[5px] mr-20'>{t("slide.slide3")}</span>
          <span className='px-[5px] mr-20'>/</span>
          <span className='px-[5px] mr-20'>{t("slide.slide4")}</span>
        </div>
      </Marquee>
  )
}

import React, { useEffect } from 'react';
import ourBenefits from '../../Mock/ourBenefits';
import { useTranslation } from 'react-i18next';
import Aos from 'aos';

export const OurBenefits = () => {
  const { t } = useTranslation();

   useEffect(() => {
        Aos.init({
          duration: 900,
          easing: 'ease-in-out',
        });
      }, []);

  return (
    <section data-aos="fade-down">
      <div className='py-5'>
        <div className='max-w-[1400px] mx-auto'>
          <p className='text-[40px] text-center font-bold mb-[30px] mx-[66px]'>{t("benefits.title")}</p>
          <p className='mb-[70px] text-[40px] text-center font-bold' style={{color: "rgb(108, 45, 186)"}}>{t("benefits.subtitle")}</p>
          <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly lg:justify-around gap-5'>
            {ourBenefits.map((item) => (
              <li 
              key={item.id} 
              className='cursor-pointer p-5 flex items-start bg-black rounded-2xl hover:scale-[1.05] transition-transform duration-300'
            >
              <div>
                {item.svg}
                <p className='text-2xl my-6 mr-[15px]'>{item.number}</p>
              </div>
              <div className='ml-5'>
                <h4 className='text-[18px] font-bold'>{item.title}</h4>
                <p style={{color: 'rgb(177, 177, 177)'}} className='text-[13px] my-[13px]'>{item.subtitle}</p>
              </div>
            </li>            
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

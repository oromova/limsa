import React, { useState } from 'react';
import section2 from '../../../assets/section2.png';
import section3 from '../../../assets/section2-2.png';
import { useTranslation } from 'react-i18next';

export const Accardion = () => {
  const { t } = useTranslation();

  const [openedIndex, setOpenedIndex] = useState(false);

  const hadleAccardion = () => {
    setOpenedIndex(!openedIndex);
  };

  return (
    <section className='mb-12' data-aos="fade-down">
      <div className='flex max-w-[1400px] mx-auto pt-[100px] gap-[100px]'>
        <div>
          <div className='flex gap-5'>
            <img className='max-w-[315px] max-h-[440px]'
              src={section2} alt="img" />
            <img className='max-w-[315px] max-h-[544px] pt-12'
              src={section3} alt="img" />
          </div>
        </div>
        <div className='p-[30px] rounded-[20px]' >
          <p className='text-[38px] font-semibold mb-5'>
            {t('accardion.title')}
          </p>
          {/* 1 */}
          <div className='border rounded-[20px] mb-[30px]'>
            <div className={`${openedIndex ? 'text-[#6c2dba]' : "text-white"} 
                flex justify-between px-[20px] py-[30px] text-[20px] 
                cursor-pointer`}
              onClick={hadleAccardion}
            >
              <button className={`mr-2.5 ${openedIndex ? 'text-red' : "text-white"}`}>
                {t('accardion.subtitle1')}
              </button>
              <span
                className={`${openedIndex ? 'text-[#6c2dba] rotate-90' : "text-white"} 
                  transition-transform duration-300 ease-in-out`}
              >
                <svg
                  strokeWidth="currentColor"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"
                  ></path>
                </svg>
              </span>
            </div>
            {openedIndex && (
              <div
                className='py-5 overflow-hidden transition-max-height duration-300 ease-in-out'
                style={{ maxHeight: openedIndex ? '200px' : '0px' }}
              >
                <p className='mx-4'>{t("accardion.description")}</p>
              </div>
            )}
          </div>
          {/* 2 */}
          <div className='border rounded-[20px] mb-[30px]'>
            <div className={`${openedIndex ? 'text-[#6c2dba]' : "text-white"}  flex justify-between px-[20px] py-[30px] text-[20px]`} onClick={hadleAccardion}>
              <button className={`cursor-pointer ${openedIndex ? 'text-red' : "text-white"} mr-2.5`}>
                {t('accardion.subtitle2')}
              </button>
              <span className={`${openedIndex ? 'text-[#6c2dba] rotate-90' : "text-white"} transition-transform duration-300 ease-in-out`}>
                <svg strokeWidth="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"></path></svg>
              </span>
            </div>
            {openedIndex ? <div className='py-5'>
              <p className='mx-4'>{t("accardion.description2")}</p>
            </div> : null}
          </div>
          {/* 3 */}
          <div className='border rounded-[20px]'>
            <div className={`${openedIndex ? 'text-[#6c2dba]' : "text-white"} flex justify-between px-[20px] py-[30px] text-[20px]`} onClick={hadleAccardion}>
              <button className={`cursor-pointer ${openedIndex ? 'text-red' : "text-white"} mr-2.5`}>
                {t('accardion.subtitle2')}
              </button>
              <span className={`${openedIndex ? 'text-[#6c2dba] rotate-90' : "text-white"} transition-transform duration-300 ease-in-out`}>
                <svg strokeWidth="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"></path></svg>
              </span>
            </div>
            {openedIndex ? <div className='py-5'>
              <p className='mx-4'>{t("accardion.description2")}</p>
            </div> : null}
          </div>
        </div>
      </div>
    </section >
  );
};

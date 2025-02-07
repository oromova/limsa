import React from 'react';
import section2 from '../../../assets/section2.png';
import section3 from '../../../assets/section2-2.png';
import { useTranslation } from 'react-i18next';

export const Accardion = () => {
  const { t } = useTranslation();
  
  return (
    <section className='mb-12'>
      <div className='flex max-w-[1200px] mx-auto pt-[100px] gap-[100px]'>
        <div>
          <div className='flex gap-5'>
            <img className='max-w-[315px] max-h-[440px]'
              src={section2} alt="img" />
            <img className='max-w-[315px] max-h-[544px] pt-12'
              src={section3} alt="img" />
          </div>
        </div>
        <div className='p-[30px] rounded-[20px]'>
          <p className='text-[38px] font-semibold my-7'>
            {t('accardion.title')}
          </p>
          <div className='flex justify-between rounded-[20px] py-[30px] px-[20px] text-[20px] mb-3'
            style={{ border: '1px solid rgb(68, 68, 68)' }}>
            <button>{t('accardion.subtitle1')}</button>
            <span>
              <svg strokeWidth="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"></path></svg>
            </span>
          </div>
          <div className='py-5'>
            <p className='mx-4'>{t("accardion.description")}</p>
          </div>
          <div className='flex justify-between rounded-[20px] py-[30px] px-[20px] text-[20px] mb-3'
            style={{ border: '1px solid rgb(68, 68, 68)' }}>
            <button>{t('accardion.subtitle2')}</button>
            <span>
              <svg strokeWidth="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"></path></svg>
            </span>
          </div>
          <div className='py-5'>
            <p className='mx-4'>{t("accardion.description2")}</p>
          </div>
          <div className='flex justify-between rounded-[20px] py-[30px] px-[20px] text-[20px]'
            style={{ border: '1px solid rgb(68, 68, 68)' }}>
            <button>{t('accardion.subtitle2')}</button>
            <span>
              <svg strokeWidth="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"></path></svg>
            </span>
          </div>
          <div className='py-5'>
            <p className='mx-4'>{t("accardion.description2")}</p>
          </div>
        </div>
      </div>
    </section >
  );
};

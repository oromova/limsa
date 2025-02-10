import React from 'react';
import { useTranslation } from 'react-i18next';
import bg from '../../assets/bg.png';


export const Modal = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-[150px] pb-[50px] bg-cover bg-center">
      <div className='max-w-[1400px] mx-auto px-5'>
        <div className='flex justify-between gap-60px'>
          <div className='max-w-[550px] '>
            <h2 className='text-4xl font-semibold my-[30px]'>{t('modal.title')}</h2>
            <p className='my-4 text-[#6c2dba] text-[18px]'>{t("modal.subtitle")}</p>
            <div>
              <h3 className='my-[18px] text-[18px] font-semibold'>{t("modal.pages")}</h3>
              <ul>
                <li >
                  <a className='text-[#6c6c6c]' href="/">{t("header.home")}</a>
                </li>
                <li>
                  <a className='text-[#6c6c6c]' href="/">{t("header.service")}</a>
                </li>
              </ul>
            </div>
          </div>
          <form className='w-[45%] pr-10' action="">
            <h3 className='text-[32px] font-semibold my-[30px]'>
              {t("modal.label")}
            </h3>
            <input className='min-w-full mb-[20px] p-5 rounded-[25px] bg-[#363636] text-[14px] outline-0' type="text" placeholder={t("modal.placeholder")} required />
            <div className='mb-[20px]'>
              <span className='w-full rounded-l-[20px] bg-[#363636] py-[23px] px-2 text-[14px]'>+998</span>
              <input className='max-w-[500px] outline-0 rounded-r-[20px] bg-[#363636] py-[20px] px-2 text-[14px]' type="tel" placeholder='901234567' required />
            </div>
            <textarea className='min-w-full h-[100px] rounded-[20px] p-5 mb-[30px] outline-0  bg-[#363636]' name="feedback" placeholder="Your message" maxLength={200} id=""></textarea>
            <button className='bg-[#6c2dba] px-[60px] py-[15px] rounded-[25px] cursor-pointer '>
              {t('modal.Send')}
            </button>
          </form>
        </div>

      </div>
    </section >
  );
};

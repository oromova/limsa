import React from 'react';
import { Modal } from '../../Components/Modal';
import { Contacts } from '../../Components/Contacts';
import { useTranslation } from 'react-i18next';

export const Prices = () => {
  const { t } = useTranslation();

  return (
    <section className='pt-[150px] bg-[url(https://www.limsa.uz/assets/pricing-shape-D9Ghccyc.png)] bg-no-repeat bg-right'>
      <div className='w-[1400px] px-[20px] mx-auto '>
        <div className='w-[180px] py-[15px] px-[20px] mx-auto text-center border border-[#6c2dba] rounded-[20px]'>
          {t("prices.price")}
        </div>
        <p className='text-[40px] text-center font-bold mt-[30px] mb-[80px] mx-[66px]'>{t("prices.title")}</p>
        {/* 1 */}
        <div>
          <div className='px-[30px] mb-[5px] border-1 border-[#ddd] hover:border-[#6c2dba] h-[210px] bg-[url(https://www.limsa.uz/assets/pricing-itembg-SEN5K1Vz.png)] bg-center rounded-[8px] flex justify-between ]'>
            <div className='border-r-1 border-[#ddd] max-w-[1400px] hover:border-[#6c2dba] '>
              <h3 className='my-6 text-[#6c2dba] text-2xl font-bold'>
                {t("prices.cardTitle1")}
              </h3>
              <p className='text-[16px] w-[300px] text-[#c2c2c2] mb-[16px] mr-22'>
                {t('prices.subtitle1')}
              </p>
            </div>
            <ul className='mt-14'>
              <li className='text-[#a9a9a9]'>
                {t("prices.domen")}
              </li>
              <li className='text-[#a9a9a9]'>
                {t("prices.protection")}
              </li>
              <li className='text-[#a9a9a9]'>
                {t('prices.duration')}
              </li>
              <li className='text-[#a9a9a9]'>
                {t("prices.page")}
              </li>
            </ul>
            <div className='mt-20'>
              <div className='gap-[30px] items-center flex '>
                <div className='font-semibold text-[#6c2dba] w-[130px] text-[20px]'>{t("prices.negotiate")}</div>
                <a href="#modal" className='bg-[#6c2dba] font-semibold cursor-pointer border-0 py-[8px] px-[16px] rounded-[5px]'>{t("prices.btn")}</a>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div>
          <div className='px-[30px] mb-[5px] border-1 border-[#ddd] hover:border-[#6c2dba] h-[250px] bg-[url(https://www.limsa.uz/assets/pricing-itembg-SEN5K1Vz.png)] bg-center rounded-[8px] flex justify-between ]'>
            <div className='border-r-1 border-[#ddd] max-w-[1400px] hover:border-[#6c2dba] '>
              <h3 className='my-6 text-[#6c2dba] text-2xl font-bold'>
                {t("prices.cardTitle2")}
              </h3>
              <p className='text-[16px] w-[300px] text-[#c2c2c2] mb-[16px] mr-22'>
                {t("prices.subtitle2")}
              </p>
            </div>
            <ul className='mt-14'>
              <li className='text-[#a9a9a9]'>
                {t("prices.domen")}
              </li>
              <li className='text-[#a9a9a9]'>
               {t("prices.protection")}
              </li>
              <li className='text-[#a9a9a9]'>
                {t("prices.duration2")}
              </li>
              <li className='text-[#a9a9a9]'>
                {t("prices.pages")}
              </li>
            </ul>
            <div className='mt-20'>
              <div className='gap-[30px] items-center flex '>
                <div className='font-semibold text-[#6c2dba] w-[130px] text-[20px]'>{t("prices.negotiate")}</div>
                <a href="#modal" className='bg-[#6c2dba] font-semibold cursor-pointer border-0 py-[8px] px-[16px] rounded-[5px]'>{t("prices.btn")}</a>
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div>
          <div className='px-[30px] mb-[5px] border-1 border-[#ddd] hover:border-[#6c2dba] h-[210px] bg-[url(https://www.limsa.uz/assets/pricing-itembg-SEN5K1Vz.png)] bg-center rounded-[8px] flex justify-between ]'>
            <div className='border-r-1 border-[#ddd] max-w-[1400px] hover:border-[#6c2dba] '>
              <h3 className='my-6 text-[#6c2dba] text-2xl font-bold'>
                {t("prices.cardTitle3")}
              </h3>
              <p className='text-[16px] w-[300px] text-[#c2c2c2] mb-[16px] mr-22'>
                {t("prices.subtitle3")}
              </p>
            </div>
            <ul className='mt-14'>
              <li className='text-[#a9a9a9]'>
                {t("prices.domen")}
              </li>
              <li className='text-[#a9a9a9]'>
                {t("prices.protection")}
              </li>
              <li className='text-[#a9a9a9]'>
                {t("prices.page2")}
              </li>
              <li className='text-[#a9a9a9]'>
                {t("prices.level")}
              </li>
            </ul>
            <div className='mt-20'>
              <div className='gap-[30px] items-center flex '>
                <div className='font-semibold text-[#6c2dba] w-[130px] text-[20px]'>{t("prices.negotiate")}</div>
                <a href="#modal" className='bg-[#6c2dba] font-semibold cursor-pointer border-0 py-[8px] px-[16px] rounded-[5px]'>{t("prices.btn")}</a>
              </div>
            </div>
          </div>
        </div>
        <Modal />
        <Contacts />
      </div>
    </section >
  );
};

import { useTranslation } from 'react-i18next';
import img from '../../assets/home-bg.png';
import { Accardion } from './Accardion';
import { Slide } from './Slide';
import { Projects } from '../../Components/Projects';
import { OurBenefits } from '../../Components/OurBenefits';
import { Contacts } from '../../Components/Contacts';
import { Modal } from '../../Components/Modal';


export const Home = () => {
  const { t } = useTranslation();
  
  return (
    <div className='pt-[150px] pb-[100px]'>
      <div className=' max-w-[1400px] mx-auto '>
        {/* section 1 */}
        <section className='flex justify-between items-center'>
          <div className='w-[450px]'>
            <p className='text-[32px] font-semibold mt-6 mb-8'>
              {t("header.title")}
            </p>
            <p className='text-[18px] mb-6'>
              {t("header.description")}
            </p>
            <a className='py-[13px] px-[25px] bg-[#6c2dba] text-md rounded-2xl font-semibold' href="#modal" >{t("header.btn")}</a>
          </div>
          <img className='max-w-[750px] max-h-[550px]' src={img} alt="kompyuter" />
        </section>
      </div>
      <Accardion/>
      <Slide/>
      <Projects/>
      <OurBenefits/>
      <Modal/>
      <Contacts/>
    </div >
  );
};

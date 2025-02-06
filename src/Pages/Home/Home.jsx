import img from '../../assets/home-bg.png';
import { Dropdown } from './Dropdown';
import { Projects } from './Projects/project';

import { Slide } from './Slide';

export const Home = () => {
  return (
    <div className='pt-[150px] pb-[100px]'>
      <div className=' max-w-[1200px] mx-auto'>
        {/* section 1 */}
        <section className='flex justify-between items-center'>
          <div className='w-[450px]'>
            <p className='text-[28px] font-semibold mt-6 mb-8'>
              Perfect 'IT' solutions to grow your business!
            </p>
            <p className='mb-6'>
              Entrust your project to experts with more than 10 years of experience and achieve high success in a short time.
            </p>
            <a className='py-[13px] px-[25px] bg-[#6c2dba] text-md rounded-2xl font-semibold' href="/">Contact</a>
          </div>
          <img className='max-w-[750px] max-h-[550px]' src={img} alt="kompyuter" />
        </section>
      </div>
      {/* section 2 */}
      {/* <Dropdown/> */}
      {/* section 3 */}
      <Slide/>
      {/* section 4 */}
      <Projects/>
    </div >
  );
};

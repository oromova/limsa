import React from 'react'
import { OurBenefits } from '../../Components/OurBenefits';
import { Modal } from '../../Components/Modal';
import { Contacts } from '../../Components/Contacts';

export const Services = () => {
  return (
    <section>
      <div className='pt-[150px]'>
        <div className='w-[180px] py-[15px] px-[20px] text-center mx-auto border border-[#6c2dba] rounded-[20px]'>
          Our Services
        </div>
        <OurBenefits/>
        <Modal/>
        <Contacts/>
      </div>
    </section>
  )
}

import React from 'react'
import { OurBenefits } from '../../Components/OurBenefits';
import { Modal } from '../../Components/Modal';
import { Contacts } from '../../Components/Contacts';

export const Services = () => {
  return (
    <div>
      <div className='pt-[100px]'>
        <OurBenefits/>
        <Modal/>
        <Contacts/>
      </div>
    </div>
  )
}

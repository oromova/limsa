import React from 'react';
import { Projects } from '../../Components/Projects';
import { Modal } from '../../Components/Modal';
import { Contacts } from '../../Components/Contacts';

export const Works = () => {
  return (
    <div>
      <div>
        <Projects/>
        <Modal />
        <Contacts />
      </div>
    </div>
  );
};

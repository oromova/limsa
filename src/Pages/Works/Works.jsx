import { Projects } from '../../Components/Projects';
import { Modal } from '../../Components/Modal';
import { Contacts } from '../../Components/Contacts';

export const Works = () => {
  return (
    <section>
      <div>
        <Projects/>
        <Modal />
        <Contacts />
      </div>
    </section>
  );
};

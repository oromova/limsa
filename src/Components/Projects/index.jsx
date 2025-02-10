import { useTranslation } from 'react-i18next';
import project from '../../Mock/project';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

export const Projects = () => {
  const { t } = useTranslation();

   useEffect(() => {
      Aos.init({
        duration: 900,
        easing: 'ease-in-out',
      });
    }, []);

  return (
    <section className='pt-[150px]' data-aos="fade-down">
      <div className='px-5'>
        <div className='max-w-[1400px] mx-auto'>
          <h2 className='mt-8 mb-20 font-semibold text-4xl text-center'>{t("projects.title")}</h2>
          <ul className='grid grid-cols-3 gap-10'>
            {project.map((item) => (
              <div key={item.id} className='border-b-2 border-[#444444] mb-8'>
                <li 
                  className="pb-8 mb-32 relative max-w-[400px] max-h-[220px] border-b-2 border-[#444444]">
                  <a
                    className="cursor-pointer block relative"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ataev Bahodir Build website"
                  >
                    <div className="relative">
                      <img
                        className="max-w-[400px] max-h-[220px] transition-transform duration-300 ease-in-out transform hover:scale-105"
                        src={item.src}
                        alt={item.alt}
                      />
                      <p className='absolute -top-12 left-5 font-bold mx-4'>{item.cite}</p>
                    </div>
                    <p className="mt-4 text-white ">
                      {t(`projects.descriptions.${item.key}`)}
                    </p>
                  </a>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

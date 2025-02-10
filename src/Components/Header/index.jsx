import logo from '../../assets/header-logo.png';
import { useTranslation } from 'react-i18next';
export const Header = () => {
  const { t, i18n } = useTranslation();
  const launguage = localStorage.getItem('i18nextLng');

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <header>
      <nav className='pt-3.5 pb-2.5 fixed w-full z-50 duration-300 text-white bg-[#161616]'>
        <div className='w-[1200px] mx-auto'>
          <div className='flex justify-items-start gap-10 items-center h-16'>
            {/* LOGO */}
            <a href="/">
              <img className="w-[120px] mt-2 h-[30px] hover:scale-105 transition duration-200"
                src={logo} alt="logo" />
            </a>
            {/* MENU */}
            <div className='w-[740px]'>
              <ul className='flex items-start mx-4'>
                <li className="mx-4">
                  <a href="/">{t('header.home')}</a>
                </li>
                <li className="mx-4">
                  <a href="/">{t("header.service")}</a>
                </li>
                <li className="mx-4">
                  <a href="/">{t("header.work")}</a>
                </li>
                <li className="mx-4">
                  <a href="/">{t("header.price")}</a>
                </li>
                <select className="focus:outline-none bg-transparent cursor-pointer pt-1 font-semibold"
                  onChange={handleChange} value={launguage}>
                  <option className='text-black font-semibold' value="uz">Уз</option>
                  <option className='text-black font-semibold' value="ru">Ру</option>
                  <option className='text-black font-semibold' value="en">Eng</option>
                </select>
              </ul>
            </div>
            <a className='py-[13px] px-[25px] bg-[#6c2dba] text-[14px] rounded-2xl'
              href="tel:+998935138833">+998 (33) 258 73 58 </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

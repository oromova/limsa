import React from 'react';

export const Contacts = () => {
  return (
    <section className='my-[70px]'>
      <div className='px-5 max-w-[1200px] mx-auto'>
        <h2 className='text-[40px] font-bold my-[35px]'>Contacts</h2>
        <div className='flex text-center '>
          <ul className='grid grid-cols-2 gap-[30px] my-4'>
            <li className='flex gap-[20px] w-[300px]'>
              <svg className='text-[27px]' stroke="currentColor"  stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" ><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"></path><circle cx="256" cy="192" r="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle></svg>
              <div className='text-left'>
                <h2 className='text-[18px] font-semibold'>Address</h2>
                <p className='text-[14px] my-[14px]' style={{color: "#a1a1a1"}}>Tashkent city Yunusabad district</p>
              </div>
            </li>
            <li className='flex gap-[20px] w-[300px]'>
              <svg className='text-[27px]' stroke="currentColor" fill="#a1a1a1" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M15 12h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3zm4 0h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm1 3.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM5.03 5h1.5c.07.88.22 1.75.45 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79zM19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45v1.51z"></path></svg>
              <div className='text-left'>
                <h2 className='text-[18px] font-semibold'>Phone Number</h2>
                <a className='text-[14px] my-[14px]' href="tel:+998935138833 " style={{color: "#a1a1a1"}}>+998 (33) 258 73 58</a>
              </div>
            </li>
            <li className='flex gap-[20px] w-[300px]'>
              <svg className='text-[27px]' stroke="currentColor" fill="#a1a1a1" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 2.66a1 1 0 0 0 -1 1v5a1 1 0 0 0 1 1h3.5a1 1 0 0 0 0 -2h-2.5v-4a1 1 0 0 0 -.883 -.993z"></path></svg>
              <div className='text-left'>
                <h2 className='text-[18px] font-semibold'>Working hours</h2>
                <p className='text-[14px] my-[14px]' style={{color: "#a1a1a1"}}>9:00 18:00 Monday-Saturday</p>
              </div>
            </li>
            <li className='flex gap-[20px] w-[300px]'>
              <svg className='text-[27px]' stroke="currentColor" fill="#a1a1a1" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M384 336a63.78 63.78 0 0 0-46.12 19.7l-148-83.27a63.85 63.85 0 0 0 0-32.86l148-83.27a63.8 63.8 0 1 0-15.73-27.87l-148 83.27a64 64 0 1 0 0 88.6l148 83.27A64 64 0 1 0 384 336z"></path></svg>
              <div className='text-left'>
                <h2 className='text-[18px] font-semibold'>Social networks</h2>
                <p className='text-[14px] my-[14px] flex gap-2.5'>
                  <a href="https://www.linkedin.com/company/limsa-2021/" target="_blanc">
                    <svg className='w-[27px] h-[31px]' stroke="currentColor" fill="#a1a1a1" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg></a>
                  <a href="https://www.instagram.com/limsa_uz" target="_blanc">
                    <svg className='w-[27px] h-[31px]' stroke="currentColor" fill="#a1a1a1" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                  </a>
                  <a href="https://t.me/the_rustambek" target="_blanc">
                    <svg className='w-[27px] h-[31px]' stroke="currentColor" fill="#a1a1a1" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path></svg>
                  </a>
                </p>
              </div>
            </li>
          </ul>
          <iframe className='min-w-[50%] h-[300px] rounded-[20px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.65547130854!2d69.28311021090116!3d41.33810459893217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5f1f5cfd49%3A0x110bc2a5ed9856b7!2sLIMSA!5e0!3m2!1sru!2s!4v1730879135357!5m2!1sru!2s" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map"></iframe>
        </div>
      </div>
    </section>
  );
};

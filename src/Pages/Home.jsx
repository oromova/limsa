import img from '../assets/home-bg.png'

export const Home = () => {
  return (
    <div className='pt-[150px]'>
      <div className='flex justify-between items-center max-w-[1200px] mx-auto'>
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
      </div>
    </div>
  )
}

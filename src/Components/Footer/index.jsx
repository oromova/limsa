import img from '../../assets/footer.png'

export const Footer = () => {
  return (
    <div className='p-5 flex justify-between bg-[rgb(12 10 10)]'>
      <img className='w-[150px] h-[40px]' src={img} alt="logo" />
      <p className='my-4'>© 2024 Limsa. All rights reserved.</p>
    </div>
  )
}

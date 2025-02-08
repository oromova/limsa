import img from '../../assets/footer.png'

export const Footer = () => {
  return (
    <footer className='p-5 flex justify-between bg-black'>
      <img className='w-[150px] h-[40px]' src={img} alt="logo" />
      <p className='my-4'>© 2024 Limsa. All rights reserved.</p>
    </footer>
  )
}

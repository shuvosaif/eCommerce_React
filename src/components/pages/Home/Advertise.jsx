import banner from '../../../assets/images/banner.jpg'

export default function Advertise() {
  return (
    <div className='container'>
      <a className='block' href='# '>
        <img src={banner} alt='' className='w-full h-48 object-cover' />
      </a>
    </div>
  )
}

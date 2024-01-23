import bedroom from '../../assets/images/bedroom.svg'
import matress from '../../assets/images/matress.png'
import sofa from '../../assets/images/sofa.jpg'
import office from '../../assets/images/office.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='bg-gray-800'>
      <div className='container flex'>
        <div className='px-8 py-4 bg-primary flex items-center cursor-pointer relative group'>
          <span className='text-white'>
            <i className='fa fa-bars'></i>
          </span>
          <span className='capitalize ml-2 text-white'> All Categories </span>
          <div className='absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible'>
            <Link
              to='/'
              className='flex items-center px-6 py-3 hover:bg-gray-100 transition'
            >
              <img src={bedroom} className='w-5 h-5 object-contain' />
              <span className='ml-6 text-gray-600 text-sm'>Bedroom</span>
            </Link>
            <a
              href='#'
              className='flex items-center px-6 py-3 hover:bg-gray-100 transition'
            >
              <img src={matress} className='w-5 h-5 object-contain' />
              <span className='ml-6 text-gray-600 text-sm'>Matress</span>
            </a>
            <a
              href='#'
              className='flex items-center px-6 py-3 hover:bg-gray-100 transition'
            >
              <img src={sofa} className='w-5 h-5 object-contain' />
              <span className='ml-6 text-gray-600 text-sm'>Sofa</span>
            </a>
            <a
              href='#'
              className='flex items-center px-6 py-3 hover:bg-gray-100 transition'
            >
              <img src={office} className='w-5 h-5 object-contain' />
              <span className='ml-6 text-gray-600 text-sm'>Office</span>
            </a>
          </div>
        </div>
        <div className='flex items-center justify-between flex-grow pl-12'>
          <div className='flex items-center space-x-4 capitalize'>
            <Link to='/' className='text-gray-200 hover:text-white transition'>
              Home
            </Link>
            <Link
              to='/shop'
              className='text-gray-200 hover:text-white transition'
            >
              Shop
            </Link>
            <Link
              to='/about'
              className='text-gray-200 hover:text-white transition'
            >
              About
            </Link>
            <Link
              to='/contact'
              className='text-gray-200 hover:text-white transition'
            >
              Contact Us
            </Link>
          </div>
          <Link
            to='/login'
            className='text-gray-200 hover:text-white transition'
          >
            Login/Register
          </Link>
        </div>
      </div>
    </nav>
  )
}

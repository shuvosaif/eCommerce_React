import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

export default function Header() {
  return (
    <header className='py-4 shadow-sm bg-white'>
      <div className='container flex items-center justify-between'>
        <div>
          <a href='#'>
            <img src={logo} className='h-10' />
          </a>
        </div>

        <div className='w-full max-w-xl relative flex'>
          <span className='absolute left-4 top-3 text-lg text-gray-400 bg-secondary'>
            <i className='fas fa-search'></i>
          </span>
          <input
            type='text'
            className='w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none'
            placeholder='search'
          />
          <button className='bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition'>
            Search
          </button>
        </div>
        <div className='flex items-center space-x-4'>
          <Link
            to='/wishlist'
            className='text-center text-gray-700 hover:text-primary transition duration-100 relative'
          >
            <div className='text-2xl'>
              <i className='far fa-heart'></i>
            </div>
            <div className='text-xs leading-3'>Wish List</div>
            <span className='absolute right-0 top-1 w-5 rounded-full flex items-center justify-center bg-primary text-white text-xs'>
              2
            </span>
          </Link>
          <a
            href='#'
            className='text-center text-gray-700 hover:text-primary transition duration-100 relative'
          >
            <div className='text-2xl'>
              <i className='fa-solid fa-cart-shopping'></i>
            </div>
            <div className='text-xs leading-3'>Cart</div>
            <span className='absolute right-3 top-1 w-5 rounded-full flex items-center justify-center bg-primary text-white text-xs'>
              2
            </span>
          </a>
          <Link
            to='/account'
            className='text-center text-gray-700 hover:text-primary transition duration-100 relative'
          >
            <div className='text-2xl'>
              <i className='far fa-user'></i>
            </div>
            <div className='text-xs leading-3'>Account</div>
            <span className='absolute right-0 top-1 w-5 rounded-full flex items-center justify-center bg-primary text-white text-xs'>
              3
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}

import bedroom from '../../../assets/images/bedroom.svg'
import office from '../../../assets/images/office.png'

export default function Account() {
  return (
    <div className='container grid grid-cols-12 items-start gap-6 pt-4 pb-16'>
      <div className='col-span-3'>
        <div className='px-4 py-3 shadow flex items-center gap-4'>
          <div className='flex-shrink-0'>
            <img
              src={office}
              className='rounded-full w-14 h-14 border border-gray-200 p-1 object-cover'
            />
          </div>
          <div className='flex-grow'>
            <p className='text-gray-600'>Hello</p>
            <h4 className='text-gray-800 font-medium'>Saif Shuvo</h4>
          </div>
        </div>
        <div className='mt-6 bg-white text-gray-600 shadow rounded p-4 divide-y divide-gray-200 space-y-4'>
          <div className='space-y-1 pl-8'>
            <a
              href='#'
              className='relative block font-medium capitalize transition'
            >
              <span className='absolute left-8 top-0 text-base'>
                <i className='fas fa-address-card text-primary'></i>{' '}
              </span>
              Manage account
            </a>
            <a
              href='#'
              className='relative block font-medium capitalize transition'
            >
              Profile Info
            </a>
            <a
              href='#'
              className='relative block font-medium capitalize transition'
            >
              Manage address
            </a>
            <a
              href='#'
              className='relative block font-medium capitalize transition'
            >
              Change Password
            </a>
          </div>
          <div className='space-y-1 pl-4'>
            <a
              href='#'
              className='relative block font-medium capitalize transition'
            >
              <span className='absolute left-8 top-0 text-base'>
                <i className='far fa-address-card'></i>
              </span>
              Manage account
            </a>
            <a
              href='#'
              className='relative block font-medium capitalize transition'
            >
              Profile Info
            </a>
            <a
              href='#'
              className='relative block font-medium capitalize transition'
            >
              Manage address
            </a>
            <a
              href='#'
              className='relative block font-medium capitalize transition'
            >
              Change Password
            </a>
          </div>
          <div className='space-y-1 pl-8'>
            <a
              href='#'
              className='relative block font-medium capitalize transition'
            >
              <span className='absolute left-8 top-0 text-base'>
                <i className='far fa-address-card'></i>
              </span>
              Manage account
            </a>
            <a
              href='#'
              className='relative block font-medium capitalize transition'
            >
              Profile Info
            </a>
          </div>
          <div className='space-y-1 pl-8'>
            <a
              href='#'
              className='relative block font-medium capitalize transition'
            >
              <span className='absolute left-8 top-0 text-base'>
                <i className='far fa-address-card'></i>
              </span>
              Logout
            </a>
          </div>
        </div>
      </div>
      <div className='col-span-9 space-y-4'>
        <div className='flex item-center justify-between gap-6 p-4 border border-gray-200 rounded'>
          <div className='w-28'>
            <img src={bedroom} className='w-full' />
          </div>
          <div className='w-1/3'>
            <h2 className='text-gray-800 text-xl font-medium uppercase'>
              italian Bed Room Decor
            </h2>
            <p className='text-gray-500 text-sm'>
              Availability: <span className='text-green-600'> In Stcok</span>
            </p>
          </div>
          <div className='text-primary text-lg font-semibold'>$320</div>
          <a
            href='#'
            className='px-6 py-2 h-2/3 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-robot font font-medium'
          >
            Add to Cart
          </a>
          <div className='text-gray-600 cursor-pointer hover:text-primary'>
            <i className='fas fa-trash'></i>
          </div>
        </div>
        <div className='flex item-center justify-between gap-6 p-4 border border-gray-200 rounded'>
          <div className='w-28'>
            <img src={bedroom} className='w-full' />
          </div>
          <div className='w-1/3'>
            <h2 className='text-gray-800 text-xl font-medium uppercase'>
              italian Bed Room Decor
            </h2>
            <p className='text-gray-500 text-sm'>
              Availability: <span className='text-red-600'> Out Of Stcok</span>
            </p>
          </div>
          <div className='text-primary text-lg font-semibold'>$320</div>
          <a
            href='#'
            className='cursor-not-allowed px-6 py-2 h-2/3 text-center text-sm text-white bg-red-300 border border-red-300 rounded transition uppercase font-robot font font-medium'
          >
            Add to Cart
          </a>
          <div className='text-gray-600 cursor-pointer hover:text-primary'>
            <i className='fas fa-trash'></i>
          </div>
        </div>
      </div>
    </div>
  )
}

import office from '../../../assets/images/office.png'

export default function Accountwrapper() {
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
        <div className='mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600'>
          <div className='space-y-1 pl-8'>
            <a
              href='#'
              className='relative text-primary block font-medium capitalize transition'
            >
              <span className='absolute top-0 text-base'>
                <i className='far fa-address-card'></i>
              </span>
              Manage account
            </a>
            <a
              href='#'
              className='relative text-primary block font-medium capitalize transition'
            >
              Profile Info
            </a>
            <a
              href='#'
              className='relative text-primary block font-medium capitalize transition'
            >
              Manage address
            </a>
            <a
              href='#'
              className='relative text-primary block font-medium capitalize transition'
            >
              Change Password
            </a>
          </div>
          <div className='space-y-1 pl-4'>
            <a
              href='#'
              className='relative text-primary block font-medium capitalize transition'
            >
              <span className='absolute left-8 top-0 text-base'>
                <i className='far fa-address-card'></i>
              </span>
              Manage account
            </a>
            <a
              href='#'
              className='relative text-primary block font-medium capitalize transition'
            >
              Profile Info
            </a>
            <a
              href='#'
              className='relative text-primary block font-medium capitalize transition'
            >
              Manage address
            </a>
            <a
              href='#'
              className='relative text-primary block font-medium capitalize transition'
            >
              Change Password
            </a>
          </div>
          <div className='space-y-1 pl-8'>
            <a
              href='#'
              className='relative text-primary block font-medium capitalize transition'
            >
              <span className='absolute left-8 top-0 text-base'>
                <i className='far fa-address-card'></i>
              </span>
              Manage account
            </a>
            <a
              href='#'
              className='relative text-primary block font-medium capitalize transition'
            >
              Profile Info
            </a>
          </div>
          <div className='space-y-1 pl-8'>
            <a
              href='#'
              className='relative text-primary block font-medium capitalize transition'
            >
              <span className='absolute left-8 top-0 text-base'>
                <i className='far fa-address-card'></i>
              </span>
              Logout
            </a>
          </div>
        </div>
      </div>
      <div className='col-span-9 grid grid-cols-3 gap-4'>
        <div className='shadow rounded bg-white px-4 pt-6 pb-8'>
          <div className='flex justify-between items-center mb-4'>
            <h3 className='font-medium text-gray-800 text-lg'>
              Personal profile
            </h3>
            <a href='#' className='text-primary'>
              {' '}
              Edit{' '}
            </a>
          </div>
          <div className='space-y-1'>
            <h4 className='text-gray-700 font-medium'>Saif</h4>
            <p className='text-gray-800'>example@gmail.com</p>
            <p className='text-gray-800'>123-876-098</p>
          </div>
        </div>
        <div className='shadow rounded bg-white px-4 pt-6 pb-8'>
          <div className='flex justify-between items-center mb-4'>
            <h3 className='font-medium text-gray-800 text-lg'>
              Personal profile
            </h3>
            <a href='#' className='text-primary'>
              {' '}
              Edit{' '}
            </a>
          </div>
          <div className='space-y-1'>
            <h4 className='text-gray-700 font-medium'>Saif</h4>
            <p className='text-gray-800'>example@gmail.com</p>
            <p className='text-gray-800'>123-876-098</p>
          </div>
        </div>
        <div className='shadow rounded bg-white px-4 pt-6 pb-8'>
          <div className='flex justify-between items-center mb-4'>
            <h3 className='font-medium text-gray-800 text-lg'>
              Personal profile
            </h3>
            <a href='#' className='text-primary'>
              {' '}
              Edit{' '}
            </a>
          </div>
          <div className='space-y-1'>
            <h4 className='text-gray-700 font-medium'>Saif</h4>
            <p className='text-gray-800'>example@gmail.com</p>
            <p className='text-gray-800'>123-876-098</p>
          </div>
        </div>
      </div>
    </div>
  )
}

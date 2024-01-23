export default function Account() {
  return (
    <div className='container grid grid-cols-12 items-start gap-6 pt-4 pb-16'>
      <div className='col-span-3'>
        <div className='px-4 py-3 shadow flex items-center gap-4'>
          <div className='flex-shrink-0'>
            <img
              src='images/office.png'
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
      <div className='col-span-9 shadow rounded px-6 py-5 pb-7'>
        <h4 className='text-lg font-medium capitalize mb-4'>
          Profile Information
        </h4>
        <div className='space-y-4'>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='text-gray-600 mb-2 block'>Full Name</label>
              <input
                className='input-box'
                type='text'
                placeholder='Enter First Name'
              />
            </div>
            <div>
              <label className='text-gray-600 mb-2 block'>Last Name</label>
              <input
                className='input-box'
                type='text'
                placeholder='Enter Last Name'
              />
            </div>
            <div>
              <label className='text-gray-600 mb-2 block'>Birthdate</label>
              <input className='input-box' type='date' />
            </div>
            <div>
              <label className='text-gray-600 mb-2 block'>Gender</label>
              <select className='input-box'>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div>
              <label className='text-gray-600 mb-2 block'>Email Address</label>
              <input
                className='input-box'
                type='text'
                placeholder='Enter Email Address'
              />
            </div>
            <div>
              <label className='text-gray-600 mb-2 block'>Phone Number</label>
              <input
                className='input-box'
                type='text'
                placeholder='Enter Phone Number'
              />
            </div>
            <div className='mt-4'>
              <button
                type='submit'
                className='block text-center bg-primary border border-primary text-white px-4 py-3 font-medium rounded-md hover:bg-transparent hover:border-primary hover:text-primary'
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

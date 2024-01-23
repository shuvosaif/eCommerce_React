export default function Checkoutwrapper() {
  return (
    <div className='container gap-6 grid grid-cols-12 items-start pb-16 pt-4'>
      <div className='col-span-8 border border-gray-200 p-4 rounded'>
        <h3 className='text-lg font-medium capitalize mb-4'>checkout</h3>
        <div className='space-y-4'>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='text-gray-600 mb-2 block'>
                First Name <span className='text-primary'>*</span>
              </label>
              <input type='text' className='input-box' />
            </div>
            <div>
              <label className='text-gray-600 mb-2 block'>
                Last Name <span className='text-primary'>*</span>
              </label>
              <input type='text' className='input-box' />
            </div>
          </div>
          <div>
            <label className='text-gray-600 mb-2 block'>Company Name</label>
            <input type='text' className='input-box' />
          </div>
          <div>
            <label className='text-gray-600 mb-2 block'>
              Country/Region<span className='text-primary'>*</span>
            </label>
            <input type='text' className='input-box' />
          </div>
          <div>
            <label className='text-gray-600 mb-2 block'>
              Street Address<span className='text-primary'>*</span>
            </label>
            <input type='text' className='input-box' />
          </div>
          <div>
            <label className='text-gray-600 mb-2 block'>
              Town/City<span className='text-primary'>*</span>
            </label>
            <input type='text' className='input-box' />
          </div>
          <div>
            <label className='text-gray-600 mb-2 block'>
              Zip Code <span className='text-primary'>*</span>
            </label>
            <input type='text' className='input-box' />
          </div>
          <div>
            <label className='text-gray-600 mb-2 block'>
              Phone Number<span className='text-primary'>*</span>
            </label>
            <input type='text' className='input-box' />
          </div>
          <div>
            <label className='text-gray-600 mb-2 block'>
              Email Address <span className='text-primary'>*</span>
            </label>
            <input type='text' className='input-box' />
          </div>
        </div>
      </div>

      <div className='col-span-4 border border-gray-200 p-4 rounded'>
        <h4 className='text-gray-800 text-lg mb-4 font-medium uppercase'>
          order summary
        </h4>
        <div className='space-y-2'>
          <div className='flex justify-between'>
            <div>
              <h5 className='text-gray-800 font-medium'>Italian Shape Sofa</h5>
              <p className='text-sm text-gray-600'>Size: M</p>
            </div>
            <p className='text-gray-600'>x3</p>
            <p className='text-gray-800 font-medium'>$320</p>
          </div>
        </div>
        <div className='space-y-2'>
          <div className='flex justify-between'>
            <div>
              <h5 className='text-gray-800 font-medium'>Italian Shape Sofa</h5>
              <p className='text-sm text-gray-600'>Size: M</p>
            </div>
            <p className='text-gray-600'>x3</p>
            <p className='text-gray-800 font-medium'>$320</p>
          </div>
        </div>
        <div className='space-y-2'>
          <div className='flex justify-between'>
            <div>
              <h5 className='text-gray-800 font-medium'>Italian Shape Sofa</h5>
              <p className='text-sm text-gray-600'>Size: M</p>
            </div>
            <p className='text-gray-600'>x3</p>
            <p className='text-gray-800 font-medium'>$320</p>
          </div>
        </div>
        <div className='flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase'>
          <p>Subtotal</p>
          <p>$320</p>
        </div>
        <div className='flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase'>
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className='flex justify-between text-gray-800 font-medium py-3 uppercase'>
          <p className='font font-semibold'>Total</p>
          <p>$320</p>
        </div>
        <div className='flex items-center mb-4 mt-2'>
          <input
            type='checkbox'
            className='text-primary focus:ring-0 rounded-md cursor-pointer w-3 h-3'
          />
          <label className='text-gray-600 ml-3 cursor-pointer text-sm'>
            Agree to our
            <a href='#' className='text-primary'>
              {' '}
              terms & conditions{' '}
            </a>
          </label>
        </div>
        <a
          href='#'
          className='w-full block text-center bg-primary border border-primary text-white px-4 py-3 font-medium rounded-md hover:bg-transparent hover:border-primary'
        >
          Place Order
        </a>
      </div>
    </div>
  )
}

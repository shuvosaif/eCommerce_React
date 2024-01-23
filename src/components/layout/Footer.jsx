import logo from '../../assets/images/logo.png'

export default function Footer() {
  return (
    <footer className='bg-white pt-16 pb-12 border-t border-gray-100'>
      <div className='container grid grid-cols-3'>
        <div className='col-span-1 space-y-8'>
          <img src={logo} className='w-10' />
          <p className='text-gray-500'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className='flex space-x-6'>
            <a href='#' className='text-gray-400 hover:text-gray-500'>
              <i className='fab fa-facebook'></i>
            </a>
            <a href='#' className='text-gray-400 hover:text-gray-500'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='#' className='text-gray-400 hover:text-gray-500'>
              <i className='fab fa-instagram'></i>
            </a>
            <a href='#' className='text-gray-400 hover:text-gray-500'>
              <i className='fab fa-linkedin-in'></i>
            </a>
          </div>
        </div>
        <div className='col-span-2 grid grid-cols-2 gap-8'>
          <div className='grid grid-cols-2 gap-8'>
            <div>
              <h3 className='text-sm font-semibold text-gray-400 uppercase tracking-wider'>
                Solutions
              </h3>
              <div className='mt-4 space-y-4'>
                <a
                  href='#'
                  className='text-base text-gray-500 hover:text-gray-900 block'
                >
                  Marketing
                </a>
                <a
                  href='#'
                  className='text-base text-gray-500 hover:text-gray-900 block'
                >
                  Analytics
                </a>
                <a
                  href='#'
                  className='text-base text-gray-500 hover:text-gray-900 block'
                >
                  Commerce
                </a>
                <a
                  href='#'
                  className='text-base text-gray-500 hover:text-gray-900 block'
                >
                  Insights
                </a>
              </div>
            </div>
            <div>
              <h3 className='text-sm font-semibold text-gray-400 uppercase tracking-wider'>
                Support
              </h3>
              <div className='mt-4 space-y-4'>
                <a
                  href='#'
                  className='text-base text-gray-500 hover:text-gray-900 block'
                >
                  Pricing
                </a>
                <a
                  href='#'
                  className='text-base text-gray-500 hover:text-gray-900 block'
                >
                  Documentation
                </a>
                <a
                  href='#'
                  className='text-base text-gray-500 hover:text-gray-900 block'
                >
                  API
                </a>
                <a
                  href='#'
                  className='text-base text-gray-500 hover:text-gray-900 block'
                >
                  Insights
                </a>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-8'>
            <div>
              <h3 className='text-sm font-semibold text-gray-400 uppercase tracking-wider'>
                Solutions
              </h3>
              <div className='mt-4 space-y-4'>
                <a
                  href='#'
                  className='text-base text-gray-500 hover:text-gray-900 block'
                >
                  Marketing
                </a>
                <a
                  href='#'
                  className='text-base text-gray-500 hover:text-gray-900 block'
                >
                  Analytics
                </a>
                <a
                  href='#'
                  className='text-base text-gray-500 hover:text-gray-900 block'
                >
                  Commerce
                </a>
                <a
                  href='#'
                  className='text-base text-gray-500 hover:text-gray-900 block'
                >
                  Insights
                </a>
              </div>
            </div>
            <div>
              <h3 className='text-sm font-semibold text-gray-400 uppercase tracking-wider'>
                Support
              </h3>
              <div className='mt-4 space-y-4'>
                <a
                  href='#'
                  className='text-base text-gray-500 hover:text-gray-900 block'
                >
                  Pricing
                </a>
                <a
                  href='#'
                  className='text-base text-gray-500 hover:text-gray-900 block'
                >
                  Documentation
                </a>
                <a
                  href='#'
                  className='text-base text-gray-500 hover:text-gray-900 block'
                >
                  API
                </a>
                <a
                  href='#'
                  className='text-base text-gray-500 hover:text-gray-900 block'
                >
                  Insights
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

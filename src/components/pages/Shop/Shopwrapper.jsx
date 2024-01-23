import chair from '../../../assets/images/office-chair.jpg'

export default function Shopwrapper() {
  return (
    <div className='container grid grid-cols-4 gap-6 pt-4 pb-16 items-start'>
      <div className='col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden'>
        <div className='divide-y divide-gray-200 space-y-5'>
          <div>
            <h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'>
              Categories
            </h3>
            <div className='space-y-2'>
              <div className='flex items-center'>
                <input
                  type='checkbox'
                  id='cat-1'
                  className='text-primary focus:ring-0 rounded-sm cursor-pointer'
                />
                <label className='text-gray-600 ml-3 cursor-pointer'>
                  Bedroom
                </label>
                <div className='ml-auto text-gray-600 text-sm'>(15)</div>
              </div>
              <div className='flex items-center'>
                <input
                  type='checkbox'
                  id='cat-1'
                  className='text-primary focus:ring-0 rounded-sm cursor-pointer'
                />
                <label className='text-gray-600 ml-3 cursor-pointer'>
                  Sofa
                </label>
                <div className='ml-auto text-gray-600 text-sm'>(15)</div>
              </div>
              <div className='flex items-center'>
                <input
                  type='checkbox'
                  id='cat-1'
                  className='text-primary focus:ring-0 rounded-sm cursor-pointer'
                />
                <label className='text-gray-600 ml-3 cursor-pointer'>
                  Office
                </label>
                <div className='ml-auto text-gray-600 text-sm'>(15)</div>
              </div>
              <div className='flex items-center'>
                <input
                  type='checkbox'
                  id='cat-1'
                  className='text-primary focus:ring-0 rounded-sm cursor-pointer'
                />
                <label className='text-gray-600 ml-3 cursor-pointer'>
                  Outdoor
                </label>
                <div className='ml-auto text-gray-600 text-sm'>(15)</div>
              </div>
            </div>
          </div>
          <div className='pt-4'>
            <h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'>
              brands
            </h3>
            <div className='space-y-2'>
              <div className='flex items-center'>
                <input
                  type='checkbox'
                  id='cat-1'
                  className='text-primary focus:ring-0 rounded-sm cursor-pointer'
                />
                <label className='text-gray-600 ml-3 cursor-pointer'>
                  Dominik
                </label>
                <div className='ml-auto text-gray-600 text-sm'>(15)</div>
              </div>
              <div className='flex items-center'>
                <input
                  type='checkbox'
                  id='cat-1'
                  className='text-primary focus:ring-0 rounded-sm cursor-pointer'
                />
                <label className='text-gray-600 ml-3 cursor-pointer'>
                  Karl
                </label>
                <div className='ml-auto text-gray-600 text-sm'>(15)</div>
              </div>
              <div className='flex items-center'>
                <input
                  type='checkbox'
                  id='cat-1'
                  className='text-primary focus:ring-0 rounded-sm cursor-pointer'
                />
                <label className='text-gray-600 ml-3 cursor-pointer'>
                  Maxing
                </label>
                <div className='ml-auto text-gray-600 text-sm'>(15)</div>
              </div>
              <div className='flex items-center'>
                <input
                  type='checkbox'
                  id='cat-1'
                  className='text-primary focus:ring-0 rounded-sm cursor-pointer'
                />
                <label className='text-gray-600 ml-3 cursor-pointer'>
                  Ernest
                </label>
                <div className='ml-auto text-gray-600 text-sm'>(15)</div>
              </div>
            </div>
          </div>
          <div className='pt-4'>
            <h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'>
              Price
            </h3>
            <div className='mt-4 flex items-center'>
              <input
                type='text'
                className='w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded'
                placeholder='min'
              />
              <span className='mx-3 text-gray-500'>-</span>
              <input
                type='text'
                className='w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded'
                placeholder='max'
              />
            </div>
          </div>
          <div className='pt-4'>
            <h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'>
              Size
            </h3>
            <div className='flex items-center gap-2'>
              <div className='size-selector'>
                <input
                  type='radio'
                  name='size'
                  className='hidden'
                  id='size-xs'
                />
                <label className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                  XS
                </label>
              </div>
              <div className='size-selector'>
                <input
                  type='radio'
                  name='size'
                  className='hidden'
                  id='size-s'
                />
                <label className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                  S
                </label>
              </div>
              <div className='size-selector'>
                <input
                  type='radio'
                  name='size'
                  className='hidden'
                  id='size-m'
                />
                <label className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                  M
                </label>
              </div>
              <div className='size-selector'>
                <input
                  type='radio'
                  name='size'
                  className='hidden'
                  id='size-l'
                />
                <label className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                  L
                </label>
              </div>
              <div className='size-selector'>
                <input
                  type='radio'
                  name='size'
                  className='hidden'
                  id='size-xl'
                />
                <label className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                  XL
                </label>
              </div>
            </div>
          </div>
          <div className='pt-4'>
            <h3 className='text-xl text-gray-800 uppercase font-medium'>
              Color
            </h3>
            <div className='flex items-center gap-2'>
              <div className='color-selector'>
                <input
                  type='radio'
                  name='color'
                  className='hidden'
                  id='color-red'
                />
                <label
                  className='border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block'
                  //   style='background-color: #fc3d57'
                ></label>
              </div>
              <div className='color-selector'>
                <input
                  type='radio'
                  name='color'
                  className='hidden'
                  id='color-white'
                />
                <label
                  className='border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block'
                  //   style='background-color: #fff'
                ></label>
              </div>
              <div className='color-selector'>
                <input
                  type='radio'
                  name='color'
                  className='hidden'
                  id='color-black'
                />
                <label
                  className='border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block'
                  //   style='background-color: #000'
                ></label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-3'>
        <div className='div flex items-center mb-4'>
          <select className='w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary'>
            <option>Default Sorting</option>
            <option>Price low-high</option>
            <option>Price high-low</option>
            <option>Latest product</option>
          </select>

          <div className='flex gap-2 ml-auto'>
            <div className='border border-primary w-10 h-9 flex items-center justify- text-white bg-primary rounded cursor-pointer'>
              <i className='fas fa-th'></i>
            </div>
            <div className='border border-gray-300 w-10 h-9 flex items-center justify- text-gray-600 rounded cursor-pointer'>
              <i className='fas fa-list'></i>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-6'>
          <div className='bg-white shadow rounded overflow-hidden'>
            <div className='relative'>
              <img src={chair} className='w-full' />
              <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2'>
                <a
                  href='#'
                  className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
                >
                  <i className='fas fa-search'></i>
                </a>
                <a
                  href='#'
                  className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
                >
                  <i className='fa fa-heart'></i>
                </a>
              </div>
            </div>
            <div className='pt-4 pb-3 px-4'>
              <a href='#'>
                <h4 className='uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition'>
                  Guyer Chair
                </h4>
              </a>
              <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                <p className='text-xl text-primary font-semibold'>$45.00</p>
                <p className='text-sm text-gray-400 line-through'>$55.00</p>
              </div>
              <div className='flex items-center'>
                <div className='flex gap-1 text-sm text-yellow-400'>
                  <span>
                    <i className='fas fa-star'></i>
                  </span>
                  <span>
                    <i className='fas fa-star'></i>
                  </span>
                  <span>
                    <i className='fas fa-star'></i>
                  </span>
                  <span>
                    <i className='fas fa-star'></i>
                  </span>
                  <span>
                    <i className='fas fa-star'></i>
                  </span>
                </div>
                <div className='text-xs text-gray-500 ml-3'>(150)</div>
              </div>
            </div>
            <a
              href='#'
              className='block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition'
            >
              Add to Cart
            </a>
          </div>
          <div className='bg-white shadow rounded overflow-hidden'>
            <div className='relative'>
              <img src={chair} className='w-full' />
              <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2'>
                <a
                  href='#'
                  className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
                >
                  <i className='fas fa-search'></i>
                </a>
                <a
                  href='#'
                  className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
                >
                  <i className='fa fa-heart'></i>
                </a>
              </div>
            </div>
            <div className='pt-4 pb-3 px-4'>
              <a href='#'>
                <h4 className='uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition'>
                  Guyer Chair
                </h4>
              </a>
              <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                <p className='text-xl text-primary font-semibold'>$45.00</p>
                <p className='text-sm text-gray-400 line-through'>$55.00</p>
              </div>
              <div className='flex items-center'>
                <div className='flex gap-1 text-sm text-yellow-400'>
                  <span>
                    <i className='fas fa-star'></i>
                  </span>
                  <span>
                    <i className='fas fa-star'></i>
                  </span>
                  <span>
                    <i className='fas fa-star'></i>
                  </span>
                  <span>
                    <i className='fas fa-star'></i>
                  </span>
                  <span>
                    <i className='fas fa-star'></i>
                  </span>
                </div>
                <div className='text-xs text-gray-500 ml-3'>(150)</div>
              </div>
            </div>
            <a
              href='#'
              className='block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition'
            >
              Add to Cart
            </a>
          </div>
          <div className='bg-white shadow rounded overflow-hidden'>
            <div className='relative'>
              <img src={chair} className='w-full' />
              <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2'>
                <a
                  href='#'
                  className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
                >
                  <i className='fas fa-search'></i>
                </a>
                <a
                  href='#'
                  className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
                >
                  <i className='fa fa-heart'></i>
                </a>
              </div>
            </div>
            <div className='pt-4 pb-3 px-4'>
              <a href='#'>
                <h4 className='uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition'>
                  Guyer Chair
                </h4>
              </a>
              <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                <p className='text-xl text-primary font-semibold'>$45.00</p>
                <p className='text-sm text-gray-400 line-through'>$55.00</p>
              </div>
              <div className='flex items-center'>
                <div className='flex gap-1 text-sm text-yellow-400'>
                  <span>
                    <i className='fas fa-star'></i>
                  </span>
                  <span>
                    <i className='fas fa-star'></i>
                  </span>
                  <span>
                    <i className='fas fa-star'></i>
                  </span>
                  <span>
                    <i className='fas fa-star'></i>
                  </span>
                  <span>
                    <i className='fas fa-star'></i>
                  </span>
                </div>
                <div className='text-xs text-gray-500 ml-3'>(150)</div>
              </div>
            </div>
            <a
              href='#'
              className='block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition'
            >
              Add to Cart
            </a>
          </div>
          <div className='bg-white shadow rounded overflow-hidden'>
            <div className='relative'>
              <img src={chair} className='w-full' />
              <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2'>
                <a
                  href='#'
                  className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
                >
                  <i className='fas fa-search'></i>
                </a>
                <a
                  href='#'
                  className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
                >
                  <i className='fa fa-heart'></i>
                </a>
              </div>
            </div>
            <div className='pt-4 pb-3 px-4'>
              <a href='#'>
                <h4 className='uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition'>
                  Guyer Chair
                </h4>
              </a>
              <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                <p className='text-xl text-primary font-semibold'>$45.00</p>
                <p className='text-sm text-gray-400 line-through'>$55.00</p>
              </div>
              <div className='flex items-center'>
                <div className='flex gap-1 text-sm text-yellow-400'>
                  <span>
                    <i className='fas fa-star'></i>
                  </span>
                  <span>
                    <i className='fas fa-star'></i>
                  </span>
                  <span>
                    <i className='fas fa-star'></i>
                  </span>
                  <span>
                    <i className='fas fa-star'></i>
                  </span>
                  <span>
                    <i className='fas fa-star'></i>
                  </span>
                </div>
                <div className='text-xs text-gray-500 ml-3'>(150)</div>
              </div>
            </div>
            <a
              href='#'
              className='block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition'
            >
              Add to Cart
            </a>
          </div>
          <div className='bg-white shadow rounded overflow-hidden'>
            <div className='relative'>
              <img src={chair} className='w-full' />
              <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2'>
                <a
                  href='#'
                  className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
                >
                  <i className='fas fa-search'></i>
                </a>
                <a
                  href='#'
                  className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
                >
                  <i className='fa fa-heart'></i>
                </a>
              </div>
            </div>
            <div className='pt-4 pb-3 px-4'>
              <a href='#'>
                <h4 className='uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition'>
                  Guyer Chair
                </h4>
              </a>
              <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                <p className='text-xl text-primary font-semibold'>$45.00</p>
                <p className='text-sm text-gray-400 line-through'>$55.00</p>
              </div>
              <div className='flex items-center'>
                <div className='flex gap-1 text-sm text-yellow-400'>
                  <span>
                    <i className='fas fa-star'></i>
                  </span>
                  <span>
                    <i className='fas fa-star'></i>
                  </span>
                  <span>
                    <i className='fas fa-star'></i>
                  </span>
                  <span>
                    <i className='fas fa-star'></i>
                  </span>
                  <span>
                    <i className='fas fa-star'></i>
                  </span>
                </div>
                <div className='text-xs text-gray-500 ml-3'>(150)</div>
              </div>
            </div>
            <a
              href='#'
              className='block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition'
            >
              Add to Cart
            </a>
          </div>
          <div className='bg-white shadow rounded overflow-hidden'>
            <div className='relative'>
              <img src={chair} className='w-full' />
              <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2'>
                <a
                  href='#'
                  className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
                >
                  <i className='fas fa-search'></i>
                </a>
                <a
                  href='#'
                  className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
                >
                  <i className='fa fa-heart'></i>
                </a>
              </div>
            </div>
            <div className='pt-4 pb-3 px-4'>
              <a href='#'>
                <h4 className='uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition'>
                  Guyer Chair
                </h4>
              </a>
              <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                <p className='text-xl text-primary font-semibold'>$45.00</p>
                <p className='text-sm text-gray-400 line-through'>$55.00</p>
              </div>
              <div className='flex items-center'>
                <div className='flex gap-1 text-sm text-yellow-400'>
                  <span>
                    <i className='fas fa-star'></i>
                  </span>
                  <span>
                    <i className='fas fa-star'></i>
                  </span>
                  <span>
                    <i className='fas fa-star'></i>
                  </span>
                  <span>
                    <i className='fas fa-star'></i>
                  </span>
                  <span>
                    <i className='fas fa-star'></i>
                  </span>
                </div>
                <div className='text-xs text-gray-500 ml-3'>(150)</div>
              </div>
            </div>
            <a
              href='#'
              className='block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition'
            >
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

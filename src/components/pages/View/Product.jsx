export default function Product() {
  return (
    <div className='container grid grid-cols-2 gap-6'>
      <div>
        <img src='images/dinning-table.jpg' alt='' className='w-full' />
        <div className='grid grid-cols-5 gap-4 mt-4'>
          <img
            src='images/dinning-table.jpg'
            className='w-full cursor-pointer border border-primary'
          />
          <img
            src='images/dinning-table.jpg'
            className='w-full cursor-pointer border'
          />
          <img
            src='images/dinning-table.jpg'
            className='w-full cursor-pointer border'
          />
          <img
            src='images/dinning-table.jpg'
            className='w-full cursor-pointer border'
          />
          <img
            src='images/dinning-table.jpg'
            className='w-full cursor-pointer border'
          />
        </div>
      </div>
      <div>
        <h2 className='text-3xl font-medium uppercase mb-2'>
          Italian Dinning Table
        </h2>
        <div className='flex items-center mb-4'>
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
          <div className='text-xs text-gray-500 ml-3'>(150 Reviews)</div>
        </div>
        <div className='space-y-2'>
          <p className='text-gray-800 font-semibold space-x-2'>
            <span>Availability:</span>
            <span className='text-green-600'>In Stock</span>
          </p>
          <p className='space-x-2'>
            <span className='text-gray-800 font-semibold'>Brand:</span>
            <span className='text-gray-600'>Hatil</span>
          </p>
          <p className='space-x-2'>
            <span className='text-gray-800 font-semibold'>Category:</span>
            <span className='text-green-600'>Table</span>
          </p>
          <p className='space-x-2'>
            <span className='text-gray-800 font-semibold'>SKU:</span>
            <span className='text-gray-600'>BE45VGRT</span>
          </p>
        </div>
        <div className='flex items-baseline mb-1 space-x-2 font-roboto mt-4'>
          <p className='text-2xl text-primary font-semibold'>$45.00</p>
          <p className='text-base text-gray-400 line-through'>$55.00</p>
        </div>
        <p className='mt-4'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
          dolore eligendi obcaecati, aliquid nam aperiam.
        </p>
        <div className='pt-4'>
          <h3 className='text-sm text-gray-800 uppercase mb-1'>Size</h3>
          <div className='flex items-center gap-2'>
            <div className='size-selector'>
              <input type='radio' name='size' className='hidden' id='size-xs' />
              <label className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                XS
              </label>
            </div>
            <div className='size-selector'>
              <input type='radio' name='size' className='hidden' id='size-s' />
              <label className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                S
              </label>
            </div>
            <div className='size-selector'>
              <input type='radio' name='size' className='hidden' id='size-m' />
              <label className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                M
              </label>
            </div>
            <div className='size-selector'>
              <input type='radio' name='size' className='hidden' id='size-l' />
              <label className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                L
              </label>
            </div>
            <div className='size-selector'>
              <input type='radio' name='size' className='hidden' id='size-xl' />
              <label className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                XL
              </label>
            </div>
          </div>
        </div>
        <div className='pt-4'>
          <h3 className='text-sm text-gray-800 uppercase mb-1'>Color</h3>
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
                style='background-color: #fc3d57'
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
                style='background-color: #fff'
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
                style='background-color: #000'
              ></label>
            </div>
          </div>
        </div>
        <div className='mt-4'>
          <h3 className='text-sm text-gray-800 uppercase mb-1'></h3>
          <div className='flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max'>
            <div className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'>
              -
            </div>
            <div className='h-8 w-8 text-base flex items-center justify-center'>
              4
            </div>
            <div className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'>
              +
            </div>
          </div>
        </div>
        <div className='flex gap-3 border-b border-gray-200 pb-5 mt-6'>
          <a
            href='#'
            className='bg-primary border border-primary text-white px-8 py-2 fontmedium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary'
          >
            <i className='fas fa-shopping-bag'></i> Add to Cart
          </a>
          <a
            href='#'
            className='border border-gray-300 text-gray-600 px-8 py-2 fontmedium rounded uppercase flex items-center gap-2 hover:text-primary'
          >
            <i className='fas fa-heart'></i> Wish List
          </a>
        </div>
        <div className='flex gap-3 mt-4'>
          <a
            href='#'
            className='text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray flex items-center justify-center'
          >
            <i className='fab fa-facebook'></i>
          </a>
          <a
            href='#'
            className='text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray flex items-center justify-center'
          >
            <i className='fab fa-twitter'></i>
          </a>
          <a
            href='#'
            className='text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray flex items-center justify-center'
          >
            <i className='fab fa-instagram'></i>
          </a>
        </div>
      </div>
    </div>
  )
}

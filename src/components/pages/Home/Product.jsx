
import Data from '../../../../Products'
import React, { useState, useEffect } from 'react'

export default function Product() {
  const [brand, setBrand] = useState([])
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(Data)
    setCategories(...new Set(products.map((p) => p.category)))
    setBrand(...new Set(products.map((p) => p.brand)))
  }, [])

  return (
    <div className='container pb-16'>
      <h2 className='text-2xl font-medium text-gray-800 uppercase mb-6'>
        recommended for you
      </h2>
      <div className='grid grid-cols-4 gap-6'>
        {products.map((p) => (
          <div className='bg-white shadow rounded overflow-hidden'>
            <div className='relative'>
              <img
                // src='https://us.123rf.com/450wm/svetlam87/svetlam871711/svetlam87171100049/90042914-paper-bag-with-fresh-organic-food-shopping-at-the-grocery-store.jpg?ver=6'
                src={`./src/assets/images/${p.image}`}
                className='w-full h-96 object-center'
              />
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
                  {p.name}
                </h4>
              </a>
              <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                <p className='text-xl text-primary font-semibold'>{p.price}</p>
                <p className='text-sm text-gray-400 line-through'>$55.00</p>
              </div>
              <div className='flex items-center'>
                <div className='flex gap-1 text-sm'>
                  {[...Array(5)].map((_, i) => (
                    <span>
                      <i
                        className={`${
                          i + 1 <= p.rating ? `fa-solid` : `fa-regular`
                        } fa-star text-yellow-400`}
                      ></i>
                    </span>
                  ))}
                </div>
                <div className='text-xs text-gray-500 ml-3'>({p.rating})</div>
              </div>
            </div>
            <a
              href='#'
              className='block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition'
            >
              Add to Cart
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

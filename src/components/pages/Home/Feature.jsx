import van from '../../../assets/images/van.png'
import moneyback from '../../../assets/images/money-back.png'
import service from '../../../assets/images/service.png'

export default function Feature() {
  return (
    <div className='container py-16'>
      <div className='w-10/12 grid grid-cols-3 gap-6 mx-auto justify-center'>
        <div className='border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5'>
          <img src={van} className='w-12 h-12 object-contain' />
          <div>
            <h4 className='font-medium capitalize text-lg'>Free Shipping</h4>
            <p className='text-gray-500 text-sm'>Order Over $200</p>
          </div>
        </div>
        <div className='border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5'>
          <img src={moneyback} className='w-12 h-12 object-contain' />
          <div>
            <h4 className='font-medium capitalize text-lg'>Money returns</h4>
            <p className='text-gray-500 text-sm'>30 Days money returns</p>
          </div>
        </div>
        <div className='border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5'>
          <img src={service} className='w-12 h-12 object-contain' />
          <div>
            <h4 className='font-medium capitalize text-lg'>24/7 Support</h4>
            <p className='text-gray-500 text-sm'>Customer Support</p>
          </div>
        </div>
      </div>
    </div>
  )
}

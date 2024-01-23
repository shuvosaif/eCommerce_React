
export default function Breadcum() {
  return (
    <div className='container py-4 flex items-center gap-3'>
      <a href='index.html' className='text-primary text-base'>
        <i className='fas fa-home'></i>
      </a>
      <span className='text-sm text-gray-400'>
        <i className='fas fa-chevron-right'></i>
      </span>
      <p className='text-gray-600 font-medium'>Product View</p>
    </div>
  )
}

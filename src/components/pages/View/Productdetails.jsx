
export default function Productdetails() {
  return (
    <div className='container pb-16'>
      <h3 className='border-b border-gray-200 font-roboto text-gray-800 font-medium'>
        Product Details
      </h3>
      <div className='w-3/5 pt-6'>
        <div className='text-gray-600 space-y-3'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            nostrum, voluptates neque dolorum magni maiores natus. Similique
            harum amet sit soluta maxime consequuntur ipsa pariatur earum omnis,
            quas dolores neque!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            nostrum, voluptates neque dolorum magni maiores natus. Similique
            harum amet sit soluta maxime consequuntur ipsa pariatur earum omnis,
            quas dolores neque!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            nostrum, voluptates neque dolorum magni maiores natus. Similique
            harum amet sit soluta maxime consequuntur ipsa pariatur earum omnis,
            quas dolores neque!
          </p>
        </div>
        <table className='table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6'>
          <tr>
            <th className='py-2 px-4 border border-gray-300 w-40 font-medium'>
              Color
            </th>
            <td className='py-3 px-4 border border-gray-300'>Black, Brown, Red</td>
          </tr>
          <tr>
            <th className='py-2 px-4 border border-gray-300 w-40 font-medium'>
              Color
            </th>
            <td className='py-3 px-4 border border-gray-300'>Black, Brown, Red</td>
          </tr>
          <tr>
            <th className='py-2 px-4 border border-gray-300 w-40 font-medium'>
              Color
            </th>
            <td className='py-3 px-4 border border-gray-300'>Black, Brown, Red</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

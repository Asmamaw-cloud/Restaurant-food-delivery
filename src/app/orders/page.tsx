import React from 'react'

const OrdersPage
  = () => {
    return (
      <div className=' p-4 lg:px-20 xl:px-40'>
        <table className=' w-full border-separate border-spacing-3'>
          <thead>
            <tr className=' text-left'>
              <th className=' hidden md:block'>Order ID</th>
              <th>Date</th>
              <th>Price</th>
              <th className=' hidden md:block'>Product</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className=' text-sm md:text-base bg-red-50'>
              <td className=' hidden md:block py-6 px-1'>1234567821</td>
              <td className=' py-6 px-1'>19.11.2017</td>
              <td className=' py-6 px-1'>89.9</td>
              <td className=' hidden md:block py-6 px-1'>Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2) </td>
              <td className=' py-6 px-1'>On the way (approx. 10min)... </td>
            </tr>
            <tr className=' text-sm md:text-base odd:bg-gray-100'>
              <td className=' hidden md:block py-6 px-1'>1234567821</td>
              <td className=' py-6 px-1'>19.11.2017</td>
              <td className=' py-6 px-1'>89.9</td>
              <td className=' hidden md:block py-6 px-1'>Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2) </td>
              <td className=' py-6 px-1'>On the way (approx. 10min)... </td>
            </tr>
            <tr className=' text-sm md:text-base odd:bg-gray-100'>
              <td className=' hidden md:block py-6 px-1'>1234567821</td>
              <td className=' py-6 px-1'>19.11.2017</td>
              <td className=' py-6 px-1'>89.9</td>
              <td className=' hidden md:block py-6 px-1'>Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2) </td>
              <td className=' py-6 px-1'>On the way (approx. 10min)... </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

export default OrdersPage

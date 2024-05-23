import React from 'react'

// 'react-currency-format' is a React library used for formatting and displaying currency values.
import CurrencyFormat from 'react-currency-format';


function SubTotal() {

  return (
    <>
      <CurrencyFormat renderText={function (subTotalValue) {
        return (
          <div className='px-2 py-2 bg-white'>
            <h2 className='text-2xl'>Subtotal <span className='font-semibold'> {subTotalValue} </span> </h2>
            <p className='cursor-pointer mt-2'>
              <span className='font-medium text-gray-500'>EMI Available </span>
              <span className='font-semibold' style={{ color: "#007185" }}>Details</span>
            </p>
            <button className='w-full mt-4 text-black py-1.5 bg-yellow-400 hover:bg-amber-400 rounded-2xl font-medium'>Proceed to Buy (0 Items)</button>
            <p className='flex items-center gap-2 mt-4'>
              <input type="checkbox" id='checkboxLabel' className='p-2 w-6 h-6' />
              <label htmlFor="checkboxLabel" className=''>Send as a gift. Include custom message</label>
            </p>
          </div>
        )
      }}
      decimalScale={0}
      thousandSeparator={true}
      prefix='₹'
      displayType='text'
      value={0} />
    </>
  )
}

export default SubTotal
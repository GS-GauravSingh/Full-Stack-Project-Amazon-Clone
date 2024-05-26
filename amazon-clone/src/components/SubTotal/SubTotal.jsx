import React, { useEffect, useState } from 'react'
import useProductContext from '../../context/ProductContext/useProductContext'

// 'react-currency-format' is a React library used for formatting and displaying currency values.
import CurrencyFormat from 'react-currency-format';


function SubTotal() {

  // Accessing Product Context to calculate to total price of all products added to cart.
  const { cart } = useProductContext();

  // State variable to calculate and store total price of all products added to cart.
  const [ totalCost, setTotalCost ] = useState(0);
  
  // Function to calculate total cost's of products.
  function calculateTotalCostOfProducts(){
    setTotalCost(0);
      cart.forEach((element) => {
        console.log(element.productPrice);
        setTotalCost((prevCost) => (
          // Product Price is in the string format like this: "1,29,999". So, before converting this to number, we need to remove all the comma's (','). 
          // "replaceAll()" is used to replace all occurences of comma's with an empty (''). 
          prevCost + Number(element.productPrice.replaceAll(',',''))
        ))
      });
  }

  // We need to run 'calculateTotalCostOfProducts()' method everytime, when there is a change in the product context.
  useEffect(function(){
    calculateTotalCostOfProducts();
  }, [cart]);

  

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
            <button className='w-full mt-4 text-black py-1.5 bg-yellow-400 hover:bg-amber-400 rounded-2xl font-medium'>Proceed to Buy ({cart.length} Items)</button>
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
        value={totalCost} />
    </>
  )
}

export default SubTotal
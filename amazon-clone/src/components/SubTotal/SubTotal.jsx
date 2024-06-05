import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';


function SubTotal() {

  // `useSelector()` is a hook provided by the React-Redux library that allows functional components to extract data from the Redux store. `useSelector()` has access to the state - the current state of redux store. 
  const cart = useSelector((state) => state.cart);


  // State variable to calculate and store total price of all products added to cart.
  const [totalCost, setTotalCost] = useState(0);

  // You can convert the numbers into currencies using the Intl.NumberFormat() method in JavaScript. For example, 14340 would be $14,340.00 (US Dollars) or ₹14,340.00 (Rupees) or €14.340,00 (Euross) and so on.
  let indianRupee = Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR"
  })


  // Function to calculate total cost's of products.
  function calculateTotalCostOfProducts() {
    setTotalCost(0);
    cart.forEach((element) => {
      setTotalCost((prevCost) => (
        // Product Price is in the string format like this: "1,29,999". So, before converting this to number, we need to remove all the comma's (','). 
        // "replaceAll()" is used to replace all occurences of comma's with an empty (''). 
        prevCost + Number(element.productPrice.replaceAll(',', ''))
      ))
    });
  }

  // We need to run 'calculateTotalCostOfProducts()' method everytime, when there is a change in the product context.
  useEffect(function () {
    calculateTotalCostOfProducts();
  }, [cart]);



  return (
    <>

      <div className='px-2 py-2 bg-white'>
        <h2 className='text-2xl'>Subtotal <span className='font-semibold'> {indianRupee.format(totalCost)} </span> </h2>
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

    </>
  )
}

export default SubTotal
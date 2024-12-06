import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const Order = () => {

  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className="flex items-start justify-between gap-[50px] mt-[100px]">
      <div className="w-full max-w-[max(30%,500px)]">
        <p className="text-[30px] font-semibold mb-[50px]">
          Delivery Info
        </p>
        <div className="flex gap-2.5">
          <input type="text" placeholder='First Name' className="mb-4 w-full p-2.5 border border-gray-300 rounded outline-none focus:outline-black" />
          <input type="text" placeholder='Last Name'  className="mb-4 w-full p-2.5 border border-gray-300 rounded outline-none focus:outline-black"/>
        </div>
        <input type="Email" placeholder='Email' className="mb-4 w-full p-2.5 border border-gray-300 rounded outline-none focus:outline-black"/>
        <input type="text" placeholder='street' className="mb-4 w-full p-2.5 border border-gray-300 rounded outline-none focus:outline-black"/>
        <div className="flex gap-2.5">
          <input type="text" placeholder='City' className="mb-4 w-full p-2.5 border border-gray-300 rounded outline-none focus:outline-black"/>
          <input type="text" placeholder='State' className="mb-4 w-full p-2.5 border border-gray-300 rounded outline-none focus:outline-black"/>
        </div>
        <div className="flex gap-2.5">
          <input type="text" placeholder='Zip code' className="mb-4 w-full p-2.5 border border-gray-300 rounded outline-none focus:outline-black"/>
          <input type="text" placeholder='Country'  className="mb-4 w-full p-2.5 border border-gray-300 rounded outline-none focus:border-transparent focus:outline focus:outline-2 focus:outline-black"/>
        </div>  
        <input type="text" placeholder='Phone' className="mb-4 w-full p-2.5 border border-gray-300 rounded outline-none focus:outline-aqua"/>
      </div>

      <div className="right">
      <div className="cart-total flex-1 flex flex-col gap-6">
        <h2 className="text-2xl font-bold">Cart Totals</h2>
          <div className="space-y-4">
            <div className="cart-total-details flex justify-between text-gray-600">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="border-t border-gray-300" />
            <div className="cart-total-details flex justify-between text-gray-600">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr className="border-t border-gray-300" />
            <div className="cart-total-details flex justify-between text-gray-800 font-semibold">
              <p>Total</p>
              <p>${getTotalCartAmount()===0?0: getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button className="text-white bg-orange-400 w-full max-w-sm py-3 rounded-lg font-bold hover:bg-orange-500 transition-all duration-200 mt-10" onClick={()=>navigate('/Order')}>
              Proceed to Checkout
            </button>
          </div>
      </div>
      </div>

    </form>
  )
}

export default Order
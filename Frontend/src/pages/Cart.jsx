import React, { useContext } from 'react'
// import './Cart.css'
import {StoreContext} from '../context/StoreContext'
import { useNavigate } from 'react-router-dom';


const Cart = () => {

  const {cartItems, food_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext);
  const navigate= useNavigate();


  return (
    <div className="mt-20">
      <div className="mt-6 space-y-4 bg-white shadow-md rounded-lg p-6">
          <br />
          <hr className="border-gray-300" />

          {/* Title Row */}
          {food_list.some((item) => cartItems[item._id] > 0) && (
            <div className="grid grid-cols-4 md:grid-cols-6 items-center text-sm md:text-base my-4 text-black font-bold">
              <p className="col-span-1">Image</p>
              <p className="col-span-1 md:col-span-[1.5]">Name</p>
              <p className="col-span-1">Price</p>
              <p className="col-span-1">Quantity</p>
              <p className="hidden md:block md:col-span-1">Total</p>
              <p className="hidden md:block md:col-span-1">Action</p>
            </div>
          )}

          {/* Items List */}
          {food_list.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={item._id} className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-4 md:grid-cols-6 items-center text-sm md:text-base my-2 text-gray-800">
                    <img src={item.image} alt="" className="col-span-1 w-[100px] h-[100px] object-cover rounded" />
                    <p className="col-span-1 md:col-span-[1.5]">{item.name}</p>
                    <p className="col-span-1">${item.price.toFixed(2)}</p>
                    <p className="col-span-1">{cartItems[item._id]}</p>
                    <p className="hidden md:block md:col-span-1">${(item.price * cartItems[item._id]).toFixed(2)}</p>
                    <p
                      className="hidden md:block md:col-span-1 text-red-500 font-bold cursor-pointer hover:text-red-700 items-center justify-center"
                      onClick={() => removeFromCart(item._id)}
                    >
                      x
                    </p>
                  </div>
                  <hr className="border-gray-300 mt-2" />
                </div>
              );
            }
          })}
        </div>


  <div className="cart-bottom flex flex-col md:flex-row justify-between gap-x-20 mt-10">
  {/* Promo Code Section */}
  <div className="promo-code flex-1 flex flex-col gap-4">
    <h2 className="text-xl font-bold">If you have a promo code, enter it here</h2>
    <div className="flex gap-2">
      <input
        type="text"
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
        placeholder="Promo code"
      />
      <button
        className="text-white bg-black px-6 py-2 rounded-lg font-bold hover:bg-gray-800 transition-all duration-200"
      >
        Submit
      </button>
    </div>
  </div>

    {/* Cart Totals Section */}
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
      <button className="text-white bg-orange-400 w-full max-w-sm py-3 rounded-lg font-bold hover:bg-orange-500 transition-all duration-200" onClick={()=>navigate('/Order')}>
        Proceed to Checkout
      </button>
    </div>
  </div>
</div>

</div>

  )
}

export default Cart
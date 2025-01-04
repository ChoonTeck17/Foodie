import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext'


const DoneOrder = () => {
  const navigate = useNavigate()
  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-center text-green-500 mb-6">
          Order Placed Successfully!sssssssssssssssssssssssssssssssssssssss
        </h2>

        <p className="text-xl text-center mb-6">
          Thank you for your order! We are processing your order and will notify you once it's on its way.
        </p>

        <div className="mb-6 space-y-4">
          <h3 className="text-2xl font-semibold">Order Summary</h3>
          <div className="flex justify-between text-gray-600">
            <p>Subtotal:</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <div className="flex justify-between text-gray-600">
            <p>Delivery Fee:</p>
            <p>$2.00</p>
          </div>
          <div className="flex justify-between text-gray-800 font-semibold">
            <p>Total:</p>
            <p>${getTotalCartAmount()===0?0: getTotalCartAmount() + 2}</p>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className="text-white bg-green-500 py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-all duration-200"
            onClick={() => navigate('/Cart')}
          >
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  )
}

export default DoneOrder

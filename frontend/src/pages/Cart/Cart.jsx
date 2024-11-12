import React, { useContext } from 'react'
import './Cart.css'
import {StoreContext} from '../../context/StoreContext'


const Cart = () => {

  const {cartItems, food_list, removeFromCart} = useContext(StoreContext);
  return (
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.some(item => cartItems[item._id] > 0) && (
          <div class="grid grid-cols-4 md:grid-cols-6 items-center text-sm md:text-base my-2 text-black font-bold">
            <p class="col-span-1">Image</p>
            <p class="col-span-1 md:col-span-[1.5]">Name</p>
            <p class="col-span-1">Price</p>
            <p class="col-span-1">Quantity</p>
            <p class="hidden md:block md:col-span-1">Total</p>
            <p class="hidden md:block md:col-span-1">Action</p>            
          </div>
        )}

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
              <div class="grid grid-cols-4 md:grid-cols-6 items-center text-sm md:text-base my-2 text-black" key={item._id}>
                <img src={item.image} alt="" class="col-span-1 w-[150px]" />
                <p class="col-span-1 md:col-span-[1.5]">{item.name}</p>
                <p class="col-span-1">{item.price}</p>
                <p class="col-span-1">{cartItems[item._id]}</p>
                <p class="hidden md:block md:col-span-1">{item.price * cartItems[item._id]}</p>
                <p class="hidden md:block md:col-span-1">x</p>
              </div>
              <hr/>
              </div>
            );
          }
        })}

      </div>
    </div>
  )
}

export default Cart
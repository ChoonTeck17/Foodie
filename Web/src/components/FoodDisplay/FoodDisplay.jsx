import React, { useContext, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

export const FoodDisplay = ({ category }) => {
  const { food_list, addToCart, removeFromCart } = useContext(StoreContext);
  const [showPopup, setShowPopup] = useState(false);
  const [quantities, setQuantities] = useState({});

  const handleAddToCart = (id) => {
    const quantity = quantities[id] || 1; // Use the quantity set for the item
    addToCart(id, quantity); // Ensure addToCart accepts quantity
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  const updateQuantity = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, parseInt(value) || 1),
    }));
  };

  return (
    <div className="mt-12 px-4 sm:px-6 lg:px-12" id="food-display">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 tracking-wide mb-6">
        Top Dishes Around You
      </h2>

      {/* Popup Notification */}
      {showPopup && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-md z-50 text-sm sm:text-base">
          Item added to cart successfully!
        </div>
      )}

      {/* Food Cards Grid */}
      <div id="explore-menu" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {food_list.map((item) => {
          if (category === 'All' || category === item.category) {
            return (
            <FoodItem key={item._id} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>

            );
          }
          return null;
        })}
      </div>
    </div>
  );
};


export default FoodDisplay;

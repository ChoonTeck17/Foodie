import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : {};
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add items to cart with a specific quantity
  const addToCart = (itemId, quantity = 1) => {
    const validQuantity = Math.max(1, Math.floor(Number(quantity) || 1)); // Ensure quantity is a positive integer
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + validQuantity, // Increment by the validated quantity
    }));
  };

  // Remove one item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev; // No item to remove
      const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
      if (updatedCart[itemId] <= 0) {
        delete updatedCart[itemId]; // Remove the item if quantity is zero or less
      }
      return updatedCart;
    });
  };

  // Clear the cart after done ordering
  const clearCart = () => {
    setCartItems({});
  };

  // Calculate the total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = food_list.find((product) => product._id === itemId);
        if (itemInfo) { 
          totalAmount += itemInfo.price * cartItems[itemId];
        }
      }
    }
    return Number(totalAmount.toFixed(2));
  };

  // Get detailed cart items for display or email
  const getCartDetails = () => {
    const details = [];
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = food_list.find((product) => product._id === itemId);
        if (itemInfo) {
          details.push({
            id: itemId,
            name: itemInfo.name,
            price: itemInfo.price,
            quantity: cartItems[itemId],
            subtotal: itemInfo.price * cartItems[itemId],
          });
        }
      }
    }
    return details;
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems, 
    addToCart,
    removeFromCart,
    clearCart,
    getTotalCartAmount,
    getCartDetails, 
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
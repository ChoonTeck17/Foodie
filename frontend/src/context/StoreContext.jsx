import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider =(props) => {

    const [cartItems, setCartItems] = useState({});

    //This function is add to cart, add the cart items value by 1
    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    //This function is remove from cart, reduce the cart items value by 1
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    // useEffect(()=>{
    //     console.log(cartItems);
    // }, [cartItems])


    const getTotalCartAmount = () =>{
        let TotalAmount = 0;
        for(const item in cartItems)
        {   
            if(cartItems[item]>0){
            let itemInfo = food_list.find((Product)=>Product._id === item);
            TotalAmount += itemInfo.price* cartItems[item];
        }
    }
    return TotalAmount; 
}

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }
    
    return (
        <StoreContext.Provider value = {contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
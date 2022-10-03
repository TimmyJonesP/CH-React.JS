import { createContext, useState } from 'react';


export const CartContext = createContext();

const CartProvider = (props) => {
    
    const [cart, setCart] = useState ([]);

    const addToCart = (data, count) =>{
        let producto = {...data, count};
        if(isInCart(producto.id)){
        } else {
            setCart([...cart, producto])
        };
    }

    const isInCart = (id) => {
            return cart.some((data) => data.id === id)
        };

    const clear = () => {
        setCart([]);
    };

    
    const cartTotal = () => {
        return cart.reduce((total, data) => total+=data.count, 0);
    }

    const removeItem = (id) => {
        setCart(cart.filter(data => data.id !== id))
    };

    const cartSuma = () => {
        return cart.reduce((total, data) => total+=data.count*data.precio, 0);
    }

    return(
        <CartContext.Provider value={{cart, addToCart, clear, isInCart, cartTotal, removeItem, cartSuma}}>
            {props.children} 
        </CartContext.Provider>
    );
};

export default CartProvider;
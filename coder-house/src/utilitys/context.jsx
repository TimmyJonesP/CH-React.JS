import React, { createContext, useState } from 'react'

export const CartContext = createContext();

const Provider = ({children}) => {
    const [cart, setCart] = useState ([]);

    const addData = (data, cantidad) =>{
        if (isInCart(data.id)) {
            let producto = cart.find(x => x.id === data.id)
            cart[cart.indexOf(producto)].cantidad += cantidad;
            setCart([...cart])
        } else {
            setCart([...cart, {...data, cantidad:cantidad}]);
        }
        
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(data => data.id === id)
    }
    
    const cartTotal = () => {
        return cart.reduce((total, data) => total+=data.cantidad, 0)
    }

    return(
        <CartContext.Provider value={{cart, addData, clear, isInCart, cartTotal}}>
            {children} 
        </CartContext.Provider>
    )
}

export default Provider;
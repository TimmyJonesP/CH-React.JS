import React, { createContext, useState } from 'react'

export const CartContext = createContext();

const Provider = (props) => {
    const [cart, setCart] = useState ([]);

    const addData = (data, cantidad) =>{
        if (isInCart(data.id)) {
            let producto = cart.find(x => x.id === data.id)
            cart[cart.indexOf(producto)].cantidad += cantidad;
            setCart([...cart])
            console.log(cart)
        } else {
            setCart([...cart, {...data, cantidad:cantidad}]);
            console.log(cart)
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

    const removeItem = (id) => {
        const filtro = cart.filter((x) => x.id !== id);
        setCart(filtro);
    }

    return(
        <CartContext.Provider value={{cart, addData, clear, isInCart, cartTotal, removeItem}}>
            {props.children} 
        </CartContext.Provider>
    )
}

export default Provider;
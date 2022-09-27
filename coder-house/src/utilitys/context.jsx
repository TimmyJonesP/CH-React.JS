import { createContext, useState } from 'react'

export const CartContext = createContext();

const Provider = (props) => {
    const [cart, setCart] = useState ([]);

    const addToCart = (data, count) =>{
        const producto = {...data, count};
        if(isInCart(producto.id)){
            plus(producto)
        } else {
            setCart([...cart,producto])
        }
        
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some((data) => data.id === id)
    };
    const plus = (producto) => {
        const cartUpdated = cart.map((productoEnElCarrito) =>{
            if (producto.id === productoEnElCarrito.id){
                const productUpdated = {
                    ...productoEnElCarrito, count: producto.count
                };
                return productUpdated;
            }
        });
        setCart(cartUpdated)
    }
    
    const cartTotal = () => {
        const copia = [...cart];
        let cuenta = 0;
        copia.forEach((producto) =>{
            cuenta = cuenta + producto.count;
        });
        return cuenta;
    };

    const removeItem = (id) => {
        const filtro = cart.filter((x) => x.id !== id);
        setCart(filtro);
    }

    return(
        <CartContext.Provider value={{cart, addToCart, clear, isInCart, cartTotal, removeItem}}>
            {props.children} 
        </CartContext.Provider>
    )
}

export default Provider;
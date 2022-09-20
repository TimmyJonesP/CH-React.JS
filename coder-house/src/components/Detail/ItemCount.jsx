import React, { useEffect } from 'react'
import { useState } from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial);
    const [dataStock, setDataStock] = useState(stock)
    
    
    const decrease = (valor) => {
        if(valor > 0){
            setCount(valor);
        }
    }
    
    const increase = (valor) => {
        if (valor <= dataStock){
            setCount(valor);
        }
    }
    const agregarProductos = () => {
        if (count <= dataStock) {
            onAdd(count);
            setDataStock(dataStock - count);
            setCount(dataStock)
        }
    }
    
    useEffect(() =>{
        setDataStock(stock);
    }, [stock]);

  return (
      <div className='contador bg-blue-500 m-5 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>
        <p>Stock disponible: {dataStock}</p>
        <button className='bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded' value="-" onClick={() => {decrease(count - 1)}}>-</button>
        <span className='mx-5'>{count}</span>
        <button className='bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded' value="+" onClick={() => {increase(count + 1)}}> + </button>
        <div>
            <button className='bg-gray-300 hover:bg-gray-400 m-5 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center' value="agregar" onClick={() => {agregarProductos()}}>Agregar al Carrito</button>
        </div>
    </div>
  )
}
export default ItemCount;
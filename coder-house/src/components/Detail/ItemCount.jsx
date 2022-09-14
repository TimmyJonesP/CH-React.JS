import React from 'react'
import { useState } from 'react';

export const ItemCount = ({initial, stock, onAdd, data}) => {
    const [count, setCount] = useState(initial);

    const decrease = () => {
        setCount(count - 1);

    }
    const increase = () => {
        setCount(count + 1);

    }
  return (
      <div className='contador md:col-span-2 bg-gray-500'>
        <h2>{data.nombre}</h2>
        <p>Stock disponible: 10 unidades</p>
        <button className='btn text-primary px-1 border-black border-2' disabled={count <= 0} onClick={decrease}>-</button>
        <span className='mx-5'>{count}</span>
        <button className='btn text-primary px-1 border-black border-2' disabled={count >= stock} onClick={increase}> + </button>
        <div>
            <button disabled={count <= 0} onClick={() => onAdd(count)}>Agregar a la wishlist</button>
        </div>
    </div>
  )
}
export default ItemCount;
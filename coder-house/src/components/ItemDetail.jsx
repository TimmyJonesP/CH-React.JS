import React from 'react';
import {ItemCount} from './ItemCount'

export const ItemDetail = ({data}) => {
    const onAdd = (cantidad) => {
        console.log(`agregaste ${cantidad} vino/s a tu wishlist`)
      }
    
  return (
    <div class="max-w-lg rounded overflow-hidden shadow-lg justify-center">
            <img class="w-full" src={data.imagen} alt={data.nombre}/>
        <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{data.nombre}</div>
            <p class="text-gray-700 text-base">
                Uva: {data.uva}
            </p>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$ {data.precio}</span>
    <ItemCount data={data} initial = {1} stock={10} onAdd={onAdd}/>
  </div>
</div>
  )
}

export default ItemDetail;
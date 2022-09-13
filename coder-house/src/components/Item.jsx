import React from 'react'

export const Item = ({id, nombre,uva,imagen}) => {
  
  return (
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src={imagen} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{nombre}</div>
    <p class="text-gray-700 text-base">
        Uva: {uva}
    </p>
    <button><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Ver detalles</span></button>
  </div>
</div>
  )

}

export default Item;
import React from 'react'
import { Link } from 'react-router-dom';

export const Item = ({item}) => {

  return (
<div className="max-w-sm rounded overflow-hidden shadow-lg">
<Link to={`/item/${item.id}`}>
  <img className="w-100" src={item.imagen} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{item.nombre}</div>
    <p className="text-gray-700 text-base">
        Uva/tipo: {item.uva}
    </p>
      <button><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Ver detalles</span></button>
  </div>
</Link>
</div>
  )

}

export default Item;
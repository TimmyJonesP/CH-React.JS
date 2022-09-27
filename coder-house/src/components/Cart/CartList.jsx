import React from 'react';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

export const CartItem = (producto, removeItem) => {
  return (

    <tr>
        <td className="p-2 whitespace-nowrap">
            <div className="flex items-center">
                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src={producto.imagen} width="40" height="40" alt="Alex Shatov"/></div>
                <div className="font-medium text-gray-800">{producto.nombre}</div>
            </div>
        </td>
        <td className="p-2 whitespace-nowrap">
            <div className="text-left">{producto.uva}</div>
        </td>
        <td className="p-2 whitespace-nowrap">
            <div className="text-left font-medium text-green-500">{producto.precio}</div>
        </td>
        <td className="p-2 whitespace-nowrap">
            <button onClick={removeItem} className="text-lg text-center"><FontAwesomeIcon icon={faDeleteLeft} /></button>
        </td>
    </tr>
  )
}

export default CartItem;
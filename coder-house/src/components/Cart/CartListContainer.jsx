import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../utilitys/context';
import CartItem from './CartList';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

export const CartListContainer = () => {

  const {cart, clear, cartSuma, cartTotal} = useContext(CartContext);

  return (
    <section className="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
      {cartTotal() > 0 ?
      <div className="h-full">
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Carro</h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Nombre</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Cantidad</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Precio</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Eliminar</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {cart.map((producto) => (
                    <CartItem key={producto.id} producto={producto} />
                    ))}
                </tbody>
              </table>
            </div>
            <div className="text-center font-big text-green-500">${cartSuma()}</div>
      <button className='btn' onClick={() => clear()}><FontAwesomeIcon icon={faTrashAlt} /></button>
          </div>
        </div>
      </div>
                   :<Link to="/"><div className='p-5 m-5 text-xl color-red'>No se han encontrado productos en su carrito! Clickee aquí para volver al catálogo</div></Link>}
    </section>
  )
}

export default CartListContainer;
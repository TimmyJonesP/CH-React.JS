import React, {useContext} from 'react';
import {ItemCount} from './ItemCount';
import { useState } from 'react';
import { CartContext } from '../../utilitys/context';
import { Link } from 'react-router-dom';

export const ItemDetail = ({data}) => {
  const { addToCart } = useContext(CartContext);
  const [count, setCount] = useState(0);

    const onAdd = (count) => {
        setCount(count);
        addToCart(data, count);
      };
    
  return (
      <div className="max-w-lg rounded mt-3 overflow-hidden shadow-lg justify-center shadow-lg">
            <img className="w-full" src={data.imagen} alt={data.nombre}/>
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data.nombre}</div>
    {count === 0 ? <div><p className="text-gray-700 m-5 text-base">
                Uva: {data.uva}
            </p>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$ {data.precio}</span> <ItemCount initial={1} stock={data.stock} onAdd={onAdd}/> </div> : <div> <Link to ="/" ><button className="bg-blue-500 m-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Seguir comprando</button></Link> <Link to ="/cart" ><button className="bg-green-500 m-5 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"> Terminar mi compra!</button></Link> </div>}
  </div>
</div>
  );
};

export default ItemDetail;
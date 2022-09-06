import React from 'react'
import {ItemCount} from './ItemCount'

export const ItemListContainer = () => {
  const onAdd = (cantidad) => {
    console.log(`agregaste ${cantidad} vino/s a tu wishlist`)
  }
  return (
    <div>
      <h1>Ahora vas a poder encargar los mejores vinos desde la web.</h1>
      <ItemCount initial = {1} stock={10} onAdd={onAdd}/>
    </div>
  )
}

export default ItemListContainer;

import React from 'react'
import Item from './Item';

export const ItemList = ({items}) => {
  
  return (
    <div className='grid grid-cols-4 gap-4 m-2'>
        {items.map(item => (
            <div key={item.id} className="grid grid-rows-2 md:grid-rows-1">
                <Item item={item}/>
            </div>)
            )}
    </div>
  )
}


export default ItemList;
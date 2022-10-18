import React from 'react'
import Item from './Item';

export const ItemList = ({items}) => {
  
  return (
    <div className='mt-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 '>
        {items.map(item => (
            <div key={item.id} className="flex justify-center border-2 rounded-md">
                <Item item={item}/>
            </div>)
            )}
    </div>
  )
}


export default ItemList;
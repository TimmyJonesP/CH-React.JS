import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList'
import productos from '../../utilitys/todo';


const ItemListContainer = () => {

  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() =>{
    const getItems = new Promise(resolve => {
      setTimeout(()=>{
        resolve(productos)
      },1000);
    });

    if (categoryId){
      getItems.then(res=> setItems(res.filter(productos => productos.category === categoryId)))
    } else {
      getItems.then(res => setItems(res));
    }
  }, [categoryId]);

  return (
    <div>
        <ItemList key={items.id} items={items} />
    </div>
  )
}

export default ItemListContainer;

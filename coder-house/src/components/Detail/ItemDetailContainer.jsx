import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { categoryById } from '../../utilitys/promise';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {id} = useParams()
    
    useEffect(()=>{
        categoryById(id).then(response => {
            setData(response)
        })
    },[id])
  return (
    <div className='flex justify-center'>
        <ItemDetail data={data} key={data.id}/>
    </div>
  )
}

export default ItemDetailContainer;

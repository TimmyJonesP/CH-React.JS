import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import Loading from '../complements/loading';


export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams()
    
    useEffect(()=>{
      const db = getFirestore();
      const response = doc(db, "items", id);
      getDoc(response).then((snapshot) => {
        if (snapshot.exists()){
          setData({id:snapshot.id, ...snapshot.data()});
          setLoading(false)
        }
      });
    },[id]);
  return (
    <div className='flex justify-center'>
        {loading ? <Loading /> : <ItemDetail data={data} key={data.id}/> }
    </div>
  )
}

export default ItemDetailContainer;

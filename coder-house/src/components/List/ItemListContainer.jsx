import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList'
import Loading from '../complements/loading';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"


const ItemListContainer = () => {

  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const queryItems = categoryId ? query(itemsCollection, where("category", "==", categoryId)) : itemsCollection;

    getDocs(queryItems).then((snapshot) => {
      setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setLoading(false)
    });
  },[categoryId]);

  return (
    <div>
        {loading ? <Loading /> : <ItemList key={items.id} items={items} />}
    </div>
  )
}

export default ItemListContainer;

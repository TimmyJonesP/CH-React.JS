import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList'

const productos = [
  {"nombre": "Encuentro", uva: "Malbec de Tupungato", imagen:"https://www.rutiniwines.com/wp-content/uploads/2017/05/e-malbec-1-1170x1755.jpg",
      "precio": 2345, tipo: "vino", id:'1'},
  {"nombre": "Trumpeter Reserve",
    "uva": "Malbec de Tupungato",
     "imagen":"https://tiempodevinos.com.ar/wp-content/uploads/2020/04/Trumpeter-Rva-Blend.jpg",
      "precio": 2096,
       tipo: "vino",
       id:'2'},

  {"nombre": "Dominio",
   uva: "Cabernet Sauvignon",
    imagen:"https://rutini.vteximg.com.br/arquivos/ids/156154-1400-1600/Dominio-Cabernet-Sauvignon.jpg?v=637582435452830000",
     "precio": 2879,
      tipo: "vino",
       id:'3'},
  {"nombre": "Colección Rutini",
    uva: "Sauvignon Blanc",
     imagen:"https://rutini.vteximg.com.br/arquivos/ids/156295-1400-1600/Rutini-Sauvignon-Blanc.jpg?v=637765049237300000",
      "precio": 2600,
       tipo: "vino",
      id:'4'},
  {"nombre": "Colección Rutini",
    uva: "Merlot",
     imagen:"https://rutini.vteximg.com.br/arquivos/ids/156031-1400-1600/Rutini-Merlot.jpg?v=637448527247400000",
      "precio": 3074,
       tipo: "vino",
      id:'5'},
  {"nombre": "Colección Rutini",
    uva: "Brut Nature",
     imagen:"https://rutini.vteximg.com.br/arquivos/ids/156246-1400-1600/Estuche-Rutini-Brut-Nature.jpg?v=637739187579330000",
      "precio": 7919,
       tipo: "vino",
      id:'6'},
  {"nombre": "Johnnie Walker Gold Reserve",uva:"Blended", imagen:"https://whiskyboutique.com.ar/uploads/products-images/272b736bfb67c42771a6701d78ab8438c77d6138_medium.jpg",
    "precio": 11700, tipo: "blancos",
    id:"7"
  },
  {"nombre": "Smirnoff Vodka", uva:"Vodka",imagen: "https://http2.mlstatic.com/D_NQ_NP_906032-MLA42929183777_072020-O.webp","precio": 1049, tipo: "blancos",id:"8"}
];

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
      getItems.then(res=> setItems(res.filter(productos => productos.tipo === categoryId)))
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
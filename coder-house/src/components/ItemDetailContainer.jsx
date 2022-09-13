import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import ItemDetail from './ItemDetail';


export const ItemDetailContainer = () => {
    
    const [data, setData] = useState({});
    
    useEffect(()=>{
        const productos = [
            {"id":1, "nombre": "Encuentro", "uva": "Malbec de Tupungato", "imagen":"https://www.rutiniwines.com/wp-content/uploads/2017/05/e-malbec-1-1170x1755.jpg", "precio": 2345},
            {"id":2, "nombre": "Trumpeter Reserve", "uva": "Malbec de Tupungato", "imagen":"https://tiempodevinos.com.ar/wp-content/uploads/2020/04/Trumpeter-Rva-Blend.jpg", "precio": 2096},
            {"id":3, "nombre": "Dominio", "uva": "Cabernet Sauvignon", "imagen":"https://rutini.vteximg.com.br/arquivos/ids/156154-1400-1600/Dominio-Cabernet-Sauvignon.jpg?v=637582435452830000", "precio": 2879},
            {"id":4, "nombre": "Colección Rutini", "uva": "Sauvignon Blanc", "imagen":"https://rutini.vteximg.com.br/arquivos/ids/156295-1400-1600/Rutini-Sauvignon-Blanc.jpg?v=637765049237300000", "precio": 2600},
            {"id":5, "nombre": "Colección Rutini", "uva": "Merlot", "imagen":"https://rutini.vteximg.com.br/arquivos/ids/156031-1400-1600/Rutini-Merlot.jpg?v=637448527247400000", "precio": 3074},
            {"id":6, "nombre": "Colección Rutini", "uva": "Brut Nature", "imagen":"https://rutini.vteximg.com.br/arquivos/ids/156246-1400-1600/Estuche-Rutini-Brut-Nature.jpg?v=637739187579330000", "precio": 7919}
          ];
        const getData = () =>
        new Promise ((res)=>{

            const product = productos.find((prod)=> prod.id === 1);
            setTimeout(()=>{
                res(product)
            },2000);
        });
        getData()
        .then((info)=>{
            setData(info)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
  return (
    <div>
        <ItemDetail data={data}/>
    </div>
  )
}

export default ItemDetailContainer;

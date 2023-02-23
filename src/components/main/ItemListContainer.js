import React, { useEffect, useState } from 'react'
import Spinner from '../Spinner/Spinner';
import ItemCount from '../ItemCount/ItemCount';
import './ItemListCintainer.css';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';

/* MOCK DE DATOS */
/*
const initialProducts = [
  { name: "manzana", id: 0, price: 500, stock: 10 },
  { name: "pera", id: 1, price: 200, stock: 20 },
  { name: "maracuya", id: 2, price: 100, stock: 15 },
];
*/
/* promesa esto en realida es del lado del back
  simplemente es para poder emular el consumo
  */
/*
const queryProducts = new Promise((res, rej) => {
  setTimeout(()=>{    
    res(initialProducts);
  },3000);
  
  //rej('se ha producido un error');
})
*/





const ItemListContainer = ({ msg }) => {
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState(false);
  const [status, setStatus] = useState(false);
  const { categoria } = useParams();
  const fileJson=(categoria=== undefined ?  '../../assets/Data/products.json' :  '../../assets/Data/'+categoria+ '.json');

 

  const onAdd = (count) => {
    console.log("el usuario selcciono ${count}")
  }

  useEffect(() => {
    /*
    queryProducts.then((data) => {
      setProducts(data);
      setStatus(true);
    })
    .catch((err)=>{
      console.error(err);
    })
    */
    /*Aplicando fetch*/
    /*fetch(fileJson,{
                    headers : { 
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
                              }
                    }
    )
    .then(res=>res.json())    
    .then((json)=>{
      //console.log(json);
      setStatus(true);
      setProducts(json);
      console.log(products);
    })
    .catch((e)=>{console.log(e)})*/

    /*aplico Async Await */
    const getProducts = async () => {
      try {
        const result = await fetch(fileJson, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });
        const data = await result.json();
        console.log(data)
        setStatus(true);
        setProducts(data);
      } catch (error) {
        setErrors(true);
      }
    }

    // llamo el consumo de backend datos
    setTimeout(()=>{    
      getProducts();
    },3000);
    

  }, [categoria])

  return (
    <>
      <h1>{msg}</h1>
      <ItemCount stock={5} onAdd={onAdd} />

      {!errors ? (
        <>
              {status ?
                (
                <ItemList products={products}/>
                ) :
                (
                  <Spinner />
                )
        
              }
        </>  
      ):(
        <h1> Se ha producido un error!!!!</h1>
      )}
      
    </>
  )
}

export default ItemListContainer
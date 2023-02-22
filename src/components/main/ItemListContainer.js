import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemListCintainer.css';

const ItemListContainer = ({ msg }) => {

  const onAdd =(count) =>{
    console.log("el usuario selcciono ${count}")
  }

  return (
    <>
      <h1>{msg}</h1>
      <ItemCount stock={5} onAdd={onAdd} />
    </>
  )
}

export default ItemListContainer
import React, {useState} from "react";

const ItemCount = ({ onAdd, stock }) => {
  const [count, setCount] = useState(1);

  const handlerAdd = () => {
    if (count < stock) setCount(count + 1);
  };

  const handlerSubtract = () => {
    if (count > 1) setCount(count - 1);
  };
  const handlerSelect = () => {
    if (stock > 0) onAdd(count);
  };

  return (
    <>
      <button onClick={handlerSubtract}>-</button>
      <input type="text" className="form-control h-100 text-center" readOnly value={count} />
      <button onClick={handlerAdd}>+</button>
      <button onClick={handlerSelect}>Agregar al Carrito</button>
    </>
  );
};

export default ItemCount;

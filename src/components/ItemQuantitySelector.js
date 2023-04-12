import { useState, useContext, useEffect } from "react";
import CartContext from "../context/CartContext";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const ItemCount = ({ product }) => {
  const { addToCart, cart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const minus = () => quantity > 1 && setQuantity(quantity - 1);

  const plus = (stock) => quantity < stock && setQuantity(quantity + 1);

  const getItemQuantityInCart = (id) => {
    const productInCart = cart.find((item) => item.id === id);
    productInCart ? setQuantity(productInCart.quantity) : setQuantity(1);
  };

  useEffect(() => {
    getItemQuantityInCart(product.id);
  }, [cart]); // eslint-disable-line

  return (
    <div className="qty-selector btn-card">
      <div className="item-count">
        <div className="qty-bar">
          <FaMinusCircle className="minus" onClick={minus} />
          <p className="qty-num-bar">{quantity}</p>
          <FaPlusCircle className="plus" onClick={() => plus(product.stock)} />
        </div>
      </div>
      <button className="btn" onClick={() => addToCart(product, quantity)}>
        {cart.find((item) => item.id === product.id)
          ? `Cambiar cantidad`
          : `Agregar al carrito`}
      </button>
    </div>
  );
};

export default ItemCount;

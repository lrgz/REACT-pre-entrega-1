import { useContext } from "react";
import CartContext from "../context/CartContext";
import { BsCart2 } from "react-icons/bs";

const CartWidget = () => {
  const { cart, getCartItemsQuantity } = useContext(CartContext);

  return (
    <>
      <BsCart2 className="cart-icon" />
      {cart.length > 0 && (
        <div className="quantity">{getCartItemsQuantity()}</div>
      )}
    </>
  );
};

export default CartWidget;

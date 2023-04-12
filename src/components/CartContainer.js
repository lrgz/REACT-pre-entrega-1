import "./styles/CartContainer.css";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import CartDetail from "./CartDetail";
import Checkout from "./Checkout";
import { Text } from "@chakra-ui/react";

const CartContainer = () => {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      {cart.length === 0 && (
        <Text className="category-title" py="2" mb="5">
          El carrito está vacío
        </Text>
      )}
      {cart.length > 0 && (
        <>
          <CartDetail />
          <button className="btn clear" onClick={clearCart}>
            Vaciar carrito
          </button>
        </>
      )}
      <Checkout />
    </div>
  );
};

export default CartContainer;

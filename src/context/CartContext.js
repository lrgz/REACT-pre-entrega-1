import { createContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("pendingCart")) || []
  );
  const [checkoutBtn, setCheckoutBtn] = useState(false);

  const addToCart = (product, quantity) => {
    const isInCart = (id) => cart.some((item) => item.id === id);
    if (isInCart(product.id)) {
      const addQuantity = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: quantity,
            }
          : item
      );
      setCheckoutBtn(true);
      localStorage.setItem("pendingCart", JSON.stringify([...addQuantity]));
      return setCart([...addQuantity]);
    }
    setCheckoutBtn(true);
    localStorage.setItem(
      "pendingCart",
      JSON.stringify([...cart, { ...product, quantity }])
    );
    setCart([...cart, { ...product, quantity }]);
  };

  const getCartItemsQuantity = () => {
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity;
    });
    return count;
  };

  const getGrandTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const plusQuantity = (stock, id) => {
    const index = cart.findIndex((item) => item.id === id);
    if (cart[index].quantity < stock) {
      cart[index].quantity += 1;
      localStorage.setItem("pendingCart", JSON.stringify([...cart]));
      setCart([...cart]);
    }
  };

  const minusQuantity = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if (cart[index].quantity > 1) {
      cart[index].quantity -= 1;
      localStorage.setItem("pendingCart", JSON.stringify([...cart]));
      setCart([...cart]);
    }
  };

  const clearCart = () => {
    localStorage.removeItem("pendingCart");
    setCart([]);
  };

  const removeItem = (id) => {
    const remainItems = cart.filter((item) => item.id !== id);
    localStorage.setItem("pendingCart", JSON.stringify([...remainItems]));
    setCart([...remainItems]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        checkoutBtn,
        setCheckoutBtn,
        addToCart,
        getCartItemsQuantity,
        getGrandTotal,
        plusQuantity,
        minusQuantity,
        clearCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

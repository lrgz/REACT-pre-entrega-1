import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Tr, Td } from "@chakra-ui/react";
import { FaMinusCircle, FaPlusCircle, FaTimesCircle } from "react-icons/fa";

const CartItem = ({ product }) => {
  const { cart, removeItem, plusQuantity, minusQuantity } =
    useContext(CartContext);

  return (
    <Tr>
      <Td textAlign={"center"} className="table-td-index">
        {cart.findIndex((item) => item.id === product.id) + 1}
      </Td>
      <Td className="table-td-name">{product.name}</Td>
      <Td className="table-td-qty" textAlign={"center"}>
        {product.quantity}
      </Td>
      <Td className="table-td-price" textAlign={"right"} paddingRight={"3rem"}>
        {product.price}
      </Td>
      <Td
        className="table-td-subtotal"
        textAlign={"right"}
        paddingRight={"3rem"}
      >
        {product.quantity * product.price}
      </Td>
      <Td className="table-td-edit">
        <FaTimesCircle
          className="delete"
          onClick={() => removeItem(product.id)}
        />
        <FaMinusCircle
          className="minus"
          onClick={() => minusQuantity(product.id)}
        />
        <FaPlusCircle
          className="plus"
          onClick={() => plusQuantity(product.stock, product.id)}
        />
      </Td>
    </Tr>
  );
};

export default CartItem;

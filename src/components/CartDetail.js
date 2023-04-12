import { useContext } from "react";
import CartContext from "../context/CartContext";
import CartItem from "./CartItem";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Text,
  TableContainer,
} from "@chakra-ui/react";

const CartDetail = () => {
  const { cart, getCartItemsQuantity, getGrandTotal } = useContext(CartContext);

  return (
    <>
      <Text className="category-title" py="2" mb="5">
        Detalle del carrito
      </Text>
      <TableContainer mb="10">
        <Table variant="simple">
          <Thead className="table-head">
            <Tr>
              <Th fontSize={"1.5rem"} color={"black"} className="th-index">
                orden
              </Th>
              <Th fontSize={"1.5rem"} color={"black"} className="th-name">
                producto
              </Th>
              <Th
                fontSize={"1.5rem"}
                color={"black"}
                textAlign={"center"}
                className="th-qty"
              >
                cantidad
              </Th>
              <Th
                fontSize={"1.5rem"}
                color={"black"}
                textAlign={"right"}
                className="th-price"
              >
                precio
              </Th>
              <Th
                fontSize={"1.5rem"}
                color={"black"}
                textAlign={"right"}
                className="th-subtotal"
              >
                sub-total
              </Th>
              <Th
                fontSize={"1.5rem"}
                color={"black"}
                textAlign={"center"}
                className="th-edit"
              >
                editar
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {cart.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </Tbody>
          <Tfoot className="table-foot">
            <Tr>
              <Th></Th>
              <Th fontSize={"1.5rem"} color={"black"}>
                totales
              </Th>
              <Th fontSize={"1.5rem"} color={"black"} textAlign={"center"}>
                {getCartItemsQuantity()}
              </Th>
              <Th></Th>
              <Th
                fontSize={"1.5rem"}
                color={"black"}
                textAlign={"right"}
                paddingRight={"3rem"}
              >
                {getGrandTotal()}
              </Th>
              <Th></Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
};

export default CartDetail;

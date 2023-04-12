import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import ItemQuantitySelector from "./ItemQuantitySelector";
import { Image, Heading, Text } from "@chakra-ui/react";

const ItemDetail = ({ product }) => {
  const { checkoutBtn, setCheckoutBtn } = useContext(CartContext);
  useEffect(() => {
    setCheckoutBtn(false);
  }, []); // eslint-disable-line
  return (
    <>
      <div className="detail-card">
        <Image
          objectFit="cover"
          src={product.imgUrl}
          alt={product.name}
          className="detail-img"
        />
        <div className="card-body">
          <Heading size="2xl" py="3" px="4" className="capitalize">
            {product.name}
          </Heading>
          <Text py="5" fontSize="2xl" px="4">
            {product.detail}
          </Text>
          <Text color="black" fontSize="2xl" pt="5" px="4">
            ${product.price} x unidad -- Stock: {product.stock}
          </Text>

          {product.stock > 0 &&
            (checkoutBtn ? (
              <Link to="/cart">
                <button className="btn btn-end btn-card">
                  Finalizar Compra
                </button>
              </Link>
            ) : (
              <ItemQuantitySelector product={product} />
            ))}
        </div>
      </div>
    </>
  );
};

export default ItemDetail;

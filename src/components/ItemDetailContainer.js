import "./styles/ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../firebase/firebase-config";
import ItemDetail from "./ItemDetail";
import { CircularProgress, Text } from "@chakra-ui/react";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    getProductById(id)
      .then((product) => setProduct(product))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      <div className="detail-container">
        {loading ? (
          <CircularProgress
            isIndeterminate
            color="pink.300"
            size="100px"
            className="spin"
          />
        ) : product ? (
          <ItemDetail key={product.id} product={product} />
        ) : (
          <Text className="not-found-text">El producto no existe</Text>
        )}
      </div>
    </>
  );
};

export default ItemDetailContainer;

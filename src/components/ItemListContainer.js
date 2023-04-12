import "./styles/ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../firebase/firebase-config";
import HomeTitle from "./HomeTitle";
import ItemList from "./ItemList";
import { Text, CircularProgress } from "@chakra-ui/react";

const ItemListContainer = () => {
  let { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const randomProducts = (products) => {
    let productsLength = products.length - 4;
    let randomI = Math.floor(Math.random() * productsLength);
    return products.slice(randomI, randomI + 4);
  };

  useEffect(() => {
    setLoading(true);
    getProducts(categoryId)
      .then((res) => {
        categoryId ? setProducts(res) : setProducts(randomProducts(res));
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <>
      {categoryId ? (
        <Text className="category-title">Variedad {categoryId}</Text>
      ) : (
        <HomeTitle />
      )}
      <div className="list-container">
        {loading ? (
          <CircularProgress
            isIndeterminate
            color="pink.300"
            size="100px"
            className="spin"
          />
        ) : products.length > 0 ? (
          <ItemList products={products} />
        ) : (
          <Text className="not-found-text">
            Productos no encontrados o variedad inexistente
          </Text>
        )}
      </div>
    </>
  );
};

export default ItemListContainer;

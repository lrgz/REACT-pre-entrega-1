import { Link } from "react-router-dom";
import { Card, CardBody, Image, Stack, Heading, Text } from "@chakra-ui/react";

const Item = ({ product }) => {
  return (
    <div className="item-card">
      <Card maxW="sm">
        <Link to={`/item/${product.id}`}>
          <CardBody>
            <Image src={product.imgUrl} alt={product.name} borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="lg" className="capitalize" px="2" height="20">
                {product.name}
              </Heading>
              <Text color="black" fontSize="2xl" px="2">
                ${product.price} x unidad
              </Text>
              <Text color="black" fontSize="2xl" px="2">
                Stock: {product.stock || "Agotado"}
              </Text>
            </Stack>
          </CardBody>
        </Link>
      </Card>
    </div>
  );
};

export default Item;

import { React, useState, useEffect } from "react";
import { productsGrab, removeProduct } from "../../../api";
import { Button, Stack, Text, SimpleGrid, Img, Center } from "@chakra-ui/react";

const AdminProducts = ({token}) => {
  const [products, setProducts] = useState([]);

  const AdminProductsData = async () => {
    const data = await productsGrab();
    console.log(data);
    setProducts(data);
  };
  useEffect(() => {
    AdminProductsData();
  }, []);

  const handleProductRemove = async (e, id) => {
    e.preventDefault();
    await removeProduct(token, id);
  };

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      columnGap="8"
      rowGap={{ base: "10", lg: "16" }}
    >
      {products.map((product) => (
        <Stack key={product.id} spacing="4">
          <Stack spacing="5">
            <Img
              src={product.imageLink}
              alt={product.title}
              h="72"
              objectFit="cover"
            />
            <Stack spacing="1">
              <Center>
                <Text fontWeight="medium" fontSize={{ base: "lg", md: "xl" }}>
                  {product.title}
                </Text>
              </Center>
              <Button onClick={(e) => handleProductRemove(e, product.id)}>Remove Product</Button>
              <Button>Edit Product</Button>
            </Stack>
          </Stack>
        </Stack>
      ))}
    </SimpleGrid>
  );
};

export default AdminProducts;

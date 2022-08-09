import { React, useState, useEffect } from "react";
import { productsGrab } from "../../../api";
import { Button, Stack, Text, SimpleGrid, Img, Center} from "@chakra-ui/react";

const AdminProducts = () => {
    const [products, setProducts] = useState([]); 

        useEffect(() => {
        const AdminProductsData= async () => {
          const data = await productsGrab();
          console.log(data);
          setProducts(data);
        };
        AdminProductsData();
      }, [setProducts]);

    return (
        <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        columnGap="8"
        rowGap={{ base: '10', lg: '16' }}
      >
        {products.map((product) => (
          <Stack key={product.id} spacing="4">
            <Stack spacing="5">
              <Img src={product.imageLink} alt={product.title} h="72" objectFit="cover" />
              <Stack spacing="1">
                <Center>
                    <Text fontWeight="medium" fontSize={{ base: 'lg', md: 'xl' }}>
                        {product.title}
                    </Text>
                </Center>
                <Button>Remove Product</Button>
                <Button>Edit Product</Button>
              </Stack>
            </Stack>
          </Stack>
        ))}
      </SimpleGrid>
    )
}

export default AdminProducts;
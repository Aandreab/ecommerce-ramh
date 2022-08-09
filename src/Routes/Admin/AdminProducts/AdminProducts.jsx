import { React, useState, useEffect } from "react";
import { productsGrab } from "../../../api";
import { Box, Button, Stack, Text, SimpleGrid } from "@chakra-ui/react";

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
        columns={{
          base: 1,
          md: 2,
          lg: 3,
        }}
        columnGap="8"
        rowGap={{
          base: '6',
          md: '8',
          lg: '16',
        }}
      >
        {products.map((product) => (
          <Box
            key={product.id}
            bg="bg-surface"
            p="6"
            borderRadius="md"
          >
            <Stack spacing="4" align="center" textAlign="center">
              <Stack>
                <Stack
                  spacing={{
                    base: '4',
                    md: '5',
                  }}
                  align="center"
                >
                  <Box>
                    <Text fontWeight="medium" fontSize="lg">
                      {product.title}
                    </Text>
                    <Button>Remove Product</Button>
                    <Button>Edit Product</Button>
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    )
}

export default AdminProducts;
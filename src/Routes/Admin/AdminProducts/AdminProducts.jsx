import { React, useState, useEffect } from "react";
import { productsGrab, removeProduct } from "../../../api";
import { Box, Button, Container, Divider, Heading, Stack, Text, SimpleGrid, Img, Center, useColorModeValue, useBreakpointValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AdminProducts = ({ token }) => {
console.log(token);
  const [products, setProducts] = useState([]);
  let navigate = useNavigate();

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
      <>
      <Box
              className="admin-section"
              as="section"
              bg="bg-surface"
              pt={{
                base: "4",
                md: "8",
              }}
              pb={{
                base: "12",
                md: "24",
              }}
            >
              <Container>
                <Stack spacing="5">
                  <Text fontSize="lg" fontWeight="medium">
                    Product overview
                  </Text>
                  <Divider />
                </Stack>
              </Container>
            </Box>
            <Box
              as="section"
              py={{
                base: "4",
                md: "8",
              }}
            >
              <Container>
               
                  <Box
                    px={{
                      base: "4",
                      md: "6",
                    }}
                    py={{
                      base: "5",
                      md: "6",
                    }}
                    bg="bg-surface"
                    borderRadius="lg"
                    boxShadow={useColorModeValue("lg", "lg-dark")}
                    className="pulse"
                  >
                    <Stack
                      onClick={() =>
                        navigate("/addProduct", { replace: true })
                      }
                    >
                      <Heading
                        size={useBreakpointValue({
                          base: "sm",
                          md: "md",
                        })}
                        align={"center"}
                      >
                        Products
                      </Heading>
                      <Text fontSize="sm" color="muted" align={"center"}>
                        Add Product
                      </Text>
                    </Stack>
                  </Box>
              </Container>
            </Box>
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
              <Button onClick={(e) => handleProductRemove(e, product.id)}>
                Remove Product
              </Button>
              <Button
                onClick={() => navigate(`/editProduct`, { replace: true })}
              >
                Edit Product
              </Button>
            </Stack>
          </Stack>
        </Stack>
      ))}
    </SimpleGrid>
    </>
  );
};

export default AdminProducts;

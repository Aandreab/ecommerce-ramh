import {
  Box,
  Container,
  SimpleGrid,
  Divider,
  Stack,
  Text,
  Heading,
  Flex,
  Img,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import "./Profile.css";
// import Footer from '../Footer/Footer';
import * as React from "react";
import Footer from "../Footer/Footer";

import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  // const handleNavToCart = () => {
  //     e.preventDefault();
  //     Navigate("/Cart")
  // }

  return (
    <main>
      <div className="main-container">
        <Box
          className="member-section"
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
                Member overview
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
            <SimpleGrid
              columns={{
                base: 1,
                md: 3,
              }}
              gap={{
                base: "5",
                md: "6",
              }}
            >
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
                <Stack onClick={() => navigate("/home", { replace: true })}>
                  <Heading
                    size={useBreakpointValue({
                      base: "sm",
                      md: "md",
                    })}
                  >
                    Home
                  </Heading>
                  <Text fontSize="sm" color="muted">
                    Head back Home
                  </Text>
                </Stack>
              </Box>
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
                <Stack onClick={() => navigate("/cart", { replace: true })}>
                  <Heading
                    size={useBreakpointValue({
                      base: "sm",
                      md: "md",
                    })}
                  >
                    Cart
                  </Heading>
                  <Text fontSize="sm" color="muted">
                    View your Cart
                  </Text>
                </Stack>
              </Box>
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
                boxShadow={useColorModeValue("xl", "xl-dark")}
                className="pulse"
              >
                <Stack onClick={() => navigate("/home", { replace: true })}>
                  <Heading
                    size={useBreakpointValue({
                      base: "sm",
                      md: "md",
                    })}
                  >
                    Recent
                  </Heading>
                  <Text fontSize="sm" color="muted">
                    View my Recent Orders
                  </Text>
                </Stack>
              </Box>
            </SimpleGrid>
          </Container>
        </Box>
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
                Admin overview
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
            <SimpleGrid
              columns={{
                base: 1,
                md: 3,
              }}
              gap={{
                base: "5",
                md: "6",
              }}
            >
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
                <Stack onClick={() => navigate("/adminUsers", { replace: true })}>
                  <Heading
                    size={useBreakpointValue({
                      base: "sm",
                      md: "md",
                    })}
                  >
                    Users
                  </Heading>
                  <Text fontSize="sm" color="muted">
                    View or Edit Users
                  </Text>
                </Stack>
              </Box>
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
                <Stack onClick={() => navigate("/adminProducts", { replace: true })}>
                  <Heading
                    size={useBreakpointValue({
                      base: "sm",
                      md: "md",
                    })}
                  >
                    Products
                  </Heading>
                  <Text fontSize="sm" color="muted">
                    View or Edit Products
                  </Text>
                </Stack>
              </Box>
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
                boxShadow={useColorModeValue("xl", "xl-dark")}
                className="pulse"
              >
                <Stack onClick={() => navigate("/adminAnalytics", { replace: true })}>
                  <Heading
                    size={useBreakpointValue({
                      base: "sm",
                      md: "md",
                    })}
                  >
                    Analytics
                  </Heading>
                  <Text fontSize="sm" color="muted">
                    View your analytics
                  </Text>
                </Stack>
              </Box>
            </SimpleGrid>
          </Container>
        </Box>
        <Box bg="gray.800" as="section" minH="140px" position="relative">
          <Box py="32" position="relative" zIndex={1}>
            <Box
              maxW={{ base: "xl", md: "7xl" }}
              mx="auto"
              px={{ base: "6", md: "8" }}
              color="white"
            >
              <Box maxW="xl">
                <Heading as="h1" size="3xl" fontWeight="extrabold">
                  Check out our most popular seller:
                </Heading>
                <Text fontSize={{ md: "2xl" }} mt="4" maxW="lg">
                  The Batman Who Laughs
                </Text>
              </Box>
            </Box>
          </Box>
          <Flex
            id="image-wrapper"
            position="absolute"
            insetX="0"
            insetY="0"
            w="full"
            h="full"
            overflow="hidden"
            align="center"
          >
            <Box position="relative" w="full" h="full">
              <Img
                src="https://d1466nnw0ex81e.cloudfront.net/n_iv/600/5131953.jpg"
                alt="Main Image"
                w="full"
                h="full"
                objectFit="cover"
                objectPosition="top bottom"
                position="absolute"
              />
              <Box position="absolute" w="full" h="full" bg="blackAlpha.600" />
            </Box>
          </Flex>
        </Box>
      </div>
      <Footer />
    </main>
  );
};

export default Profile;

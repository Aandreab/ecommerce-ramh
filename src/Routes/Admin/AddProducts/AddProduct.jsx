import { React, useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Text,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { addProduct } from "../../../api";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [genre, setGenre] = useState("");
  const [price, setPrice] = useState("");
  const [inventory, setInventory] = useState("");
  const [description, setDescription] = useState("");
  const [addMessage, setAddMessage] = useState("");
  const [products, setProducts] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onAdd = async (e, productId) => {
    e.preventDefault();
    const data = await addProduct(
      productId,
      title,
      author,
      publisher,
      imageLink,
      genre,
      price,
      inventory,
      description
    );
    if (data.error) {
      setAddMessage(data);
      onOpen();
    }
    if (data && data.name) {
      const newProduct = [
        data,
        ...products.filter((product) => {
          return product.id !== productId;
        }),
      ];

      setProducts(newProduct);
      setTitle("");
      setAuthor("");
      setPublisher("");
      setImageLink("");
      setGenre("");
      setPrice("");
      setInventory("");
      setDescription("");
      setAddMessage(newProduct);
      onOpen();
    }
  };
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading align={"center"} fontSize={"2xl"}>
            Add Product
          </Heading>
          <FormControl id="title">
            <FormLabel>Title</FormLabel>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </FormControl>
          <FormControl id="author">
            <FormLabel>Author</FormLabel>
            <Input value={author} onChange={(e) => setAuthor(e.target.value)} />
          </FormControl>
          <FormControl id="publisher">
            <FormLabel>Publisher</FormLabel>
            <Input
              value={publisher}
              onChange={(e) => setPublisher(e.target.value)}
            />
          </FormControl>
          <FormControl id="imageLink">
            <FormLabel>Image Link</FormLabel>
            <Input
              value={imageLink}
              onChange={(e) => setImageLink(e.target.value)}
            />
          </FormControl>
          <FormControl id="genre">
            <FormLabel>Genre</FormLabel>
            <Input value={genre} onChange={(e) => setGenre(e.target.value)} />
          </FormControl>
          <FormControl id="price">
            <FormLabel>Price</FormLabel>
            <Input value={price} onChange={(e) => setPrice(e.target.value)} />
          </FormControl>
          <FormControl id="inventory">
            <FormLabel>Inventory</FormLabel>
            <Input
              value={inventory}
              onChange={(e) => setInventory(e.target.value)}
            />
          </FormControl>
          <FormControl id="description">
            <FormLabel>Description</FormLabel>
            <Input
              type="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              onClick={(e) =>
                onAdd(
                  e,
                  title,
                  author,
                  publisher,
                  imageLink,
                  genre,
                  price,
                  inventory,
                  description
                )
              }
            >
              Add Product
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="80%"
          backdropBlur="2px"
        />
        <ModalContent>
          <ModalHeader textAlign={"center"}>{addMessage.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign={"center"} fontWeight={400}>
            <Text fontWeight={400}>{addMessage.message}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Stack>
  );
};
export default AddProduct;

import React from "react";
import { useState } from "react";
import { loginUser } from "../../api";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";

export default function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState({});
  const { isOpen, onOpen } = useDisclosure();
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.ppreventDefault();
  //   const loginInfo = await loginUser(username, password);
  //   setToken(loginInfo);
  //   setUsername("");
  //   setPassword("");
  //   navigate("/Home");
  // };
  // const onLogin = async (e) => {
  //   e.preventDefault();
  //   const loginInfo = await loginUser(username, password);
  //   if (loginInfo.error) {
  //     setLoginMessage(loginInfo);
  //     onOpen();
  //   }
  //   setToken(loginInfo)
  //   window.localStorage.setItem("token", loginInfo.token);
  //   window.localStorage.setItem("username", username);
  //   setLoginMessage(loginInfo);
  //   console.log(username, password); 
  //   onOpen();
  //   //navigate("/Home");
  // }; 

  const onLogin = async (e) => {
    e.preventDefault();
    const loginInfo = await loginUser(username, password);
    if (loginInfo.error) {
      setLoginMessage(loginInfo);
      onOpen();
    }
    window.localStorage.setItem("token", loginInfo.token);
    window.localStorage.setItem("username", username);
    const myToken = loginInfo.token;
    setToken(myToken);
    setLoginMessage(loginInfo);
    onOpen();
  };
  const navToRegister = async (e) =>{
    e.preventDefault();
    navigate("/Register")
  }
  const closeFunc = ()=>{
    
    navigate("/home")
  }
  // const navToHome = async (e) =>{
  //   e.preventDefault();
  //   navigate("/home")
  // }
  return (
    <Box h={"100vh"} bg={"white"}>
      <Container
        maxW="md"
        color={"#041C32"}
        py={{
          base: "12",
          md: "24",
        }}
      >
        <Stack spacing="8">
          <Stack spacing="6">
            {/* <Logo /> */}
            <Stack
              spacing={{
                base: "2",
                md: "3",
              }}
              textAlign="center"
            >
              <Heading
                size={useBreakpointValue({
                  base: "xs",
                  md: "sm",
                })}
              >
                Login to your account
              </Heading>
              <Text color="muted">Keep making your Comic(on)</Text>
            </Stack>
          </Stack>
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input
                  id="username"
                  placeholder="Username"
                  type="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  id="password"
                  placeholder="********"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </Stack>
            <Stack spacing="4">
              <Button type="submit" variant="solid" size="lg" bg={"white"} onClick={(e) => onLogin(e, setToken, username, password)}>
                Sign in
              </Button>
              <Button onClick={navToRegister}
                variant="secondary"
                iconSpacing="3"
              > Don't have an account?<p className="login-from-reg-link">Sign Up</p>
              </Button>
            </Stack>
          </Stack>
          <HStack spacing="1" justify="center"></HStack>
        </Stack>
      </Container>
      <Modal isCentered isOpen={isOpen} onClose={closeFunc}>
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="80%"
          backdropBlur="2px"
        />
        <ModalContent>
          <ModalHeader textAlign={"center"}>{loginMessage.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign={"center"} fontWeight={400}>
            <Text fontWeight={400}>{loginMessage.message}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={closeFunc}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

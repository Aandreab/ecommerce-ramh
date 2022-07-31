import React from "react";
import { useState } from "react";
import { registerUser } from "../../api";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Register({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  console.log(username);
  console.log(password);

  const onRegister = async (e) => {
    e.preventDefault();
    const result = await registerUser(username, password);
    window.localStorage.setItem("token", result.token);
    window.localStorage.setItem("username", username);
    const myToken = result.token;
    setToken(myToken);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const registerInfo = await registerUser(username, password);
  //   setToken(registerInfo);
  //   setUsername("");
  //   setPassword("");
  //   navigate("/Home");
  // };
  const handleLogin = async (e) => {
    e.preventDefault();
    navigate("/Login");
  };

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
                Create an account
              </Heading>
              <Text color="muted">Start making your dreams come true</Text>
            </Stack>
          </Stack>
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="username">Create Username</FormLabel>
                <Input
                  id="username"
                  placeholder="Create Username"
                  type="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Create Password</FormLabel>
                <Input
                  id="password"
                  placeholder="********"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
            </HStack>
            <Stack spacing="4">
              <Button
                type="submit"
                variant="solid"
                size="lg"
                bg={"white"}
                onClick={(e) => onRegister(e, setToken, username, password)}
              >
                Sign up
              </Button>
              <Button onClick={handleLogin} variant="secondary" iconSpacing="3">
                {" "}
                Don't have an account?
                <p className="login-from-reg-link">Sign Up</p>
              </Button>
            </Stack>
          </Stack>
          <HStack spacing="1" justify="center"></HStack>
        </Stack>
      </Container>
    </Box>
  );
}

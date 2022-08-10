import React from "react";
import { useState, useEffect } from "react";
import {
  Center,
  Button,
  Stack,
  Text,
  SimpleGrid,
  Avatar,
} from "@chakra-ui/react";
import { usersGrab, removeAdmin, promoteAdmin } from "../../../api";

const AdminUsers = ({token}) => {
  const [users, setUsers] = useState([]);
    // const [message, setMessage] = useState('');
    // const { isOpen, onOpen, onClose } = useDisclosure();
  //   const navigate = useNavigate();

  

  const AdminUsersData = async () => {
    const data = await usersGrab();
    console.log(data);
    setUsers(data);
  };
  useEffect(() => {
    AdminUsersData();
  }, []);

  const handleAdminRemove = async (e, id) => {
    e.preventDefault();
    await removeAdmin(token, id);
    //   setMessage(message.name);
    //   onOpen();
  };
    const handlePromote = async (e, id) => {
      e.preventDefault();
      await promoteAdmin(token, id);
    };

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      columnGap="8"
      rowGap={{ base: "10", lg: "16" }}
    >
      {users.map((user) => (
        <Stack key={user.id} spacing="4">
          <Stack spacing="5">
            <Center>
              <Avatar
                boxSize={{
                  base: "16",
                  md: "20",
                }}
              />
            </Center>
            <Stack spacing="1">
              <Center>
                <Text fontWeight="medium" fontSize={{ base: "lg", md: "xl" }}>
                  {user.userEmail}
                </Text>
              </Center>
              <Button onClick={(e) => handleAdminRemove(e, user.id)}>
                Remove Admin
              </Button>
              <Button onClick={(e) => handlePromote(e, user.id)}>Promote Admin</Button>
            </Stack>
          </Stack>
        </Stack>
      ))}
      {/* <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="80%"
          backdropBlur="2px"
        />
        <ModalContent>
          <ModalHeader textAlign={"center"}>{message.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign={"center"} fontWeight={400}>
            <Text fontWeight={400}>{}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </SimpleGrid>
  );
};

export default AdminUsers;

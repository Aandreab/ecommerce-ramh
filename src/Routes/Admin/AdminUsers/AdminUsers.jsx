import React from "react";
import { useState, useEffect } from "react";
import { Center, Button, Stack, Text, SimpleGrid, Avatar} from "@chakra-ui/react";



import { usersGrab } from "../../../api"; 
// import { getMyInfo } from "../../api";





const AdminUsers = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        const AdminUsersData = async () => {
          const data = await usersGrab();
          console.log(data);
          setUsers(data);
          return data; 
        };
        AdminUsersData();
      }, [setUsers]);
   
   

    return (
        <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        columnGap="8"
        rowGap={{ base: '10', lg: '16' }}
      >
        {users.map((user) => (
          <Stack key={user.id} spacing="4">
            <Stack spacing="5">
            <Center>
            <Avatar
                    boxSize={{
                      base: '16',
                      md: '20',
                    }}
                  />
                  </Center>
              <Stack spacing="1">
                <Center>
                    <Text fontWeight="medium" fontSize={{ base: 'lg', md: 'xl' }}>
                        {user.userEmail}
                    </Text>
                </Center>
                <Button>Remove Admin</Button>
                <Button>Promote Admin</Button>
              </Stack>
            </Stack>
          </Stack>
        ))}
      </SimpleGrid>
    )
}

export default AdminUsers; 
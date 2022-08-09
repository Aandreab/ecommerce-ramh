import React from "react";
import { useState, useEffect } from "react";
import { Box, Button, Stack, Text, SimpleGrid } from "@chakra-ui/react";



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
        {users.map((user) => (
          <Box
            key={user.id}
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
                      {user.userEmail}
                    </Text>
                    <Button>Remove Admin</Button>
                    <Button>Promote Admin</Button>
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    )
}

export default AdminUsers; 
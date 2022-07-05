import { useAuth } from "../../../contexts/AuthContext";
import {
    Center,
    Heading,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
function Profile() {
    const {user} = useAuth();
    return (
        <Center py={6}>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: '100%', md: '540px' }}
            height={{ sm: '476px', md: '20rem' }}
            direction={{ base: 'column', md: 'row' }}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            padding={4}>
         
            <Stack
              flex={1}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={2}>
              <Heading fontSize={'2xl'} fontFamily={'body'}>
                {user.email.substring(0, user.email.indexOf("@"))}
              </Heading>
              <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                {user.email}
              </Text>
            </Stack>
          </Stack>
        </Center>
      );
}

export default Profile;



  
 
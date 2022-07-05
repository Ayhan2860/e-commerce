import { Flex, Spinner  } from "@chakra-ui/react";
function PrivateSpinner()
{
   return  ( <>
        <Flex h="500px" w="100%" justifyContent="center" alignItems="center">
        <Spinner
         thickness='4px'
           speed='0.65s'
           emptyColor='teal.200'
           color='blue.500'
           size='xl'
   />
        </Flex>
       </>)
      
}

export default PrivateSpinner;
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Flex,
  } from '@chakra-ui/react'
function PrivateAlert({type, title, message}) {
 return  ( <Flex h="100px"  w="100%" justifyContent="center">
      <Alert  status={type}>
        <AlertIcon />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
   </Flex>)
}

export default PrivateAlert;
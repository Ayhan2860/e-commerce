import { Box, Flex, Text } from "@chakra-ui/react"

function Error404() {
    return <Flex justifyContent="center" >
        <Box  textAlign="center" w="75%">
            <Text color="teal.500" fontWeight="bold" fontSize="200px">4 😰 4</Text>
            <Text color="teal.500" fontSize="100px">Not Found</Text>
        </Box>
    </Flex>
}

export default Error404
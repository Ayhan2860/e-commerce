import { Box, Button, Flex, Grid, Text  } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";
function Home() {
    const {user} = useAuth()
    return (
        <>
          <Flex textAlign={"center"} justifyContent="center">
          <Box padding="5px 5px" boxShadow={"3px 3px 4px 3px gray"} w="90%">
          <Text padding="5px 5px" boxShadow={"3px 3px 4px 3px gray"} color={"teal"} fontSize={"3xl"} fontWeight={"bold"}>Welcome To Admin Page</Text>
         <Grid m={20} templateColumns="repeat(3, 1fr)" gap={4} >
        
                    <NavLink  to={`/profile/${user.email}`}> 
                    <Text display={"block"} boxShadow={"3px 3px 4px 3px gray"} padding="10px 0">Profile</Text>
                     </NavLink>
              
                
                    <NavLink to="orders"> 
                    <Text display={"block"} boxShadow={"3px 3px 4px 3px gray"} padding="10px 0">Orders</Text> 
                    </NavLink>
               
               
                    <NavLink to="products"> 
                    <Text display={"block"} boxShadow={"3px 3px 4px 3px gray"} padding="10px 0">Products</Text>
                   </NavLink>
                 
                    <NavLink  to="/"> 
                    <Text display={"block"} boxShadow={"3px 3px 4px 3px gray"} padding="10px 0">Home Page</Text>
                   </NavLink>

                   <NavLink  to="/basket"> 
                    <Text display={"block"} boxShadow={"3px 3px 4px 3px gray"} padding="10px 0">Basket</Text>
                  </NavLink>
         </Grid>
        </Box>
      </Flex>
        </>
       
    )
}

export default Home;
import { Box, Flex, Text } from "@chakra-ui/react";
import {   NavLink, Outlet } from "react-router-dom";

function Admin() {
    
    return <>
       <Flex mt={100} h="100vh" justifyContent="center">
        <Box color="teal.500" textAlign={"center"}  w="25%" className="dashboard-menu" >
            <Text display={"block"} fontWeight="semibold" boxShadow={"3px 3px 4px 3px gray"} padding="10px 0">Dashboard</Text>
           <Box mt={"15px"}>
           <ul>
                <li style={{margin:"15px 0"}}>
                    <NavLink  to=""> 
                    <Text display={"block"} boxShadow={"3px 3px 4px 3px gray"} padding="10px 0">Home</Text>
                     </NavLink>
                </li>
                <li style={{margin:"15px 0"}}>
                    <NavLink to="orders"> 
                    <Text display={"block"} boxShadow={"3px 3px 4px 3px gray"} padding="10px 0">Orders</Text> 
                    </NavLink>
                </li>
                <li style={{margin:"15px 0"}}>
                    <NavLink to="products"> 
                    <Text display={"block"} boxShadow={"3px 3px 4px 3px gray"} padding="10px 0">Products</Text>
                   </NavLink>
                </li>
            </ul>
           </Box>
        </Box>
        <Box  padding={"0 25px"}  w="75%" className="dashboard-content" >
        <Outlet/>
        </Box>
       
     </Flex>
    </>
}

export default Admin;
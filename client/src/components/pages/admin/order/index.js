import { useQuery } from "react-query"
import { fetchGetOrder } from "../../../../api";
import PrivateAlert from "../../../alert";
import PrivateSpinner from "../../../spinner";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Text
  } from '@chakra-ui/react'

function Order() {
    const {isLoading, error, data} = useQuery("admin:orders", fetchGetOrder);
    if (isLoading) return <PrivateSpinner/>;
 
    if (error) return <PrivateAlert type="error" title="An error has occurred" message={error.message}/>
    
 
    return   <>
        
    <Text mb="20px" fontSize="22px" fontWeight="bold" color="teal.500" textAlign="center" display={"block"} boxShadow={"3px 3px 4px 3px gray"} padding="10px 0">Orders</Text>
    
    <TableContainer padding="5px 5px" boxShadow={"3px 3px 4px 3px gray"}>
<Table size='sm'>
<Thead>
  <Tr>
    <Th>User</Th>
    <Th>Address</Th>
    <Th isNumeric>Items</Th>
  </Tr>
</Thead>
<Tbody>
  
  {
    data.map((item)=>{
    return <Tr key={item._id}>
    <Td>{item.user.email}</Td>
    <Td>{item.adress}</Td>
    <Td isNumeric> {item.items.length} </Td>
  </Tr>
    })
  }
  
</Tbody>

</Table>
</TableContainer>
</>
}

export default Order
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
    Text,
    useDisclosure
  } from '@chakra-ui/react';
import { EditIcon, AddIcon, DeleteIcon } from '@chakra-ui/icons'
import moment from 'moment';
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { fetchProductList, deleteProduct } from '../../../../api'
import PrivateAlert from '../../../alert';
import PrivateSpinner from '../../../spinner';
import PrivateDialog from '../../../alert-dialog';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// onClick={()=> deleteMutation.mutate(item._id, {onSuccess: () => console.log("success")})}
function Product() {
     const queryClient = useQueryClient();
     const [id, setId] = useState("")
     const {isLoading, error, data} = useQuery("admin:products", fetchProductList);
     const {isOpen, onClose, onOpen} = useDisclosure();
     const deleteMutation = useMutation(deleteProduct, {
        onSuccess : () => {queryClient.invalidateQueries("admin:products")},
       
     });
     
     
 

     if (isLoading) return <PrivateSpinner/>;
 
     if (error) return <PrivateAlert type="error" title="An error has occurred" message={error.message}/>
    return  (
        <>
        
        <Text mb="20px" fontSize="22px" fontWeight="bold" color="teal.500" textAlign="center" display={"block"} boxShadow={"3px 3px 4px 3px gray"} padding="10px 0">Products</Text>
        
        <TableContainer  padding="5px 5px" boxShadow={"3px 3px 4px 3px gray"}>
       <Link to="added">
       <Text color="teal.600" cursor="pointer"  textAlign="right" fontWeight="bold" mt="13px" mr="30px" >
        <AddIcon fontWeight="bold" fontSize="18px" w="30px" color="teal.600"/>Add</Text>
       </Link>
  <Table size='sm'>
    <Thead>
      <Tr>
        <Th>Title</Th>
        <Th>Description</Th>
        <Th isNumeric>Price</Th>
        <Th >Created At</Th>
        <Th></Th>
        <Th></Th>
      </Tr>
    </Thead>
    <Tbody>
      {
        data.map((item) => 
        <Tr key={item._id}>
        <Td>{item.title}</Td>
        <Td>{item.description.substring(0, 30)} ...</Td>
        <Td isNumeric>₺{item.price}</Td>
        <Td isNumeric>{moment(item.createdAt).format("DD/MM/YYYY")}</Td>
        <Td><Link to={`${item._id}`}><EditIcon cursor="pointer"  fontSize="22px" w="40px" color="yellow.600"/></Link></Td>
        <Td><DeleteIcon cursor="pointer" onClick={()=>{ setId(item._id); onOpen(); }} fontSize="22px" w="40px" color="red.600"/></Td>
      </Tr>
      )
      }
      
    </Tbody>
    <Tfoot mt="10px">
      
    </Tfoot>
  </Table>
 
</TableContainer>
<PrivateDialog headerText={"Delete Product"} bodyText="Do you want to delete this product ?" action={()=> { deleteMutation.mutate(id); onClose()}} onClose={onClose}  isOpen={isOpen}/>
</>

    )
}

export default Product
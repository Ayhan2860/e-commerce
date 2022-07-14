import { Flex, Image, Box, Grid, Button, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { fetchOrder } from "../../../api";
import { useBasket } from "../../../contexts/BasketContext";
import PrivateAlert from "../../alert";
import PrivateModal from "../../modal";

function Basket() {
    const {items, removeFromBasket, emptyBasket } = useBasket();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [address, setAddress] = useState("");
    const handleSubmitForm = async ()=>{
      const itemIds = items.map((item) => item._id);
      const input = {
         address,
         items: JSON.stringify(itemIds)
      }
      await fetchOrder(input)
      emptyBasket()
      onClose()
    }
  

    const total = items.reduce((acc, obj) => acc + obj.price, 0);
   
    return <>
        {items.length < 1 && <PrivateAlert type="warning" title="Unfortunately" message="You have not any items in your basket"/>}
        {
            items.length > 0 && (
                <>
                 <Flex alignItems="center" flexDirection="column"  justifyContent="center">
                  <Box style={{width:"75%"}}>
                    <ul>
                    <Grid templateColumns="repeat(3, 1fr)" gap={4} >
                       {
                        items.map((item) =>
                       
                         <li key={item._id}>
                            <Link  to={`/product/${item._id}`}>
                              <Image w="200px" src={item.photos[0]} alt="product"/>
                               {item.title}<br/>₺{item.price}
                            </Link>
                           <Box>
                           <Button onClick={()=> removeFromBasket(item._id)} mt="13px" colorScheme="teal">Remove from basket</Button>
                           </Box>
                         </li>
                       
                        )
                       }  
                    </Grid>
                   
                    </ul>
                    
                  </Box>
                  <Box padding="10px" borderRadius="10px" background="teal.300" boxShadow="3px 4px 4px 1px gray" mt="215px">
                  <Text letterSpacing="1px" fontWeight="bold">Total Price : ${total}</Text>
                  <Button color="#000" letterSpacing="1px" fontSize="14px" w="100%" mt="15px" h="25px" onClick={onOpen} colorScheme="teal">Order</Button>
                  </Box>
                  <PrivateModal 
                  address={address}
                  handleSubmitForm={handleSubmitForm} 
                  setAddress={setAddress} 
                  items={items} 
                  isOpen={isOpen} 
                  onClose={onClose}/>
                </Flex>
                
               </>
               
            )
          
        }
    </>
}
export default Basket;
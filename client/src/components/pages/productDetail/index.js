import { useQuery } from "react-query";
import { useParams } from 'react-router-dom';
import { fetchProductDetail } from "../../../api";
import { Box, Button, Text } from "@chakra-ui/react";
import styles from './styles.module.css'
import ImageGallery from 'react-image-gallery';
import PrivateSpinner from "../../spinner";
import PrivateAlert from "../../alert";

function ProductDetail() {
   const {product_id} = useParams()
    const {isLoading, error, data} = useQuery(["product", product_id], ()=>(fetchProductDetail(product_id)));
    if (isLoading) return <PrivateSpinner/>;
 
   if (error) return <PrivateAlert type="error" title="An error has occurred" message={error.message}/>



  const images = data.photos.map((url)=> ({original:url}))
    return <Box className={styles.container} >
         <Box overflow="hidden" w="70%">
         <ImageGallery  className={styles.image_galary} items={images} />
         <Box w="20%" margin="10px auto">
         <Button colorScheme="teal">Add to basket</Button>
         </Box>
          <Text w="25%" textAlign="center" margin="10px auto" fontWeight="semibold">{data.title} <br/>
           Price : ₺{data.price}
          
          </Text>
          <p>{data.description}</p>
         </Box>
        
    </Box>
}

export default ProductDetail;
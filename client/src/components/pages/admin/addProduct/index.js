import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, IconButton, Input, Text, Textarea } from "@chakra-ui/react";
import { FieldArray, Formik } from "formik";
import validationSchema from "./validations";
import {  message } from 'antd';
import { addedProduct } from "../../../../api";
import { useMutation, useQueryClient } from "react-query";

function AddProduct() {
    const queryClient = useQueryClient();
    const newProductMutation = useMutation(addedProduct, {
        onSuccess: ()=>  queryClient.invalidateQueries('admin:new_product')
    })
    const handleSubmit = async (values, bag) =>{
        message.loading({content:"Loading....", key:"product_added"})
        try {
         
          const newValues = {...values, photos:JSON.stringify(values.photos)}
          newProductMutation.mutate(newValues, {
            onSuccess : () => {
                message.success({
                    content:"The product successfully added.",
                    key:"product_added",
                    duration:2
                  })
                
              
            }
          })
          values.title = "";
          values.description = "";
          values.price = "";
          values.photos = []
        } catch (e) {
          message.error('The product does not added.')
        }
    }



    return (
        <>
         <Formik
          initialValues={{
            title : '',
            description: '',
            price: '',
            photos: []
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
         >
         {({
            handleSubmit,
            handleChange,
            handleBlur,
            errors,
            touched,
            values,
            isSubmitting
         }) =>(
            <>
             <Flex h="80vh" alignItems="center" justifyContent="center" >
                
                <Box  borderRadius="10px" padding="15px 15px" boxShadow={"3px 3px 4px 3px gray"} w="500px">
                <Text letterSpacing="2px" fontSize="20px" h="45px" color="teal.500" padding="5px 5px" boxShadow={"3px 3px 4px 3px gray"} fontWeight="bold" textAlign="center">Product Added</Text>
                 <form style={{padding:"10px 0"}} onSubmit={handleSubmit}>
                    <FormControl mt="10px">
                        <FormLabel color="teal.500" htmlFor="title">Title : </FormLabel>
                        <Input 
                        name="title"
                        value={values.title}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        isInvalid={touched.title && errors.title}

                        />
                        {touched.title && <FormHelperText color="red" m="10px 0">{errors.title}</FormHelperText>}
                    </FormControl>
                    <FormControl mt="10px">
                        <FormLabel color="teal.500" htmlFor="description">Description : </FormLabel>
                        <Textarea 
                        overflow="hidden"
                        name="description"
                        value={values.description}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        isInvalid={touched.description && errors.description}
                        />
                        {touched.description && <FormHelperText color="red" m="10px 0">{errors.description}</FormHelperText>}
                    </FormControl>
                    <FormControl mt="10px">
                    <FormLabel color="teal.500" htmlFor="price"> Price :</FormLabel>
                        <Input 
                        name="price"
                        value={values.price}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        isInvalid={touched.price && errors.price}
                                        
                        />
                        {touched.price && <FormHelperText color="red" m="10px 0">{errors.price}</FormHelperText>}
                    </FormControl>
                    <FormControl mt="10px">
                    <FormLabel color="teal.500" htmlFor="price"> Photos :</FormLabel>
                        <FieldArray
                        name="photos"
                        render={(arrayHelpers) =>(
                            <>
                              {
                                values.photos && 
                                values.photos.map((photo, index) =>(
                                    <div style={{position:"relative", margin:"10px 0"}}   key={index}>
                                        <Input
                                         w="90%"
                                         name={`photos.${index}`}
                                       
                                
                                         value={photo}
                                         disabled={isSubmitting}
                                         onChange={handleChange}
                                        />
                                     <IconButton 
                                      colorScheme={"red"} 
                                      right={"5px"} 
                                      position={"absolute"}
                                       onClick={()=> arrayHelpers.remove(index)}
                                      icon={<DeleteIcon/>}/>
                                    </div>
                                ))}
                             
                                <Box mb={5}>
                                <Text
                               
                                right={"55px"} 
                                bottom="-45px"
                                position={"absolute"}
                                color="teal.500"
                                >Add a photo</Text>
                                  <IconButton 
                                 colorScheme={"teal"} 
                                 right={"5px"} 
                                 position={"absolute"}
                                 onClick={()=> arrayHelpers.push('')}
                                 
                                 icon={< AddIcon />}/> 
                                </Box>                      
                            </>
                            )}
                        />
                    </FormControl>
                  <Box mt="15px">
                    <Button colorScheme="teal" type="submit" >Added Product</Button>
                  </Box>
                 </form>
                </Box>
            </Flex>
         </>
         )
         
         
         }
         </Formik>
    </>
    )
}

export default AddProduct;
import { Box, Button, Flex, Grid  } from "@chakra-ui/react";
import PrivateSpinner from "../../spinner";
import { useInfiniteQuery } from "react-query";
import { fetchProductList } from "../../../api";
import Card from "../../card";
import React from "react";
import PrivateAlert from "../../alert";


function Products() {

    const { data,
      error,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage,
      status} = useInfiniteQuery('products', fetchProductList, {
      getNextPageParam: (lastPage, allGroups) =>
      {
          const morePageExist = lastPage?.length === 9;
          if(!morePageExist)
             return;
           else 
             return allGroups.length +1
      }
    })
 
   if (status ==="loading") return <PrivateSpinner/>;
 
   if (status === "error") return <PrivateAlert type="error" title="An error has occurred" message={error.message}/>




    return <div>
        <Grid templateColumns="repeat(3, 1fr)" gap={4} >
     
          {/* {
            data.map((item, key) =>{
                return <Card key={key} item={item}/>
            })
          } */}

          {
            data.pages.map((group, i) =>(
              <React.Fragment key={i}>
               {
                group.map((item) =>(
                  <Box key={item._id} w="100%">
                    <Card item={item}/>
                  </Box>
                ))
               }
              </React.Fragment>
            ))
          }
         
     
        </Grid>
        <Flex margin="10px" justifyContent="center">
         <Button colorScheme="teal" variant="outline"
           onClick={() => fetchNextPage()}
           isLoading={isFetchingNextPage}
           disabled={!hasNextPage || isFetchingNextPage}
         >
           {isFetchingNextPage
             ? 'Loading more...'
             : hasNextPage
             ? 'Load More'
             : 'Nothing more to load'}
         </Button>
       </Flex>
    </div>
}

export default Products;
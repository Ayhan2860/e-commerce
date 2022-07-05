import {
    FormControl,
    FormLabel,
    Box,
    Text,
    Input,
    Flex,
    Button,
    FormHelperText
  } from '@chakra-ui/react'
  import {useFormik} from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { fetchLogin } from '../../../../api';
import { useAuth } from '../../../../contexts/AuthContext';
import PrivateAlert from '../../../alert';
  import validationSchema from "./Validations";

function Signin() {
    const {login} = useAuth()
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues:{
            email:'',
            password:'',
        },
        
        onSubmit: async(values, bag)=>{
            try {
                const response = await fetchLogin({email:values.email, password:values.password});
                login(response)
                navigate("/")
            } catch (error) {
                bag.setErrors({general: error.response.data.message})
            }
        },
        validationSchema,
    })
    return <div>
          
    {
      formik.errors.general && <PrivateAlert  type={"error"} title="" message={formik.errors.general}/>
    }
   <Flex w="100%" h="650px" alignItems="center" justifyContent="center">
      
<Box p="15px" boxShadow="1px 3px 5px gray" h="auto" w="440px">
<Text textAlign="center" mb="15px" color="teal" letterSpacing="2px" fontSize="28px" fontWeight="bold" >Sign In</Text>
<form  onSubmit={formik.handleSubmit}>
<FormControl>
   <FormLabel htmlFor='email'>Email address</FormLabel>
   <Input 
   name='email'
   id='email' 
   onChange={formik.handleChange} 
   onBlur={formik.handleBlur}
   value={formik.values.email}
   isInvalid={formik.touched.email && formik.errors.email}
   type='email' />
   {formik.touched.email && <FormHelperText color="red" m="10px 0">{formik.errors.email}</FormHelperText>}
</FormControl> 
<FormControl>
   <FormLabel htmlFor='password'>Password</FormLabel>
   <Input 
   name='password' 
   id='password' 
   onChange={formik.handleChange} 
   onBlur={formik.handleBlur}
   value={formik.values.password}
   isInvalid={formik.touched.password && formik.errors.password}
   type='password' />
   {formik.touched.password && <FormHelperText color="red" m="10px 0">{formik.errors.password}</FormHelperText>}
</FormControl>
 <Flex  justifyContent="space-around">
<Button  type="submit" margin="15px auto"  colorScheme="teal">Signin</Button>
<Link   to="/signup" style={{margin:"15px auto", paddingTop:"8px", color:"teal", textDecoration:"underline", fontSize:"15px"}} >Create account</Link>
</Flex>
</form>

</Box> 

</Flex>   
</div>
}

export default Signin;
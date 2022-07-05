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
import { fetchRegister } from '../../../../api';
import { useAuth } from '../../../../contexts/AuthContext';
import PrivateAlert from '../../../alert';
  import validationSchema from "./Validations";

function Signup() {
    const {login} = useAuth()
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues:{
            email:'',
            password:'',
            passwordConfirm:''
        },
        validationSchema,
        onSubmit: async(values, bag)=>{
            try {
                const response = await fetchRegister({email:values.email, password:values.password});
                login(response)
                navigate("/");
            } catch (error) {
                bag.setErrors({general: error.response.data.message})
            }
        }
    })
    
    return <div>
          
         {
           formik.errors.general && <PrivateAlert  type={"error"} title="" message={formik.errors.general}/>
         }
        <Flex w="100%" h="650px" alignItems="center" justifyContent="center">
           
    <Box p="15px" boxShadow="1px 3px 5px gray" h="auto" w="440px">
   <Text textAlign="center" mb="15px" color="teal" letterSpacing="2px" fontSize="28px" fontWeight="bold" >Sign Up</Text>
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
    <FormControl>
        <FormLabel htmlFor='passwordConfirm'>Password Confirm</FormLabel>
        <Input 
        name='passwordConfirm' 
        id='passwordConfirm' 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur}
        value={formik.values.passwordConfirm}
        isInvalid={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
        type='password' />
        {formik.touched.passwordConfirm && <FormHelperText color="red" m="10px 0">{formik.errors.passwordConfirm}</FormHelperText>}
    </FormControl>
    <Flex  justifyContent="space-around">
<Link   to="/signin" style={{margin:"15px auto", paddingTop:"8px", color:"teal", textDecoration:"underline", fontSize:"15px"}} >My have a account</Link>

<Button  type="submit" margin="15px auto"  colorScheme="teal">Signup</Button>
</Flex>
   </form>
  
</Box> 

</Flex>   
    </div>
}

export default Signup;
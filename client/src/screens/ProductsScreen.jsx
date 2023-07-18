import { Alert, AlertDescription, AlertIcon, AlertTitle, Center, Spinner, Stack, Wrap, WrapItem } from '@chakra-ui/react'
import ProductCard from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../redux/actions/productActions';
import { Link as ReactLink } from 'react-router-dom';


const ProductsScreen = () => {

  const dispatch = useDispatch();
  console.log(dispatch)

  const {loading, error, products} = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <Wrap spacing={'30px'} justify={'center'} minHeight={'100vh'}>
      {loading ? (
        <Stack direction={'row'} spacing={4}>
          <Spinner mt={20} thickness='2px' speed='0.65s' emptyColor='gray.200' color='orange.200' size={'xl'} />
        </Stack>
      ): error ? (
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>We are sorry!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ):(
        products.map((product) => (
          <WrapItem key={product._id}>
              <Center w={'250px'} h={'550px'}>
                  <ProductCard product={product} />
              </Center>
          </WrapItem>
        ))
        ) 
        }
    </Wrap>
  )
}

export default ProductsScreen


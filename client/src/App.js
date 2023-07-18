import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductsScreen from './screens/ProductsScreen'
import ShoppingCartScreen from './screens/ShoppingCartScreen'


export default function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path='/products' element={<ProductsScreen />} ></Route>
            <Route path='/shoppingcart' element={<ShoppingCartScreen />} ></Route> 
          </Routes>
        </main>
      </Router>
    </ChakraProvider>
  )
}
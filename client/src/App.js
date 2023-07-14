import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'

export default function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <main>
          <Routes></Routes>
        </main>
      </Router>
    </ChakraProvider>
  )
}
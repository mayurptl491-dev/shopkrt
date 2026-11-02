import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Login from './pages/Login'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Products from './Products'
import { useContext } from 'react'
import { ThemeContext, ThemeProvider } from './components/ThemeContext'
import { CartProvider } from './components/CartContext'
import Contact from './pages/Contact'
import About from './pages/About'


function AppContent() {

  const { theme } = useContext(ThemeContext)

  return (
    <div className={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Login />}  />
            <Route path='/Home' element={<Home />} />
            <Route path='About' element={<About />} />
            <Route path='/Products' element={<Products />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path="/Contact" element={<Contact />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function App() {
  return (
    <CartProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </CartProvider>
  )
}

export default App
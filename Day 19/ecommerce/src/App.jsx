
import { useState } from 'react'
import './App.css'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'
import Products from './components/shop/Products'
import Banner from './components/static/Banner'
import Users from './components/users/Users'
import Cart from './components/shop/Cart'

function App() {
  // const [value, setValue] = useState(0)
  const [cart,setCart] = useState([])


  const handleAddToCart = (product) =>{
  
    const newCart = [...cart, product]
    setCart(newCart)
  }

  console.log("cart", cart)
  return (
    <>


      <Header cart={cart}></Header>
      <Banner></Banner>

      <Products handleAddToCart={handleAddToCart}> Ami Handle Add to cart k niye jacchi </Products>
      <Users></Users>
      <Cart cart={cart}></Cart>
      <div className='min-h-screen'></div>

      <Footer></Footer>

    </>
  )
}

export default App

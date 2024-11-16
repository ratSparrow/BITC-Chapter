
import { useState } from 'react'
import './App.css'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'
import Products from './components/shop/Products'
import Banner from './components/static/Banner'
import Users from './components/users/Users'

function App() {
  const [value, setValue] = useState(0)


  const handleIncrease = () =>{
    let newValue = value+10
    setValue(newValue)
  
  }
  const handleDecrease = () =>{
    let newValue = value-10
    setValue(newValue)
  }




  return (
    <>
      {/* <h1 className='text-3xl text-center'>Value = {value}</h1>

      <button onClick={handleIncrease} className='btn'>Increase</button>
      <button onClick={handleDecrease} className='btn'>Decrease</button> */}

      <Header></Header>
      <Banner></Banner>
      <Users></Users>
      <Products></Products> 

      <div className='min-h-screen'></div>

      <Footer></Footer>

    </>
  )
}

export default App

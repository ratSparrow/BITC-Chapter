
import { useState } from 'react'
import './App.css'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'
import Products from './components/shop/Products'
import Banner from './components/static/Banner'

function App() {
  const [value, setValue] = useState(0)
  const [users, setUsers] = useState([])

  const handleIncrease = () =>{
    let newValue = value+10
    setValue(newValue)
  
  }
  const handleDecrease = () =>{
    let newValue = value-10
    setValue(newValue)
  }

  console.log("users er moddhe ase", users)

  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data =>setUsers(data))

  return (
    <>
      <h1 className='text-3xl text-center'>Value = {value}</h1>

      <button onClick={handleIncrease} className='btn'>Increase</button>
      <button onClick={handleDecrease} className='btn'>Decrease</button>

      {/* <Header></Header>
      <Banner></Banner>
      <Products></Products> */}

      <div className='min-h-screen'></div>

      <Footer></Footer>

    </>
  )
}

export default App

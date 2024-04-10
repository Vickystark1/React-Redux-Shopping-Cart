import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import {Routes,Route} from "react-router-dom"
import Carts from './components/Carts';
import Cartsdata from './components/CartsData';
import CartsDetails from './components/CartsDetails';
import Orders from './components/Orders';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Carts/> }/>
      <Route path='/carts/:id' element={<CartsDetails /> }/>
      <Route path="/order" element={<Orders/>}/>
     </Routes>
    </>
  )
}

export default App;

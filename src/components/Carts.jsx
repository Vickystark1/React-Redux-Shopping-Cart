import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cartsdata from './CartsData';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { ADD } from '../Redux/actions/action';
import { Container } from 'react-bootstrap';

const Carts = () => {

  const [quantity,setQuantity]= useState(0);
  const dispatch = useDispatch();


  const getData = useSelector((storedData)=>{
    return storedData.cartreducer.carts
});



const total = ()=>{
  let quantity = 0 ;
  getData.map((data,k)=>{
      quantity = quantity + data.qnty
  });
  setQuantity(quantity);
  
};



  const send= (data)=>{
    dispatch(ADD(data));
    setCartsDatas(Cartsdata);
  }

  useEffect(()=>{
    total()
  
  },[total])
  

  const [CartsDatas,setCartsDatas] = useState(Cartsdata);
  
  return (<Container>
    <div className=' mt-3'>
     <h2 className='text-center'> Menu Items</h2>
     <div className='row d-flex justify-content-center' >
      {CartsDatas.map((data,id)=>{
        return (<Card key={data.id} style={{ width: '18rem',border:"none" }} className='cart_style mt-4 mx-2'>
         <Card.Img variant="top" src={data.imgdata} style={{height:"16rem"}} />
         <Card.Body>
           <Card.Title>{data.rname}</Card.Title>
           <Card.Text>{data.address}</Card.Text>
           <Card.Text>
             {data.somedata}
           </Card.Text>
           <Card.Text> Quantity : {getData.filter((data)=>{return data.id-1 ==id}).map((cart,id)=>{
                return (quantity == 0 ? "":cart.qnty)})} </Card.Text>

           <Card.Text>{`₹${data.price}`}</Card.Text>
           <Button variant="primary" onClick={()=>send(data)}>Add to cart</Button>
         </Card.Body>
       </Card>)
      })}
    
     </div>
    </div>
  </Container>
    
  )
}

export default Carts;

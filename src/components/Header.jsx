import { Badge, Menu, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import cartimg from '../../src/assets/cart.gif';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table } from 'react-bootstrap';
import { ADD, DLT } from '../Redux/actions/action';

const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const dlt = (id)=>{
        dispatch(DLT(id))
    };

    const [price ,setPrice] = useState(0);
    

    const getData = useSelector((storedData)=>{
        return storedData.cartreducer.carts
    });

    

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

   

  const send= (data)=>{
    dispatch(ADD(data));
    
  }

    const total = ()=>{
        let price = 0 ;
        getData.map((data,k)=>{
            price = data.qnty*data.price + price
        });
        setPrice(price);
    };

    const Order = ()=>{
        navigate("/order")
    }

    useEffect(()=>{
        total()
    },[total])

  return (
    <div>
       <Navbar bg="dark" data-bs-theme="dark" style={{height:"60px",position:"sticky",zIndex:111}}>
        <Container>
          <NavLink to="/" className='text-decoration-none text-light' style={{fontSize:"larger"}}><img src={cartimg} alt="" style={{height:40 , width:40,borderRadius:4 }} className='mx-1'/>
          <strong><span style={{color:"#ED9538"}}>Foodito</span></strong>
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className='text-decoration-none text-light mx-3'>Home</NavLink>
          </Nav>
          <Badge badgeContent={getData.length} color="primary" 
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}>
          <i className="fa-solid fa-cart-shopping text-light " style={{fontSize:"large",cursor:"pointer"}}></i>
           </Badge>

        </Container>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >{
        getData.length? <div className="card_details" style={{width:"24rem",padding:10,position:"relative"}}>
            <Table>
                        <thead>
                            <tr>
                                <td>Dish Photo</td>
                                <td>Dish Details</td>
                            </tr>
                        </thead>
                        <tbody>
                        {getData.map((cart,id)=>{
                return (
                    <>
                        <tr key={id}>
                            <td key={`${id}-imgdata`}>
                                <NavLink to={`/carts/${cart.id}`} onClick={handleClose}>
                                <img src={cart.imgdata} alt='' style={{width:"5rem",height:"5rem"}}/>
                                </NavLink>
                            </td>
                            <td key={`${id}-cartdata`}>
                                <p>{cart.rname}</p>
                                <p><strong>Price :</strong> ₹{cart.qnty*cart.price}</p>
                                <p><strong>Quantity :</strong>
                                {/* <input type='number' value={cart.qnty} onChange={()=>send(cart.qnty)}/> */}
                                {cart.qnty}</p>
                                <p style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(cart.id)}>
                                    <i className='fas fa-trash smalltrash'/>
                                </p>
                            </td>
                            <td key={`${id}-trash`} className='mt-5' style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(cart.id)}>
                                <i className='fas fa-trash largetrash'/>
                            </td>
                        </tr>
                    </>
                            )
                        })}
                        <p className='mt-3'><strong>Total :</strong>₹{price}</p>
                        
                        <Button variant='success' className='my-1' style={{float:"right"}}  onClick={Order}>Place Order</Button>
                        
                        </tbody>
                    </Table>
           
        </div> :
        <div className='card_details justify-content-center align-items-center' style={{width:"24rem",padding:10,position:"relative"}}>
            <i className='fas fa-close smallclose' style={{position:"absolute",top:2,right:20,fontsize:23,cursor:"pointer"}} onClick={handleClose}></i>
            <p style={{fontSize:23}}>your cart is Empty</p>
            <img src={cartimg} alt="" className='emptycart_img' style={{width:"5rem",padding:10}}/>
        </div>
     }
        
      </Menu>
      </Navbar>
      
          </div>
  )
}

export default Header;

import React from 'react';
import tick from "../assets/tick.gif";

const Orders = () => {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{position:"relative",top:"30vh",alignItems:"center"}} >
      <div style={{display:"flex",position:"relative",height:"10vh",padding:"10px 10px",border:"1px dashed gray",alignItems:"center",justifyContent:"center"}}>
        <img src={tick} alt ="" style={{height:80,Width:80,position:'absolute',top:-40,borderRadius:"50px 50px"}}/>
        <h2 style={{position:"relative",top:"2.5vh"}}>Order Placed Successfully</h2>
        
        </div>
    </div>
  )
}

export default Orders;

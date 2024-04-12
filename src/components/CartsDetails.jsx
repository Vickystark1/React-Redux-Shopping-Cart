import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { DLT } from '../Redux/actions/action';

const CartsDetails = () => {
  const [cartData,setCartData]= useState([]);
  const {id} = useParams();
  const history = useNavigate();
  const dispatch = useDispatch();
 
  const getData = useSelector((storedData)=> storedData.cartreducer.carts);

const compare = ()=>{
  let compareData = getData.filter((data)=>{
    return data.id==id
  });
  
  setCartData(compareData);
};

const dlt = (id)=>{
  dispatch(DLT(id));
   history('/');
};

useEffect(()=>{
  compare();
},[id])

  return (

    <div >
      <div className="container mt-2">
        <h2 className='text-center'>Item Details</h2>
        <section className="container mt-3">
          <div className="iteamsdetails">
            {
              cartData.map((data)=>{
                return (
                  <>
                    <div className="items_img">
              <img src={data.imgdata} alt="" />
            </div>
            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p><strong>Restaurant</strong>: {data.rname}</p>
                    <p><strong>Price</strong>: ₹{data.price}</p>
                    <p><strong>Dishes</strong>:{data.address}</p>
                    <p><strong>Total</strong>: ₹{data.qnty*data.price}</p>
          
                  </td>
                  <td>
                    <p><strong>Rating :</strong><span className='mx-2' style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}} >{data.rating}✯</span></p>
                    <p><strong>Order review :</strong><span className="mx-2">{data.somedata}</span></p>
                    <p><strong>Remove :</strong><i className='fas fa-trash mx-2 ' style={{color:"red",cursor:"pointer"}} onClick={()=>dlt(data.id)}></i></p>
                  </td>
                </tr>
              </Table>
            </div>
                  </>
                )
              })
            }
            
          </div>
        </section>
      </div>
      
    </div>
  )
}

export default CartsDetails;

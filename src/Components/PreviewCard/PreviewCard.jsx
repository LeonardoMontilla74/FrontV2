import React from 'react';
import { Link } from "react-router-dom";
import a from "./previewCard.module.css";
import { useDispatch } from 'react-redux/es/exports';
import { updateStock } from '../../Redux/actions';
import { useEffect } from 'react';

export default function Product(props) {
  const { products } = props;
  const dispatch=useDispatch()
  useEffect(()=>{return upStock()},[])
  //console.log(props)

  function upStock(){
        if(products.orders&&products.orders[0].amount){
          dispatch(updateStock(products.orders[0].productId,{Quantity:products.orders[0].amount}))
        }
  }
  return (
    <div className={a.cardContainer}>

        <Link to={`/products/${products.id}`}>
          <img
            src={products.image}
            alt={products.name}
            width="100px"
            height="150px"
          />
        </Link>


      <Link to={`/products/${products.id}`}>
        <h2>
          {products.name.replace(/[#-]/g, " ")}
        </h2>
      </Link>
      <h4>Quantity:{" "} {products.orders && products.orders[0].amount}</h4>
      <h4>Price:{" "} ${products.price}</h4>
      <h5>Total ${products.orders[0].amount * products.price}</h5>
      {console.log(products.orders)}
      {/* {props.isAuthenticated&&
      products.orders&&products.orders[0].amount&&dispatch(updateStock(products.orders[0].productId,{Quantity:products.orders[0].amount}))} */}
    </div>
  )
}

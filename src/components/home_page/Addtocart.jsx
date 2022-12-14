import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios';
import "./addtocart.css"

import { useDispatch} from 'react-redux';
import { addCart, totalItem } from '../Actions/action';

function Addtocart() {

  const [product, setProduct] = useState([])
  // const [price,setPrice] = useState(product.price)

  //  console.log(totalIte);
  const dispatch = useDispatch();

  const order = () => {
    dispatch(addCart(product))
    dispatch(totalItem())
  }
  
  useEffect(() => {

    axios
      .get(`https://hassanwebsite.herokuapp.com/products/${window.location.href.split("/")[4]}`)
      .then((res) => setProduct(res.data))
      // console.log(product)
      .catch((err) => console.log("error", err))

  }, [])
  // console.log(product)
  return (
    <>
      <Header />
      <div className="Addto_main">
        <div className="box_one">
          <img src={product.image} width="100%" alt="" />
        </div>
        <div className="box_two">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h4>Rs:{product.price}</h4>

          <button className='order_btn' onClick={order}>ORDER NOW</button>
        </div>
      </div>







    </>
  )
}

export default Addtocart;
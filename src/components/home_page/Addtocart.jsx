import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios';
import "./addtocart.css"
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {addCart} from '../Actions/action';
import cartReducer from '../Reducers/reducer';
function Addtocart() {

  const [product, setProduct] = useState([])
  // const [price,setPrice] = useState(product.price)

  const dispatch = useDispatch();
  const orders = useSelector((state)=>state.cartReducer.cardData)
  // console.log(orders);
const order = ()=>{
  dispatch(addCart(product))
}
  useEffect(() => {

    axios
      .get(`http://192.168.1.112:4000/products/${window.location.href.split("/")[4]}`)
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
          <div className="increm">
            {/* <button className='plus_btn'></button> */}
            {/* <AddCircleRoundedIcon className='plus_icon' />
            <h4 className='num'>{num}</h4>
            <RemoveCircleRoundedIcon className='plus_icon' /> */}
          </div>
          <button className='order_btn' onClick={order}>ORDER NOW</button>
        </div>
      </div>







    </>
  )
}

export default Addtocart;
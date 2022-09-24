import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios';
import "./addtocart.css"
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
function Addtocart() {

  const [product, setProduct] = useState([])
 

  // const { Id } = useParams();
  useEffect(() => {
 
    axios
      .get(`http://192.168.2.112:4000/products/${window.location.href.split("/")[4]}`)
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
       <h4>Price : {product.price}Rs</h4>
       <div className="increm">
       {/* <button className='plus_btn'></button> */}
       <AddCircleRoundedIcon className='plus_icon'/>
         <h4 className='num'>0</h4>
       <RemoveCircleRoundedIcon className='plus_icon'/>
       </div>
       <button className='order_btn'>ORDER NOW</button>
      </div>
    </div>







    </>
  )
}

export default Addtocart;
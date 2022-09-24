import React from 'react'
import "./Menuitems.css"

import { Link } from "react-router-dom"
// import  data  from '../../data'
function Card({ image, title, price, id }) {
//   cons
    return (
        <>

            <Link to={`/products/${id}`} className='edit_cartLink' >
                <div className="main_cart">
                    <div className="cart">

                        <img src={image} width="100%" alt="" />
                        <h3 className='cart_title'>{title}</h3>
                        <p>{price}</p>


                    </div>
                </div>
            </Link>



        </>
    )
}

export default Card
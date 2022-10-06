import React from 'react'
import Header from './Header'
import "./card.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import { useState } from 'react';
import { decrement, increment, minusTotalItem, totalItem } from '../Actions/action';
import { useEffect } from 'react';


function Card() {
    const dispatch = useDispatch();
    // const [total, setTotal] = useState(0)
    const orders = useSelector((state) => state.cartReducer.cardData)
    const [cart, setCart] = useState([])
    const navigate = useNavigate();
    const totalIte = useSelector((state) => state.incrementNum)
    // const remove = (id) => {
    //     dispatch(removeCart(id))
    //     // setNum(num - 1)
    //     // dispatch(removetTotalItem(id))
    // }

    const plus = (id) => {
        dispatch(increment(id))
        // setNum(num + 1)
        dispatch(totalItem())
    }
    const minus = (id) => {
        dispatch(decrement(id))
        dispatch(minusTotalItem())
        // setNum(num - 1)
    }
    const checkOut = async () => {
        const res = await fetch("https://hassanwebsite.herokuapp.com/addOrders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "ordersItems": orders }, "name")
        })
        const data = await res.json();
        console.log(data);

        // setTimeout(()=>{
        navigate("/orderSuccess")
        // },2000)
    }
    useEffect(() => {
        setCart(orders)

        // eslint-disable-next-line
    }, [cart, plus, minus])

    return (
        <>


            <Header />

            {orders.length ? (
                <>

                    <h1 className='your_items'>Your Items</h1>
                    <div className="order_now">
                        <div className="total"><h1>Total price : {
                            cart.map(item => item.price * item.countInStock).reduce((total, value) => total + value, 0)
                        }</h1>
                        </div>
                        <div className='items'><h4>You have {totalIte} items</h4></div>
                        <div className="orders_btn"><button className='ord_btn' onClick={checkOut}>Order Now</button></div>
                    </div>

                    <div className="parent_card">


                        {
                            cart.map((elem, index) => {
                                return (
                                    <>
                                        <div className="card_main" key={index}>
                                            <img src={elem.image} alt="" width="15%" className='card_img' />
                                            <h4 className='banana'>{elem.name}</h4>
                                            <div className="incr">
                                                <AddCircleRoundedIcon className='plus_icon' onClick={() => plus(elem._id)} />
                                                <h4 className='num'>{elem.countInStock}</h4>
                                                <RemoveCircleRoundedIcon className='plus_icon'
                                                    onClick={() => minus(elem._id)}
                                                />
                                            </div>
                                            <h4 className='rs'>Rs : {elem.price * elem.countInStock} </h4>
                                            {/* <button className='del_ico' onClick={() => remove(elem._id)}><DeleteIcon className='remove_icom' /></button> */}
                                        </div> <hr />
                                    </>
                                )
                            })

                        }



                    </div>
                </>
            ) : (<h1>no items here</h1>)

            }
   
        </>
    )
}

export default Card;
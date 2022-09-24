import React, { useEffect, useState} from 'react'
import Header from './Header';
import "./Menuitems.css"
// import data from '../../data'
// import cart_image from "../images/image1.jpg";
import bbq from "../images/bbq.jpg";
import shakes from "../images/shakes.jpg";
import burger from "../images/burger.jpg";
import steak from "../images/steak.jpg";
import Card from './Card';
// import { Link, useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import axios from 'axios';


function MenuItems() {
  const [item, setItems] = useState([])
  const [show, setShow] = useState(false)


  const filterCate = (myCategory) => {
    const updatedCate = item.filter((element) => {
      return element.category === myCategory
      //  console.log(element);
    })
    setItems(updatedCate)
    setShow(true)

  }


  useEffect(() => {
    axios
  .get("http://192.168.2.112:4000/products")
  .then((res) => setItems(res.data))
  // console.log(item)
  .catch((err) => console.log("error", err))
  }, [])
  // console.log(item);
  return (
    <>
      <Header />
      <div className="section2_0">
        <h2 className='menu'>MENU</h2>

        <div className="buton_flex">
          <div className="bbq">
            <Link onClick={() => filterCate("shakes")} className='bbq_link' to="hero">

              <img className='bbq_img' src={shakes} width="90%" alt="" /> <br />  <br />
              <h3>SHAKES</h3>

            </Link>
          </div>
          <div className="bbq">
            <Link onClick={() => filterCate("bbq")} className='bbq_link' to="hero">

              <img className='bbq_img' src={bbq} width="90%" alt="" /> <br /> <br />
              <h3>BBQ</h3>

            </Link>
          </div>
          <div className="bbq">
            <Link onClick={() => filterCate("burger")} className='bbq_link' to="hero">

              <img className='bbq_img' src={burger} width="90%" alt="" /> <br /> <br />
              <h3>BURGER</h3>

            </Link>
          </div>
          <div className="bbq">
            <Link onClick={() => filterCate("st")} className='bbq_link' to="hero">

              <img className='bbq_img' src={steak} width="90%" alt="" />  <br /> <br />
              <h3>STEAK</h3>

            </Link>
          </div>
        </div>
      </div>
      {
        show ? <div id='hero'>
          <h2 className='f_main'>SHAKES</h2>
          <div className='Shakes_container'>
            {
              item.map((elem, index) => {
                return (
                  <Card
                    id={elem._id}
                    key={index}
                    title={elem.name}
                    image={elem.image}
                    price={elem.price}
                    category={elem.category}
                    className="edit_cart"

                  />

                )
              })
            }
          </div>
        </div> : null
      }


    </>
    // <img src={cart_image} width="100%" alt="" />
  )
}

export default MenuItems;
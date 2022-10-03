import React, { useEffect, useState } from 'react'
import Header from './Header';
import "./Menuitems.css"
import Card from './singleProduct';
// import { Link, useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import axios from 'axios';


function MenuItems() {
  const [item, setItems] = useState([])
  const [item1, setItems1] = useState([])
  const [show, setShow] = useState(false)


  const filterCate = (myCategory) => {
    const updatedCate = item1.filter((element) => {
      return element.category === myCategory
    })
    
    // const myName = item.filter((elem)=>{
    //   return elem.category === myCategory
    // })
    // setItems(myName)
    setItems1(updatedCate)
    setShow(true)

  }

  const fetchData = async () => {
    const category = await axios.get("http://192.168.1.112:4000/categories")
    setItems(category.data)
    // console.log(item);
    const productse = await axios.get("http://192.168.1.112:4000/products")
    setItems1(productse.data)
    // console.log(item1);
  }

  useEffect(() => {

    fetchData()

  }, [])

  return (
    <>
      <Header />
      <div className="section2_0">
        <h2 className='menu'>MENU</h2>

        <div className="buton_flex">
          {
            item.map((elem) => {
              return (
                <>
                  <div className="bbq">
                    <Link onClick={() => filterCate(elem.category)} className='bbq_link' to="hero">

                      <img className='bbq_img' src={elem.image} width="300px" alt="" /> <br />  <br />
                      <h3>{elem.name}</h3>

                    </Link>
                  </div>
                </>
              )
            })
          }

        </div>

      </div>

      {
        show ? <div id='hero'>
          <div className='Shakes_container'>


            {
              item1.map((elem, index) => {
                return (
                  <>
                    <Card
                      id={elem._id}
                      key={index}
                      title={elem.name}
                      image={elem.image}
                      price={elem.price}
                      category={elem.category}
                      className="edit_cart"

                    />
                  </>

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
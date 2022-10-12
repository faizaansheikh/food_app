import React, { useEffect, useState } from 'react'
import Header from './Header';
import "./Menuitems.css"
import Card from './singleProduct';
// import { Link, useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import axios from 'axios';


function MenuItems() {
  const [category, setCategory] = useState([])
  const [product, setProduct] = useState([])
  const [filterData, setFilterData] = useState([])
  const [show, setShow] = useState(false)


  const filterCate = (myCategory) => {
    const updatedCate = filterData.filter((element) => {
      return element.category === myCategory
    })
    
    setProduct(updatedCate)
    setShow(true)

  }

  const fetchData = async () => {

    const category = await axios.get("https://hassanwebsite.herokuapp.com/categories")
    setCategory(category.data)

    const productse = await axios.get("https://hassanwebsite.herokuapp.com/products")
    setProduct(productse.data)
    setFilterData(productse.data)

  }

  useEffect(() => {
    // filterCate()
    fetchData()

  }, [])

  return (
    <>
      <Header />
      <div className="section2_0">
        <h2 className='menu'>MENU</h2>

        <div className="buton_flex">
          {
            category.map((elem) => {
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

      <div id='hero'>
        {
          show ? null : <h1 className='all'>All</h1>
        }
        <div className='Shakes_container'>

          {
            product.map((elem, index) => {
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
      </div>



    </>
    // <img src={cart_image} width="100%" alt="" />
  )
}

export default MenuItems;
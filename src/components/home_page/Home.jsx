import React from 'react'
import { useEffect, useState } from "react";
import "./home.css"
import Header from './Header'
import Section1 from './Section1'

import { HashLoader } from "react-spinners";

import Contact from './Contact';

function Home() {
  const [loading, setLoading] = useState(false)
 

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <>
    {
      loading?<div className="loader"><HashLoader
      color="#47a42a"
      size={100}
    /></div>:(
      <>
      <Header/>
      <Section1/>
      <Contact/>
      </>
    )
    }
   
    </>
  )
}

export default Home
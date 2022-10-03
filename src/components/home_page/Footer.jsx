import React from 'react'
import "./footer.css";
function Footer() {
  return (
    <>
    <div className='mian'>
    <div className='container'>
    <div className="row frow">
    
    <div className="col-12 col-sm-12 col-md-2 one">
    <h2 className='quixk'>QUICK LINKS</h2>
    <ul>
    <li className='hom'>HOME</li>
    <li>ABOUT</li>
    <li>ROOMS</li>
    <li>LOCATION</li>
    <li>GALLERY</li>
    </ul>
    </div>
    <div className="col-12 col-sm-12 col-md-3 one">
    <h2 className='quixk'>ADDRESS</h2>
    <ul>
    <li className='hom'>MEXICO UNITED STATES 3000</li>
    <li>50019 HONEY STREET</li>
    <li>TO.MEXICO</li>
    <li>TELEPONE: +1 734 123-4567</li>
    <li>EMAIL : sheikhfaizan608@gmail.com</li>
    </ul>
    </div>
    <div className="col-12 col-sm-12 col-md-4 one">
    <h2 className='conect'>INSTAGRAM</h2>
    {/* <img src={img5} alt="" className="insimage"/>
    <img src={img6} alt="" className="insimage"/>
    <img src={img7} alt="" className="insimage"/>
    <img src={img8} alt="" className="insimage"/> */}
    </div>
    <div className="col-12 col-sm-12 col-md-3 one">
    <h2 className='conect'>CONNECT WITH US</h2>
    <div className="hand">
    {/* <BsFacebook size={55} className="fb"/>
    <AiFillTwitterCircle size={60} className="twit"/>
    <IoLogoWhatsapp size={55} className="wat"/>
    <HiMailOpen size={58} className="mal"/>
    <SiGmail size={55} className="gmal"/> */}
    </div>
    </div>
  </div>
  


    </div>
    </div>


   
    </>
  )
}

export default Footer
import React from 'react'
import "./Header.css";
import img3 from "../images/plate.png";
import img4 from "../images/image1.jpg";
import { Navigate, useNavigate } from 'react-router-dom';
// import "./node_modules/bootstrap/dist/css/bootstrap.min.css"
function Section1() {
    const navigate = useNavigate();
    const menuBtn = (e)=>{
        e.preventDefault();
        navigate("/menuitems")
    }
    return (
        <>

            <div className="container-fluid sec1_main">

                <div className="row">
                    <div className="col-12 col-sm-12 col-md-7 lets_flex">
                        <h1 className='lets'>ITS NOT JUST<br /> <span className='food'>FOOD</span>, ITS AN <br /> EXPERIENCE </h1>
                        <button onClick={menuBtn} className='menu_btn'>MENU</button>
                    </div>
                    <div className="col-12 col-sm-12 col-md-5 green_borderside">
                        <img className='plate' src={img3} alt="" />
                    </div>
                </div>
            </div>

            <div className="section2" id='about'>
                <div className="container sec2_main">
                    <div className="row">
                        <h2 className='more'>MORE <span className='food'>ABOUT US</span></h2>
                        <div className="col-12 col-sm-12 col-md-6 sec2_one">
                            <img className='img4' src={img4} width="90%" alt="" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 sec2_two">
                            <h2>QUALITY <span className='food'>FOOD</span></h2>
                            <p className='center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid tempore animi vero. Aperiam, necessitatibus animi dolorem illo non quidem natus mollitia, quas error provident, blanditiis quae at unde et expedita. <br /> <span className='none'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid tempore animi vero. Aperiam, necessitatibus animi dolorem illo non quidem natus mollitia, quas error provident, blanditiis quae at unde et expedita.</span></p>
                        </div>
                    </div>
                </div>
            </div>
   {/* <Section1/> */}
        </>
    )
}

export default Section1;
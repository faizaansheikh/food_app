
import { Link } from 'react-router-dom';
// import { Link } from 'react-scroll';
import "./Header.css";
import img2 from "../images/logo1.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NavMobile from "./NavMobile";
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';



const Header = () => {

  const orders = useSelector((state)=>state.cartReducer.cardData)

  // const userHomePage = async()=>{
  //   try{
  //     const res = await fetch("http://192.168.1.112:4000/getdata",{
  //       method:"GET",
  //       headers:{
  //         "Content-Type": "application/json"
  //       },
  //     })
  //     const data = await res.json();
  //     console.log(data);
  //     // setUserName(data.name)

  //   }catch(err){
  //     setUserName(err)
  //   }
  // }
  // useEffect(()=>{
  //   userHomePage()
  // },[])
  return (
    <>


      <div className="header_container">
        <div className="header_image">
          <img className="header_img" src={img2} alt="logo" />
          <span>
            <h3>Restaurant</h3>
          </span>
        </div>
        <div className="header_link">
          <Link to="/home" className="links">Home</Link>
          <Link className="links">About</Link>
          <Link to="/menuitems" className="links">Menu</Link>
          <Link className="links">Contact</Link>

        </div>
        <div className="header_btn">
          <p className="left_name">Username</p>
          <Badge badgeContent={orders.length} color="success" className='badge'>
          </Badge>
          <Link to="/card" className='cart_a'><ShoppingCartIcon className="left_icon" /></Link>
          <button className="left_btn">Log out</button>
        </div>

        <div className="header_menu">
          <NavMobile />
        </div>
      </div>
      {/* <Section1/> */}



    </>
  );
};

export default Header;
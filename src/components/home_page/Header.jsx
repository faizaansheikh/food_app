
import { Link, useNavigate } from 'react-router-dom';
// import { Link } from 'react-scroll';
import "./Header.css";
import img2 from "../images/logo1.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NavMobile from "./NavMobile";
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';




const Header = () => {
  const navigate = useNavigate()
  const auth = JSON.parse(localStorage.getItem("auth"))
  const totalIte = useSelector((state) => state.incrementNum)
  const logOut = ()=>{
    localStorage.clear()
    // navigate("/")
  }
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
       
          <Badge badgeContent={totalIte} color="success" className='badge'>
          </Badge>
          <Link to="/card" className='cart_a'><ShoppingCartIcon className="left_icon" /></Link>
          {
            auth ?  (<> <p className="left_name">{auth.email}</p> <Link to="/" onClick={logOut}><button className="left_btn">Log out</button></Link> </>):(<Link to="/"><button className="left_btn">Log In</button></Link>)
          }
          
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
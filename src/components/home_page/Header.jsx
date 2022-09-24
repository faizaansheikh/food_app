
import { Link } from 'react-router-dom';
import "./Header.css";
import img2 from "../images/logo1.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NavMobile from "./NavMobile";



const Header = () => {
  // const [loading, setLoading] = useState(false)
  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 1000)
  // }, [])
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
                <ShoppingCartIcon className="left_icon" />
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
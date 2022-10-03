import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Signup from './components/sign_up/Signup';
import Home from './components/home_page/Home';
import MenuItems from './components/home_page/MenuItems';
import Addtocart from './components/home_page/Addtocart';
import Card from './components/home_page/Card';
import OrderComplete from './components/home_page/OrderComplete';
function App() {
  return (
    <>
    {/* <Login/> */}
    {/* <Signup/> */}
    <Routes>
      <Route path="/" element = {<Login/>} />
      <Route path= "/signup" element = { <Signup/>} />
      <Route path= "/home" element = { <Home/>} />
      <Route path= "/menuitems" element = { <MenuItems/>} />
      <Route path= "/products/:id" element = { <Addtocart/>} />
      <Route path= "/card" element = { <Card/>} />
      <Route path= "/orderSuccess" element = { <OrderComplete/>} />
    </Routes>
      
    
    </>
  );
}

export default App;

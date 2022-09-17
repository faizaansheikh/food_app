import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Signup from './components/sign_up/Signup';
import Home from './components/home_page/Home';
function App() {
  return (
    <>
    {/* <Login/> */}
    {/* <Signup/> */}
    <Routes>
      <Route path="/" element = {<Login/>} />
      <Route path= "/signup" element = { <Signup/>} />
      <Route path= "/home" element = { <Home/>} />
    </Routes>
      
    
    </>
  );
}

export default App;

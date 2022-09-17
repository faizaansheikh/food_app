import React, { useState } from 'react'
import './login.css'
import {Link,useNavigate} from 'react-router-dom';
import DraftsIcon from '@mui/icons-material/Drafts';
import LockIcon from '@mui/icons-material/Lock';
import img1 from '../images/logo.png'
export default function Login() {
  const [user,setUser] = useState("")
  const [pass,setPass] = useState("")
  const [val,setVal] = useState(false)
  const [val1,setVal1] = useState(false)
  const navigate = useNavigate()
  const sign = (e)=>{
    e.preventDefault();
  if(!user){
    setVal(true)
    
  }else if(!pass){
    setVal1(true)
  }else{
    navigate("/signup")
  }
  }
  
  return (
   <>
   {/* <h1 className='heading'>login</h1> */}
   <div className="login_body"> </div>
   <div className="container loginc">
    <div className="row">
    <div className="col-12 col-sm-12 col-md-3"></div>
    <div className="col-12 col-sm-12 col-md-6 flexlogin">
    <div className="mains"> 
    <img src={img1} width={190} alt="" />
    <div className="welcome_div">
    <h2 className='wel'>WELCOME</h2>
    <p className='sign_in_to'>Sign In To Continue</p>
    </div>
    <div className="input_setup_signup">
    <p className='email'>Email</p>
    <div className="set_drafts_icon">
    <DraftsIcon className='mail_icon'/>
    <input type="text" placeholder='Enter Your Email'
    value={user}
    onChange={(e)=>setUser(e.target.value)}
    /> 
    </div>
    {
      val?<span className='validation'>**Please fill this field**</span>:null
    }
    
    <div className="setdiv">
    <p className='pass'>Password</p>
    <div className="set_pass_icon">
    <LockIcon className='pass_icon'/>
    <input type="password" placeholder='Enter Your Password'
     value={pass}
     onChange={(e)=>setPass(e.target.value)}
    /> 
    </div>
    {
      val1?<span className='validation'>**Please fill this field**</span>:null
    }
    </div>
    </div>
    <div className="login_btn"><button onClick={sign}>SIGN IN</button></div>
    <p className='dont_signin'>Dont have an account ? SIGN UP</p>
    </div>
    </div>
    <div className="col-12 col-sm-12 col-md-3"></div>
  
   </div>
   </div>

  
   
   </>
  )
}

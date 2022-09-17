import React, { useState } from 'react'
import './signup.css'
import DraftsIcon from '@mui/icons-material/Drafts';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import {Link,useNavigate} from 'react-router-dom';
function Signup() {
const [userName,setuserName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [confirmPass,setConfirmPass] = useState("")
const [validation,setValidation] = useState(false)
const [validation2,setValidation2] = useState(false)
const [validation3,setValidation3] = useState(false)
const [validation4,setValidation4] = useState(false)
const navigate = useNavigate()
const signUp = (e)=>{
  e.preventDefault();
  if(!userName){
    setValidation(true)
  }else if(!email){
    setValidation2(true)
  }else if(!password){
    setValidation3(true)
  }else if(!confirmPass){
    setValidation4(true)
  }else{
    navigate("/")
  }
}

  return (
    <>
   {/* <h1 className='heading'>login</h1> */}
   <div className="sign_body">
   <div className="container signu">
    <div className="row">
    <div className="col-12 col-sm-12 col-md-3"></div>
    <div className="col-12 col-sm-12 col-md-6 flex">
    <div className="main"> 
    <h2 className='wel'>SIGN UP</h2>
    {/* <p className='sign'>Sign In To Continue</p> */}
    <div className="input_setup">
    <p className='email'>Username</p>
    <div className="set_drafts_icon">
    <PersonIcon className='mail_icon'/>
    <input className='signupinput' type="text" placeholder='Enter Your Username'
    value={userName}
    onChange={(e)=>setuserName(e.target.value)}
    /> 
    </div>
    {
      validation?<span className='validation'>**Please fill this field**</span>:null
    }
    
  

    <p className='email'>Email</p>
    <div className="set_drafts_icon">
    <MailIcon className='mail_icon'/>
    <input className='signupinput' type="text" placeholder='Enter Your Email'
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    /> 
    </div>
    {
      validation2?<span className='validation'>**Please fill this field**</span>:null
    }


    <p className='email'>Password</p>
    <div className="set_drafts_icon">
    <LockIcon className='mail_icon'/>
    <input className='signupinput' type="password" placeholder='Enter Your Password'
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    /> 
    </div>
    {
      validation3?<span className='validation'>**Please fill this field**</span>:null
    }
 
   
    <p className='pass'>Confirm Password</p>
    <div className="set_pass_icon">
    <LockIcon className='pass_icon'/>
    <input className='signupinput' type="password" placeholder='Confirm Password'
     value={confirmPass}
     onChange={(e)=>setConfirmPass(e.target.value)}
    /> 
   </div>
   {
      validation4?<span className='validation'>**Please fill this field**</span>:null
    }
    </div>
    <div><button onClick={signUp} className="signUp_btn">SIGN UP</button></div>
    <p className='already'>Already have an account ? SIGN IN</p>
    </div>
    </div>
    <div className="col-12 col-sm-12 col-md-3"></div>
  
   </div>
   </div>

   </div>
   
   </>
  )
}

export default Signup
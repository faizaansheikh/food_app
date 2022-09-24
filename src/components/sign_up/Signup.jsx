import React, { useState } from 'react'
import './signup.css'
// import DraftsIcon from '@mui/icons-material/Drafts';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
function Signup() {
  const [user, setUser] = useState({
    userName: "", email: "", password: "", cpassword: ""
  })
  // const [email,setEmail] = useState("")
  // const [password,setPassword] = useState("")
  // const [confirmPass,setConfirmPass] = useState("")
  const [validation, setValidation] = useState(false)
  const [validation2, setValidation2] = useState(false)
  const [validation3, setValidation3] = useState(false)
  const [validation4, setValidation4] = useState(false)
  const [validation5, setValidation5] = useState(false)
  const navigate = useNavigate()
 
 
  let name, value
  const getVal = (e) => {
    console.log(e);
    name = e.target.name
    value = e.target.value
    setUser({ ...user, [name]: value })
  }
  const postData = async(e)=>{
   
    e.preventDefault();
    const{userName,email,password,cpassword} = user;
    if(!userName){
      setValidation(true)
    }else if(!email){
      setValidation(false)
      setValidation2(true)
    }else if(!password){
      setValidation2(false)
      setValidation3(true)
    }else if(!cpassword){
      setValidation3(false)
      setValidation4(true)
    }else if(password !== cpassword){
      setValidation4(false)
      setValidation5(true)
    }else{
      const res = await fetch("http://192.168.2.112:4000/register",{
        method:"POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          userName, email, password, cpassword
        })
       })
       const data = await res.json();
       if(data.status === 422 || !data){
        window.alert("invalid registration")
        console.log("invalid registration");
       }else{
        window.alert("registration success")
        console.log("registration success");
        navigate("/")
       }
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
                <form method='POST'>
                <div className="input_setup">
                  <p className='email'>Username</p>
                  <div className="set_drafts_icon">
                    <PersonIcon className='mail_icon' />
                    <input className='signupinput' name="userName" type="text" placeholder='Enter Your Username'
                      value={user.userName}
                      onChange={getVal}
                    />
                  </div>
                  {
                    validation ? <span className='validation'>**Please fill this field**</span> : null
                  }



                  <p className='email'>Email</p>
                  <div className="set_drafts_icon">
                    <MailIcon className='mail_icon' />
                    <input className='signupinput' name="email" type="text" placeholder='Enter Your Email'
                      value={user.email}
                      onChange={getVal}
                    />
                  </div>
                  {
                    validation2 ? <span className='validation'>**Please fill this field**</span> : null
                  }


                  <p className='email'>Password</p>
                  <div className="set_drafts_icon">
                    <LockIcon className='mail_icon' />
                    <input className='signupinput' name="password" type="password" placeholder='Enter Your Password'
                      value={user.password}
                      onChange={getVal}
                    />
                  </div>
                  {
                    validation3 ? <span className='validation'>**Please fill this field**</span> : null
                  }


                  <p className='pass'>Confirm Password</p>
                  <div className="set_pass_icon">
                    <LockIcon className='pass_icon' />
                    <input className='signupinput' name="cpassword" type="password" placeholder='Confirm Password'
                      value={user.cpassword}
                      onChange={getVal}
                    />
                  </div>
                  {
                    validation4 ? <span className='validation'>**Please fill this field**</span> : null
                  }
                  {
                    validation5 ? <span className='validation'>**password doesnot match**</span> : null
                  }
                </div>
                <div><button type='submit' value="register" onClick={postData} className="signUp_btn">SIGN UP</button></div>
                </form>
                <p className='already'>Already have an account ? <span onClick={() => navigate("/")} className="already_signin">SIGN IN</span></p>
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
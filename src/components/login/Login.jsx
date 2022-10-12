import React, { useState } from 'react'
import './login.css'
import {  useNavigate } from 'react-router-dom';
import DraftsIcon from '@mui/icons-material/Drafts';
import LockIcon from '@mui/icons-material/Lock';
import img1 from '../images/logo.png'
export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [val, setVal] = useState(false)
  const [val1, setVal1] = useState(false)
  const navigate = useNavigate()

  const sign = async (e) => {
    e.preventDefault();
    if (!email) {
      setVal(true)
    } else if (!password) {
      setVal(false)
      setVal1(true)
    } else {
      
    }
    const res = await fetch("https://hassanwebsite.herokuapp.com/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      })
      const data = await res.json();
      //let {token} = data.userLogin
      //console.log(token);
      if (res.status === 400 || !data) {
        window.alert("invalid registration")
        console.log("invalid registration");
      } else {
      // localStorage.setItem("jwtoken", token)
        window.alert("registration success")
        localStorage.setItem("auth", JSON.stringify({ email }))
        console.log("registration success");
        navigate("/home")
      }
  }

  return (
    <>
      {/* <h1 className='heading'>login</h1> */}
      <div className="login_body">
        <div className="container loginc">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-3"></div>
            <div className="col-12 col-sm-12 col-md-6 flexlogin">
              <div className="mains">
                <img className='login_img' src={img1} width={210} alt="" />
                <div className="welcome_div">
                  <h2 className='wel'>WELCOME</h2>
                  <p className='sign_in_to'>Sign In To Continue</p>
                </div>
                <form method='POST'>
                  <div className="input_setup_signup">
                    <p className='email'>Email</p>
                    <div className="set_drafts_icon">
                      <DraftsIcon className='mail_icon' />
                      <input type="email" name='email' placeholder='Enter Your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    {
                      val ? <span className='validation'>**Please fill this field**</span> : null
                    }

                    <div className="setdiv">
                      <p className='pass'>Password</p>
                      <div className="set_pass_icon">
                        <LockIcon className='pass_icon' />
                        <input type="password" name='password' placeholder='Enter Your Password'
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      {
                        val1 ? <span className='validation'>**Please fill this field**</span> : null
                      }
                    </div>
                  </div>
                  <div><button className="login_btn" type='submit' value="signin" onClick={sign}>SIGN IN</button></div>
                </form>
                <p className='dont_signin' on>Dont have an account ? <span className='already_signup' onClick={() => navigate("/signup")}> SIGN UP</span></p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-3"></div>

          </div>
        </div>
      </div>


    </>
  )
}

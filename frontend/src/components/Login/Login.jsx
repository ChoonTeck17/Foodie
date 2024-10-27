import React, { usesdsState } from 'react'
import './login.css'
import { assets } from '../../assets/assets'


const Login = () => {

  const[currState,setCurrState] = useState("Login")
  return (
    <div className='login'>
      <form className="name">
        <div className="login-title">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
          </div>
        <div className="login-input">
          {currState==="Login"?<></>:(<><input type="text" placeholder='Your Name' required/><br/></>)}
          <input type="email" placeholder='Your Email' required/><br/>
          <input type="password" placeholder='password' required/><br/>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">{currState==="Sign up"?"Create Account":"Login"}</button>
          
        </div>
      </form>
    </div>
  ) 
}

export default Login
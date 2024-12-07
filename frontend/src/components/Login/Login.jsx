import React, { useState } from 'react'
import './login.css'
import { assets } from '../../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faL, faWindowClose  } from '@fortawesome/free-solid-svg-icons'; // Close icon



const Login = () => {

  const[currState,setCurrState] = useState("Login")
  const [showLogin, setShowLogin] = useState(false);

  return (

    
    <div className="absolute inset-0 z-10 bg-black bg-opacity-60 flex items-center justify-center">
      <form className="self-center w-[23vw] min-w-[330px] text-gray-500 bg-white flex flex-col gap-6 p-6 rounded-lg text-sm animate-fadeIn">
        <div className="flex items-center justify-between relative">
        <h2 className="font-bold tracking-wide text-3xl text-black absolute left-1/2 transform -translate-x-1/2 text-center">Login</h2>
        {/* <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" className="cursor-pointer ml-auto" /> */}

        <FontAwesomeIcon icon={faWindowClose } className="cursor-pointer ml-auto text-3xl text-red-500" aria-hidden="true" onClick={()=> setShowLogin(false)} />
        </div>
        
        <div className="flex flex-col gap-2">
          {currState === "Login" ? null : (
            <>
              <input type="text" placeholder="Your Name" required className="border border-gray-300 rounded px-3 py-2 w-full" /><br />
            </>
          )}
          
          <input type="email" placeholder="Your Email" required className="border border-gray-300 rounded px-3 py-2 w-full" /><br />
          <input type="password" placeholder="Password" required className="border border-gray-300 rounded px-3 py-2 w-full" /><br />
          
          <div className="flex justify-center">
                <button className="bg-red-500 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded-full text-sm w-fit">
                  {currState === "Sign up" ? "Create Account" : "Login"}
                </button>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" required />
            <p>By clicking this, you agree to our terms and conditions</p>
          </div>
          
          {currState === "Login" ? (
            <p className="text-center=">
              Create new account? <span onClick={() => setCurrState("Sign up")} className="text-blue-500 cursor-pointer">Click here</span>
            </p>
          ) : (
            <p className="text-center">
              Already have an account? <span onClick={() => setCurrState("Login")} className="text-blue-500 cursor-pointer">Login here</span>
            </p>
          )}
        </div>
      </form>

    </div>
  ) 
}

export default Login
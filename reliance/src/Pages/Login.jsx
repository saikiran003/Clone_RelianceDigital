import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [mobile,setMobile] = useState("")
  const navigate = useNavigate()
  const handleProceed = ()=>{
    localStorage.setItem("mobile",JSON.stringify(mobile))
    navigate("/register")
  }
  return (
    <div className="loginContainer">
      <div>
        <img
          src="https://www.reliancedigital.in/medias/Umbrella-Offer-Desktop-Banner-1200x500-19-04-2022-01.jpg?context=bWFzdGVyfGltYWdlc3wxNTg5MTU2fGltYWdlL2pwZWd8aW1hZ2VzL2hlMy9oODEvOTgxNjE2NTE4NzYxNC5qcGd8OTBhMTdmZGFjOTU5Yjg4MDk1NDNkYjFhODA0MjA4YzgyODc5M2M2ZTBkNTQwZDk5NTI0ODRiMmU3NzRiYTlhMQ"
          alt="logo"
        />
      </div>
      <div className="login">
        <div>
          Login/Register
        </div>
        <div>
          <div>
            <input type="number" placeholder="Enter Mobile Number" onChange={(e)=>setMobile(e.target.value)}/>
          </div>
          <button onClick={handleProceed}>Proceed</button>
        </div>

      </div>
    </div>
  );
};

export default Login;

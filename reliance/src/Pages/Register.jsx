import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [verify, setVerify] = useState(false);
  let [emailOTP, setEmailOTP] = useState("");
  let [mobileOTP, setMobileOTP] = useState("");
  const [eOTP, setEOTP] = useState(false);
  const [mOTP, setMOTP] = useState(false);
  const [btn, setBtn] = useState(false);
  const number = JSON.parse(localStorage.getItem("mobile"));
  const regData = {
    number,
    firstName,
    lastName,
    email,
  };
  const handleEmailOTP = (e) => {
    e.preventDefault();
    if (emailOTP === "1234") {
      setEOTP(true);
      setVerify(false);
      setMOTP(true);
      setBtn(true);
    } else {
      alert("Incorrect OTP");
    }
  };
  const handleRegister = (e) => {
    e.preventDefault();
    if (mobileOTP === "1234") {
      localStorage.setItem("user", JSON.stringify(regData));
      alert("Succesfully Registered");
      navigate("/");
    } else {
      alert("Incorrect OTP");
    }
  };

  return (
    <div className="register">
      <div>Register New Account</div>
      <div>
        <form onSubmit={handleRegister}>
          <input
            required
            type="text"
            placeholder="First Name*"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <input
            required
            type="text"
            placeholder="Last Name*"
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <input
            required
            type="text"
            placeholder="Email Address*"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="rama">
            Your email address will be used to send order invoice, order updates
            etc.
          </p>
          {verify && (
            <div>
              <p className="emailOTP">
                Please enter the OTP sent to your email address
              </p>
              <p className="emailOTP">{email}</p>
              <input
                required
                type="number"
                placeholder="Enter OTP"
                style={{ marginTop: "15px" }}
                onChange={(e) => setEmailOTP(e.target.value)}
              />
              <button className="verBtn" onClick={handleEmailOTP}>
                SUBMIT OTP
              </button>
            </div>
          )}
          {!verify && !btn && (
            <button
              className="verBtn"
              onClick={(e) => {
                e.preventDefault();
                setVerify(true);
              }}
            >
              VERIFY EMAIL
            </button>
          )}

          <input
            type="number"
            placeholder="Mobile Number"
            value={number}
            onChange={(e) => setMobile(e.target.value)}
          />

          <p className="rama">
            Your mobile number will be used to avail benefits such as Jio Mart
            Cashback and ROne Loyality Points and receive quick notifications.
          </p>
          {mOTP && (
            <div>
              <p className="emailOTP">
                Please enter the OTP sent to your mobile number
              </p>
              <p className="emailOTP">{number}</p>
              <input
                required
                type="number"
                placeholder="Enter OTP"
                style={{ marginTop: "15px" }}
                onChange={(e) => setMobileOTP(e.target.value)}
              />
            </div>
          )}
          <button className="regBtn">{eOTP ? "Register" : "Proceed"}</button>
        </form>
      </div>
      <div>
        <p>Already Registered?&nbsp; </p>
        <Link to="/login" className="regLogin">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;

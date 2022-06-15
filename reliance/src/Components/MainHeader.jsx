import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const MainHeader = () => {
  const [search, setSearch] = useState("");
  const name = JSON.parse(localStorage.getItem("user"))|| "";
  console.log(name)
  const [first,setFirst] = useState("")
  useEffect(()=>{
     setFirst(name.firstName)
  })
  return (
    <div className="mainHeader">
      <div>
        <img
          src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg"
          alt="relianceLogo"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Find your favorite products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="button">
          <i
            className="fa fa-search"
            style={{ color: "rgb(187, 187, 187)" }}
          ></i>
        </button>
      </div>
      {/* <div>
        <input type="text" placeholder="Find your favorite products" value="" />
      </div> */}
      <div>
        <div className="subMainHeader">Select your location</div>
        <div className="vl"></div>
        <Link to="/cart" className="subMainHeader">
          <i
            className="fa fa-shopping-cart"
            aria-hidden="true"
            style={{
              color: "white",
              font: "20px",
              marginRight: "10px",
              marginTop: "5px",
            }}
          ></i>
          <div className="cartCount">3</div>Cart
        </Link>
        <div className="vl"></div>
        <Link to="/login" className="subMainHeader">
          <i
            className="fa fa-user"
            aria-hidden="true"
            style={{
              color: "white",
              font: "20px",
              marginRight: "10px",
              marginTop: "5px",
            }}
          ></i>
          {/* {firstName==="null"?"Login":`Hi,${firstName.firstName}`} */}
          {(name==="")? "Login" : `hi,${first}`}
        </Link>
      </div>
    </div>
  );
};

export default MainHeader;

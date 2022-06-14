import React from "react";
import { useState } from "react";

const MainHeader = () => {
  const [search,setSearch] = useState("")
  return (
    <div className="mainHeader">
      <div>
        <img
          src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg"
          alt="relianceLogo"
        />
      </div>
      <div >
        <input
          type="text"
          placeholder="Find your favorite products"
          value={search} onChange={(e)=>setSearch(e.target.value)}
        />
        <button
          type="button"
        >
          <i className="fa fa-search" style={{color: "rgb(187, 187, 187)"}}></i>
        </button>
      </div>
      {/* <div>
        <input type="text" placeholder="Find your favorite products" value="" />
      </div> */}
      <div>
        <div className="subMainHeader">Select your location</div>
        <div className="vl"></div>
        <div className="subMainHeader">
          <i className="fa fa-shopping-cart" aria-hidden="true" style={{color:"white",font:"20px",marginRight:"10px"}}></i>Cart
        </div>
        <div className="vl"></div>
        <div className="subMainHeader">
          <i className="fa fa-user" aria-hidden="true" style={{color:"white",font:"20px",marginRight:"10px"}}></i>Login
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
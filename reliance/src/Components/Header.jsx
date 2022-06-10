import React from "react";


const Header = () => {
  return (
    <div className="head">
      <div className="subHeader">
      <i className="fa fa-map-marker" aria-hidden="true" style={{marginRight:"6px"}}></i>
        Find a store
      </div>
      <div className="vl"></div>
      <div className="subHeader">Buying guides</div>
      <div className="vl"></div>
      <div className="subHeader">Contact us</div>
    </div>
  );
};

export default Header;

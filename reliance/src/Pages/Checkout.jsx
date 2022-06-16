import React from "react";
import { useState } from "react";
import { loadData, saveData } from "../Utils/LocalStorage";

const Checkout = () => {
  const [shipping, setShipping] = useState(true);
  const [address, setAddress] = useState(false);
  const [pin, setPin] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [house, setHouse] = useState("");
  const [street, setStreet] = useState("");
  const [land, setLand] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [mobile, setMobile] = useState("");
  const addressObj = {
    pin,
    first,
    last,
    house,
    street,
    land,
    city,
    state,
    mobile,
  };
  const fetchAddress = loadData("address");
  console.log(fetchAddress);
  const handleAddress = (e) => {
    e.preventDefault();
    saveData("address", addressObj);
    setShipping(false);
    setAddress(true)
  };
  return (
    <div className="JtReX">
      <div className="KiYtr">
        <div className="PyWqvQ">SHIPPING ADDRESS</div>
        <div>
          <i class="fa fa-angle-down"></i>
        </div>
      </div>
      <div className="shipping">
        {shipping && (
          <>
            <form onSubmit={handleAddress}>
              <div>
                <input
                  required
                  type="number"
                  placeholder="Pincode*"
                  className="shippingAddress"
                  onChange={(e) => setPin(e.target.value)}
                />
              </div>
              <div>
                <input
                  required
                  type="text"
                  placeholder="Enter First Name*"
                  className="shippingAddress"
                  onChange={(e) => setFirst(e.target.value)}
                />
                <input
                  required
                  type="text"
                  placeholder="Enter Last Name*"
                  className="shippingAddress"
                  onChange={(e) => setLast(e.target.value)}
                />
              </div>
              <div>
                <input
                  required
                  type="text"
                  placeholder="Enter House No*"
                  className="shippingAddressFull"
                  onChange={(e) => setHouse(e.target.value)}
                />
              </div>
              <div>
                <input
                  required
                  type="text"
                  placeholder="Enter Colony / street*"
                  className="shippingAddressFull"
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Landmark"
                  className="shippingAddressFull"
                  onChange={(e) => setLand(e.target.value)}
                />
              </div>
              <div>
                <input
                  required
                  type="text"
                  placeholder="Enter city*"
                  className="shippingAddress"
                  onChange={(e) => setCity(e.target.value)}
                />
                <input
                  required
                  type="text"
                  placeholder="Enter state*"
                  className="shippingAddress"
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              <div>
                <input
                  required
                  type="number"
                  placeholder="Enter Mobile Number*"
                  className="shippingAddress"
                  onChange={(e) => setMobile(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Enter Landline Number*"
                  className="shippingAddress"
                />
              </div>
              <div className="btn">
                <input
                  required
                  type="submit"
                  placeholder="Enter Mobile Number*"
                  className="cancel"
                  value="CANCEL"
                />
                <input
                  required
                  type="submit"
                  placeholder="Enter Landline Number*"
                  className="submit"
                  value="SUBMIT"
                />
              </div>
            </form>
          </>
        )}
      </div>
      {address && (
        <div className="smallAddress">
          <h5>{fetchAddress.first + " " + fetchAddress.last}</h5>
          <p>
            {fetchAddress.house +
              "," +
              fetchAddress.street +
              "," +
              fetchAddress.land}
          </p>
          <p>
            {fetchAddress.city +
              "-" +
              fetchAddress.pin +
              "," +
              fetchAddress.state}
          </p>
          <p>+91{fetchAddress.mobile}</p>
          <div className="addressbtn">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      )}
       <div className="KiYtr">
        <div className="PyWqvQ">Payment</div>
        <div>
          <i class="fa fa-angle-down"></i>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

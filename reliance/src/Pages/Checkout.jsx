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
    setAddress(true);
  };
  const handlePayment = ()=>{
    alert("Payment Successful Your order has been Placed")
  } 
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
      <div className="payment">
        <div className="payFirst">
          <div className="KopYTr">
            <input type="checkbox" />
            <label className="payName">Credit Card</label>
          </div>
          <div className="KopYTr">
            <input type="checkbox" />
            <label className="payName">Debit Card</label>
          </div>
          <div className="KopYTr">
            <input type="checkbox" />
            <label className="payName">Credit Card EMI</label>
          </div>
          <div className="KopYTr">
            <input type="checkbox" />
            <label className="payName">Net Banking</label>
          </div>
          <div className="KopYTr">
            <input type="checkbox" />
            <label className="payName">UPI</label>
          </div>
          <div className="KopYTr">
            <input type="checkbox" />
            <label className="payName">Wallet</label>
          </div>
          <div className="KopYTr">
            <input type="checkbox" />
            <label className="payName">Buy Now Pay Later</label>
          </div>
        </div>
        <div className="paySecond">
          <div className="flush hidden__xs">
            <h3 className="tabtitle">
              Payment Option &nbsp;
              <div
                className="lazy-load-image-background lazy-load-image-loaded-blur"
                style={{
                  width: "100%",
                  overflow: "visible",
                  position: "relative",
                  paddingTop: "0px",
                  display: "inline",
                  background: "transparent",
                }}
              >
                <img
                  src="https://www.reliancedigital.in/build/client/images/debit-card-icons.png"
                  alt=""
                  title=""
                  data-srcset="/build/client/images/debit-card-icons.png"
                  class=""
                  id="image-dc-icons"
                  style={{ display: "inline" }}
                />
              </div>
            </h3>
          </div>
          <div className="mb__10">
            <h4 className="loYtvU">Select Bank</h4>
            <select id="select-dc-bank" className="select-dc-bank">
              <option disabled="" value="">
                Select a bank
              </option>
              <option value="AUSF">AU Bank</option>
              <option value="Axis">Axis Bank</option>
              <option value="Citi">Citi Bank</option>
              <option value="Federal">Federal Bank</option>
              <option value="HDFCNEWEMI">HDFC Bank</option>
              <option value="HSBCNEWEMI">HSBC Bank</option>
              <option value="ICICINEWEMI">ICICI Bank</option>
              <option value="IndusInd">IndusInd Bank</option>
              <option value="INGVYSYA">ING VYSYA BANK LTD</option>
              <option value="KOTAKM">KOTAKM Bank</option>
              <option value="RatnakarBL">RatnakarBL Bank</option>
              <option value="Standard Chartered">
                STANDARD CHARTERED BANK
              </option>
              <option value="StandardCB">StandardCB Bank</option>
              <option value="SBINEWEMI">State Bank Of India</option>
              <option value="YESNEWEMI">YES Bank</option>
              <option value="OTH">Other Banks</option>
            </select>
          </div>
          <div className="cardDetails">
            <input type="text" placeholder="Enter Card Number" />
            <input type="text" placeholder="Enter Name on Card" />
            <div style={{ marginTop: "-12px", fontWeight: "500" }}>
              <span>Expiry Date</span>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              <select className="cardSelect">
                <option value="">MM</option>
                <option value="Jan">Jan</option>
                <option value="feb">Feb</option>
                <option value="mar">Mar</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="aug">Aug</option>
                <option value="sep">Sep</option>
                <option value="oct">Oct</option>
                <option value="nav">Nov</option>
                <option value="dec">Dec</option>
              </select>
              <select className="cardSelect">
                <option value="">YYYY</option>
                <option value="">2023</option>
                <option value="">2024</option>
                <option value="">2025</option>
                <option value="">2026</option>
              </select>
              <input type="number" placeholder="CVV" style={{ width: "25%" }} />
            </div>
          </div>
          <div style={{marginTop:"25px"}}>
            <button className="payBtn" onClick={handlePayment}>PAY</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

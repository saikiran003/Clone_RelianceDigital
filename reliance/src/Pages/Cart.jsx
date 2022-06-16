import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem, delItem } from "../redux/action";


const Cart = () => {
  var total = 0;
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const incQty = (item)=>{
    dispatch(addItem(item))
    console.log("yes")
  }
  const decQty = (item)=>{
    dispatch(delItem(item))
  }
  const handleCheckout = ()=>{
    navigate("/checkout")
  }
  return (
    <div className="cartContainer">
      {/* cart items */}
      <div className="cartItems">
        <div
          style={{
            padding: "0px 16px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span className="jpXber">My Cart</span>
            <span> ({state.length} Items)</span>
          </div>
          <div>
            <span className="kQsyoi">Shipping to:504208</span>
            <i
              className="fa fa-map-marker"
              style={{
                color: "#585757",
                width: "6px",
                height: "6px",
                marginLeft: "5px",
              }}
            ></i>
          </div>
        </div>
        <div className="hJdoTy">
          <div>
            {state.map((item) => {
              total = total + Number(item.qty) * Number(item.price);
              return (
                <div className="DeiLli">
                  <div className="fGoiK">
                    <img src={item.img} alt={item.name} className="JkiOpl" />
                    <div className="FegTy">{item.name}</div>
                    <div className="HjTdop">
                      <div className="JkrTc">
                        ₹{item.price.toLocaleString("en-US")}
                      </div>
                      <div>
                        <span style={{ fontSize: "14px", color: "#666666" }}>
                          M.R.P.:
                        </span>
                        <strike style={{ fontSize: "14px", color: "#666666" }}>
                          ₹{item.mrp}
                        </strike>
                        <span style={{ fontSize: "12px", color: "#666666" }}>
                          &nbsp;Inclusive of all taxes
                        </span>
                      </div>
                      <div className="jkYrS">You Save: {item.discount}</div>
                      <span className="JdeYuH">Free Shipping</span>
                    </div>
                  </div>

                  <div className="ioZKfc">
                    <button disabled={item.qty===1} className="SfrTlP" onClick={()=>decQty(item)}>
                      <span>
                        <i
                          className="fa fa-minus sc-bxivhb bAnuee"
                          style={{ fontSize: "12px" }}
                        ></i>
                      </span>
                    </button>
                    <input className="WmcVy" value={item.qty} />
                    <button className="SfrTlp" onClick={()=>incQty(item)}>
                      <span>
                        <i
                          className="fa fa-plus sc-bxivhb bAnuee"
                          style={{ fontSize: "12px" }}
                        ></i>
                      </span>
                    </button>
                  </div>
                  <div className="sc-dNLxif cZtMxJ sc-bxivhb hJDoTy">
                    <div className="sc-bxivhb hJDoTy">
                      <button
                        className="ripple sc-hmzhuo hbztqJ sc-jzJRlG cnttmh"
                        id="btn-cab-remove-492338610"
                        theme="link"
                        type="button"
                      >
                        <span className="sc-bxivhb hJDoTy" onClick={()=>decQty(item)}>Remove</span>
                      </button>
                      <button
                        className="ripple sc-hmzhuo hbztqJ sc-jzJRlG cnttmh"
                        id="btn-cab-mtw-492338610"
                        theme="link"
                        type="button"
                      >
                        <span className="sc-bxivhb hJDoTy">Move to wishlist</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* checkout and total */}
      <div className="total">
        <button className="jVLXQX" onClick={handleCheckout}>CHECKOUT</button>
        <div className="hIlRvH">
          <div className="JrwQPk">
            <input className="btRDrV " placeholder="Coupon Code" />
            <button className="gTyWnj">APPLY</button>
          </div>
          <div class="sc-chPdSV hJUixO">
            <div class="sc-bxivhb sc-hwwEjo RUDUj"></div>
          </div>
          <div>
            <div className="sc-bwzfXH hJxDn sc-bxivhb ezkoNx">
              Price Details
            </div>
          </div>
          <div>
            <div className="cfMmfZ">
              <div className="sc-chPdSV dBhkQN">
                <div className="sc-bxivhb jIgKsa">Price ({state.length} Items)</div>
              </div>
              <div className="sc-chPdSV ethThS">
                <div className="sc-bxivhb QjpKe">₹{total.toLocaleString("en-US")}</div>
              </div>
            </div>
            <div class="sc-bwzfXH gsQIbM sc-chPdSV cfMmfZ">
              <div class="sc-chPdSV dBhkQN">
                <div class="sc-bxivhb jIgKsa">Delivery Charges</div>
              </div>
              <div class="sc-chPdSV ethThS">
                <div class="sc-bxivhb bYaPEz">FREE</div>
              </div>
            </div>
            <div class="sc-chPdSV hJUixO">
              <div class="sc-bxivhb sc-hwwEjo RUDUj"></div>
            </div>
            <div class="sc-chPdSV hJUixO">
              <div class="sc-bwzfXH lbDAFH sc-chPdSV cfMmfZ">
                <div class="sc-chPdSV dBhkQN">
                  <div class="sc-bxivhb ezkoNx">Amount Payable</div>
                </div>
                <div class="sc-chPdSV ethThS">
                  <div class="sc-bxivhb kvNxbx">₹{total.toLocaleString("en-US")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sc-chPdSV FpxSt">
          <div class="sc-bwzfXH kUaenU sc-bxivhb dbMhZR">
            Safe and Secure Payments. Easy returns. 100% Authentic products.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

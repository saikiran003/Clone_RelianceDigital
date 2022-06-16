import React from "react";
import { useState } from "react";

const Product = () => {
  const [compare,setCompare] = useState("")
  const [PIN,setPIN] =useState("")

  const product = JSON.parse(localStorage.getItem("product"))
  const handleAdd = ()=>{
    console.log("yes")
  }
  return (
    <div>
      <div className="bc">
        <div className="bc__homeIcon" id="RIL_BreadCrumbHome">
          <i className="fa fa-home" aria-hidden="true"></i> &nbsp; &gt; &nbsp;
        </div>
        <div className="bc__breadcrumbMain">
          <span id="RIL_BreadCrumb_0">
            Televisions <span>&nbsp; &gt; &nbsp;</span>
          </span>
          <span id="RIL_BreadCrumb_1">
            LED Televisions <span>&nbsp; &gt; &nbsp;</span>
          </span>
          <span id="RIL_BreadCrumb_2">
            {product.brand} <span>&nbsp; &gt; &nbsp;</span>
          </span>
          <span id="RIL_BreadCrumb_3">
            {product.name}
          </span>
        </div>
      </div>
      {/* description Main Container */}
      <div className="desContainer">
        {/* image Container */}
        <div>
          <div>
            <img
              src={product.img}
              alt="logo"
            />
          </div>
        </div>
        {/* product desc conatiner */}
        <div>
          {/* random id */}
          <div className="pdp__articleNo">
            <p>Article ID: {Math.floor(Math.random() * 1000000000)}</p>
          </div>
          {/* name of product */}
          <h1 className="pdp__title mb__20">
            {product.name}
          </h1>
          {/* compare products */}
          <div className="pdp__compare">
            <div className="pdp__compare__checkbox">
              <label
                className="pdp__check compare-check"
                id="RIL_PDPCompare"
              >
                Add to Compare
                <input type="checkbox" id="checkboxLabel" value={compare} onChange={(e)=>setCompare(e.target.value)}/>
                <span className="pdp__checkmark"></span>
              </label>
            </div>
            <div className="pdp__compare__share">
              <div id="RIL_PDPShare">
                <i id="socialShareDD" className="fa fa-share-alt"></i>
              </div>
            </div>
            <div className="pdp__compare__print" id="RIL_PDPPrint">
              <i className="fa fa-print"></i> Print
            </div>
          </div>
          <div style={{display:"flex"}}>
            {/* left product description */}
            <div className="blk__sm__6 pdp__featuresBlk">
              <div>
                <div className="pdp__featuresBlk__headerSec">
                  Gain more with offers (7)
                </div>
                <div>
                  <ul className="pdp__ulListMain p__5">
                    <li className="pdp__listStyle">
                      Flat 1500 Cashback on IndusInd Bank Credit EMI
                      transactions..{" "}
                      <a
                        attr-tag="link"
                        target="_blank"
                        aria-label="/content/IndusIndCC_1May_30June"
                        class="pdp__emiLinkTextStyle"
                        href="/content/IndusIndCC_1May_30June"
                      >
                        Read T&amp;C
                      </a>
                    </li>
                    <li className="pdp__listStyle">
                      Buy a TV and Get LG SN4 Soundbar with Wireless Subwoofer
                      MRP Rs. 29,990 at Rs. 16990.{" "}
                      <a
                        attr-tag="link"
                        target="_blank"
                        aria-label="/content/bestdeal-bestpartner-tnc"
                        class="pdp__emiLinkTextStyle"
                        href="/content/bestdeal-bestpartner-tnc"
                      >
                        Read T&amp;C
                      </a>
                    </li>
                    <li className="pdp__listStyle">
                      "Buy a TV and Get Samsung A450 Soundbar with Wireless
                      Subwoofer MRP Rs. 27,990 at Rs. 11990".{" "}
                      <a
                        attr-tag="link"
                        target="_blank"
                        aria-label="/content/bestdeal-bestpartner-tnc"
                        class="pdp__emiLinkTextStyle"
                        href="/content/bestdeal-bestpartner-tnc"
                      >
                        Read T&amp;C
                      </a>
                    </li>
                    <li className="pdp__listStyle">
                      Get Boat 1280 Soundbar only at 7990 with upto 55" LED.{" "}
                      <a
                        attr-tag="link"
                        target="_blank"
                        aria-label="/content/bestdeal-bestpartner-tnc"
                        className="pdp__emiLinkTextStyle"
                        href="/content/bestdeal-bestpartner-tnc"
                      >
                        Read T&amp;C
                      </a>
                    </li>
                  </ul>
                  <div
                    className="sc-eqIVtm bdenGP"
                    id="RIL_PDPOffersSeeMoreLess"
                  >
                    <span>See more &gt;&gt;</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="pdp__featuresBlk__headerSec">
                  Save more with EMI/Cashback <span>(1)</span>&nbsp;
                  <a
                    attr-tag="link"
                    target="_blank"
                    aria-label="/content/emi-terms"
                    className="pdp__emiLinkMoreStyle"
                    href="/content/emi-terms"
                  >
                    Read T&amp;C
                  </a>
                </div>
                <ul className="pdp__ulListMain p__5">
                  <li className="pdp__listStyle">
                    <span className="pdp__emiTextStyle">
                      EMIs (Credit Cards) from ₹611.48/month |{" "}
                    </span>{" "}
                    <span className="pdp__emiLinkTextStyle">
                      View all Standard Credit Cards EMI options
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt__10">
                <ul className="pdp__ulListMain p__5">
                  <li className="pdp__listStyle">
                    <strong>Warranty:</strong> 1 Year manufacturer warranty
                  </li>
                </ul>
              </div>
              <div>
                <div className="pdp__featuresBlk__headerSec">
                  Additional Services &amp; Warranties (5)
                  <span className="pdp__emiLinkTextStyle"> View All </span>
                </div>
              </div>
              <div>
                <div className="pdp__featuresBlk__headerSec">Key Features</div>
                <div className="sc-jhAzac bLbRSS">
                  <div className="sc-fBuWsC eeihxG">
                    <ul className="p__5 sc-fMiknA iPpdnk">
                      <li className="sc-dVhcbM bTeVOO">
                        <span>
                          Supported Apps: Netflix, You Tube, Hotstar, Zee5, Voot
                        </span>
                      </li>
                      <li className="sc-dVhcbM bTeVOO">
                        <span>
                          Operating System: Android TV (Google Assistant)
                        </span>
                      </li>
                      <li className="sc-dVhcbM bTeVOO">
                        <span>Resolution: 1366 x 768 -HD</span>
                      </li>
                      <li className="sc-dVhcbM bTeVOO">
                        <span>Connectivity: 2 HDMI ports, 1 USB ports</span>
                      </li>
                    </ul>
                    <div
                      id="RIL_seeMore_Component"
                      className="sc-eqIVtm bdenGP"
                    >
                      <span>See more &gt;&gt;</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sc-bwzfXH hHJgov">
                <div className="sc-bxivhb chPLnS"> Return Policy</div>
                <ul className="pdp__ulListMain p__5 ">
                  <li className="pdp__listStyle">
                    <span>
                      Items are eligible for return within 7 Days of Delivery
                      <a
                        attr-tag="link"
                        target="_blank"
                        aria-label="/content/Returnandrefund"
                        className="pdp__emiLinkTextStyle"
                        href="/content/Returnandrefund"
                      >
                        (T&amp;C Apply*).
                      </a>
                    </span>
                  </li>
                  <li className="pdp__listStyle">
                    <span>
                      All accessories, product &amp; packaging need to be
                      returned in original condition.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="sc-bwzfXH hHJgov sc-bxivhb chPLnS">
                Got Feedback to share on this page?
                <span className="pdp__emiLinkTextStyle">
                  &nbsp;report here.
                </span>
              </div>
            </div>
            <div className="blk__sm__6">
              {/* first div */}
              <div className="pdp__priceSection">
                <ul className="pdp__priceSection__priceList">
                  <li className="pdp__priceSection__priceListText">
                    Deal Price:{" "}
                    <span className="pdp__offerPrice">
                      <span>₹</span>
                      <span>{product.price}</span>
                    </span>
                  </li>
                  <li className="pdp__priceSection__priceListText">
                    Offer Price:{" "}
                    <span className="pdp__mrpPrice">
                      <span>₹</span>
                      <span>{product.price}</span>
                    </span>
                  </li>
                  <li className="pdp__priceSection__priceListText">
                    MRP:{" "}
                    <span className="pdp__mrpPrice">
                      <span>₹</span>
                      <span>{product.mrp}</span>
                    </span>{" "}
                    <span className="pdp__taxText">(Inclusive of all taxes)</span>
                  </li>
                  <li className="pdp__priceSection__priceListText pdp__savePrice">
                    You Save: {product.discount}
                  </li>
                  <li className="pdp__priceSection__priceListText pdp__emiTextSection">
                    EMIs (Credit Cards) from ₹611.48/month |{" "}
                    <span className="pdp__emiLinkTextStyle">View Plans</span>
                  </li>
                  <li className="pdp__priceSection__priceListText">
                    <strong>FREE Shipping!</strong>
                  </li>
                </ul>
              </div>
              {/* pinocde section */}
              <div className="pdp__pincodeSection">
                <div className="blk">
                  <div className="sc-kkGfuU hlVQIa">
                    <div className="sc-eHgmQL KPCnc">
                      <input
                        id="RIL_PDPInputPincode"
                        type="text"
                        name="RIL_PDPInputPincode"
                        size="20"
                        maxLength="6"
                        value={PIN}
                        className="sc-hSdWYo imuUwz"
                        onChange={(e)=>setPIN(e.target.value)}
                      />
                      <label
                        className="sc-iAyFgw dZHLaP"
                        placeholder=""
                      >
                        PIN Code
                      </label>
                      <span className="sc-cvbbAY kkyBkK">
                        <button
                          type="button"
                          aria-label="map-marker"
                          className="sc-jWBwVP deoPuB"
                        >
                          <i className="fa fa-map-marker"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* add to cart buttons */}
              <div className="pdp__addToCartSection">
                <button
                onClick={handleAdd}
                  type="button"
                  id="add_to_cart_main_btn"
                  className="ripple pdp__addToCartSection__addTocartBtn pdp__addToCartSection__addTocartBtn__withBuyNow btn__default pointer"
                >
                  <span>ADD TO CART</span>
                </button>
                <button
                  type="button"
                  id="buy_now_main_btn"
                  className="ripple pdp__addToCartSection__buyNowBtn btn__default pointer"
                >
                  <span>BUY NOW</span>
                </button>
                <div className="pdp__addToCartSection__errorText"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

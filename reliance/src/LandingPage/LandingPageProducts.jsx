import React from "react";
import { bestMobile } from "../Data/BestMobile";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Laptop } from "../Data/Laptop";
import { washingMachines } from "../Data/washingMachine";
import { Tv } from "../Data/TV";
export const Mobile = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      slidesPerGroup={4}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      style={{ height: "350px" }}
    >
      {bestMobile.map((item) => {
        return (
          <SwiperSlide >
            <div style={{marginLeft:"25%",width:"280px",height:"100%",cursor:"pointer"}} >
              <div>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: "180px", height: "180px" }}
                />
              </div>
              <div>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#003380",
                    margin: "15px 20px 15px 0px",
                  }}
                >
                  {item.name}
                </p>
                <div
                  style={{ width: "281px", height: "65px", lineHeight: "30%" }}
                >
                  <p>
                    <span style={{ fontSize: "14px", color: "#666666" }}>
                      Offer Price :
                    </span>
                    <span
                      style={{
                        color: "#000000",
                        fontSize: "18px",
                        fontWeight: "600",
                      }}
                    >
                      <span>₹</span>
                      <span>{item.price}</span>
                    </span>
                  </p>
                  <p style={{ fontSize: "14px", color: "#666666" }}>
                    <span>
                      M.R.P: &nbsp;
                      <em>
                        <span>₹</span>
                        <strike>{item.mrp}</strike>
                      </em>
                    </span>
                  </p>
                  <p style={{ fontSize: "14px", color: "#666666" }}>
                    <span>
                      You Save: &nbsp;
                      <span>{item.save}</span>
                    </span>
                  </p>
                </div>
                <div className="available">OFFERS AVAILABLE</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export const Laptops = ()=>{
    return (
        <Swiper
      slidesPerView={4}
      spaceBetween={30}
      slidesPerGroup={4}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      style={{ height: "350px" }}
    >
      {Laptop.map((item) => {
        return (
          <SwiperSlide>
            <div style={{marginLeft:"25%",width:"280px",height:"100%",cursor:"pointer"}}>
              <div>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: "180px", height: "180px" }}
                />
              </div>
              <div>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#003380",
                    margin: "15px 20px 15px 0px",
                  }}
                >
                  {item.name}
                </p>
                <div
                  style={{ width: "281px", height: "65px", lineHeight: "30%" }}
                >
                  <p>
                    <span style={{ fontSize: "14px", color: "#666666" }}>
                      Offer Price :
                    </span>
                    <span
                      style={{
                        color: "#000000",
                        fontSize: "18px",
                        fontWeight: "600",
                      }}
                    >
                      <span>₹</span>
                      <span>{item.price}</span>
                    </span>
                  </p>
                  <p style={{ fontSize: "14px", color: "#666666" }}>
                    <span>
                      M.R.P: &nbsp;
                      <em>
                        <span>₹</span>
                        <strike>{item.mrp}</strike>
                      </em>
                    </span>
                  </p>
                  <p style={{ fontSize: "14px", color: "#666666" }}>
                    <span>
                      You Save: &nbsp;
                      <span>{item.save}</span>
                    </span>
                  </p>
                </div>
                <div className="available">OFFERS AVAILABLE</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
    )

}

export const WashingMachine = ()=>{
    return (
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{ height: "350px" }}
      >
        {washingMachines.map((item) => {
          return (
            <SwiperSlide>
              <div style={{marginLeft:"25%",width:"280px",height:"100%",cursor:"pointer"}}>
                <div>
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{ width: "180px", height: "180px" }}
                  />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#003380",
                      margin: "15px 20px 15px 0px",
                    }}
                  >
                    {item.name}
                  </p>
                  <div
                    style={{ width: "281px", height: "65px", lineHeight: "30%" }}
                  >
                    <p>
                      <span style={{ fontSize: "14px", color: "#666666" }}>
                        Offer Price :
                      </span>
                      <span
                        style={{
                          color: "#000000",
                          fontSize: "18px",
                          fontWeight: "600",
                        }}
                      >
                        <span>₹</span>
                        <span>{item.price}</span>
                      </span>
                    </p>
                    <p style={{ fontSize: "14px", color: "#666666" }}>
                      <span>
                        M.R.P: &nbsp;
                        <em>
                          <span>₹</span>
                          <strike>{item.mrp}</strike>
                        </em>
                      </span>
                    </p>
                    <p style={{ fontSize: "14px", color: "#666666" }}>
                      <span>
                        You Save: &nbsp;
                        <span>{item.save}</span>
                      </span>
                    </p>
                  </div>
                  <div className="available">OFFERS AVAILABLE</div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    )
}

export const TV = ()=>{
    return (
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{ height: "350px" }}
      >
        {Tv.map((item) => {
          return (
            <SwiperSlide>
              <div style={{marginLeft:"25%",width:"280px",height:"100%",cursor:"pointer"}}>
                <div>
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{ width: "180px", height: "180px" }}
                  />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#003380",
                      margin: "15px 20px 15px 0px",
                    }}
                  >
                    {item.name}
                  </p>
                  <div
                    style={{ width: "281px", height: "65px", lineHeight: "30%" }}
                  >
                    <p>
                      <span style={{ fontSize: "14px", color: "#666666" }}>
                        Offer Price :
                      </span>
                      <span
                        style={{
                          color: "#000000",
                          fontSize: "18px",
                          fontWeight: "600",
                        }}
                      >
                        <span>₹</span>
                        <span>{item.price}</span>
                      </span>
                    </p>
                    <p style={{ fontSize: "14px", color: "#666666" }}>
                      <span>
                        M.R.P: &nbsp;
                        <em>
                          <span>₹</span>
                          <strike>{item.mrp}</strike>
                        </em>
                      </span>
                    </p>
                    <p style={{ fontSize: "14px", color: "#666666" }}>
                      <span>
                        You Save: &nbsp;
                        <span>{item.save}</span>
                      </span>
                    </p>
                  </div>
                  <div className="available">OFFERS AVAILABLE</div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    )
}

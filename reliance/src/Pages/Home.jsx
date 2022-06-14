import React from "react";
import { Carousel } from "react-bootstrap";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { Laptops, Mobile,TV,WashingMachine  } from "../LandingPage/LandingPageProducts";

const Home = () => {
  const slider = [
    {
      id: 1,
      img: "https://www.reliancedigital.in/medias/iphone-pro-11-01.png?context=bWFzdGVyfGltYWdlc3wyOTc3NnxpbWFnZS9wbmd8aW1hZ2VzL2gxNi9oNWUvOTI3NjA1OTkxMDE3NC5wbmd8MzdkYzljODgzMDcyM2ZjMjJmZDI2ZjMwNjhkZmU5YjFmOTJmMGRmOTFiYzc4ZjcyMDRhMjQ5MWMyNjYwOTgxYg",
      name: "Smart Phones",
    },
    {
      id: 2,
      img: "https://www.reliancedigital.in/medias/Laptop-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wyOTAwOXxpbWFnZS9wbmd8aW1hZ2VzL2g0Mi9oNTYvOTI1MTA1MDYxODkxMC5wbmd8N2ZjYTg0ZDAyOTZmMmQ5OTZhZDNiM2M4NDg0ZDgxY2UyNzNjMmJiYzMwZTZiOGQwOWE5N2JlZDI4M2ViMGZjNw",
      name: "Laptops",
    },
    {
      id: 3,
      img: "https://www.reliancedigital.in/medias/TV-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3w0OTM4M3xpbWFnZS9wbmd8aW1hZ2VzL2g1ZC9oMTEvOTI1MTA1MDU1MzM3NC5wbmd8MThiNmU4NTZiNWI5MTE1ZGVjYjA4ZjIwM2QwZjUyMzFlOGExZTY0YmQ0MTRkYTkyN2M2MDZiYzUzZDY1ZjM4Ng",
      name: "Television",
    },
    {
      id: 4,
      img: "https://www.reliancedigital.in/medias/Watch-180x180-27-02-2020.png?context=bWFzdGVyfGltYWdlc3w2Njk2fGltYWdlL3BuZ3xpbWFnZXMvaGQ1L2g2My85MjUzNTA3NTk2MzE4LnBuZ3w4NmEwODU5NDI5YzVlMzJjNzRlNzNlYmJkMmJmYTZjMTI2OWY0YTUxYWU3YzMzM2E3YTc5YjljZmU4ZGMyNGQ2",
      name: "Smart Wearables",
    },
    {
      id: 5,
      img: "https://www.reliancedigital.in/medias/Washing-Machine-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wzNDU4MXxpbWFnZS9wbmd8aW1hZ2VzL2gzOC9oM2UvOTI1MTA1MDg4MTA1NC5wbmd8ZDAyZGNkMzU1MzE3N2E2OGFlOTliMzUyODZkYzlkNTc0NzFmODllY2JiZDVlNzdhYjg3MTgyMTc4ZGVhODA3ZA",
      name: "Washing Machines",
    },
    {
      id: 6,
      img: "https://www.reliancedigital.in/medias/Speaker-Headset-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wyNzUzN3xpbWFnZS9wbmd8aW1hZ2VzL2g1YS9oODAvOTI1MTA1MDY4NDQ0Ni5wbmd8YmMyYWJiNzRhMzk4NjMxMDRmOWRlZGI1MzVjZDk2Y2IxYTkxOGNlNjlmZjA2YTgwMGIwMjhmYTJlYmNhYjIwOA",
      name: "Speakers & Headesets",
    },
    {
      id: 7,
      img: "https://www.reliancedigital.in/medias/Camera-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3w0MzE0OHxpbWFnZS9wbmd8aW1hZ2VzL2gzNi9oMGMvOTI1MTA1MDc0OTk4Mi5wbmd8NDMxMGMyNjg2M2I3ZDFhOTc4YjkzMTNhYWM1ZmU5YzRlMjc3Mzg4MDcxOTU1OGE0NzZjODczZWU3NTdhMTM0MA",
      name: "Cameras",
    },
  ];

  return (
    <div>
      <div>
        <img
          src="https://www.reliancedigital.in/medias/Boot-Up-Landing-Page-Banner-02-06-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMTYwNzB8aW1hZ2UvanBlZ3xpbWFnZXMvaDBkL2g2Zi85ODM4NzI2ODczMTE4LmpwZ3xmZWNiMzdmODgzOWYxZTdjZmFlYzg3MDBlYTMyYTY1MWM5NmY2NTJjOTJkMGRmNmJlNmM4MjA2MzdhM2ZlMDlk"
          alt="logo"
          style={{ width: "100%" }}
        />
      </div>
      <div>
        <Carousel style={{ zIndex: "-1" }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.reliancedigital.in/medias/Umbrella-Offer-Carousel-Banner-03-05-2022.jpg?context=bWFzdGVyfGltYWdlc3w1OTYwNXxpbWFnZS9qcGVnfGltYWdlcy9oYTcvaDRmLzk4MzcyNzMzODI5NDIuanBnfDcxNWE4M2NmYjQ3YTE5YzVhMDhiMzhlMmViODRmMWJhYjJkZDRhMjA2OGFmZGJjN2Q2N2EwN2NkZWVhYjZlYTk"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.reliancedigital.in/medias/Motorola-Smartphone-Carousel-Banner-10-06-2022-02.jpg?context=bWFzdGVyfGltYWdlc3w2OTcxNnxpbWFnZS9qcGVnfGltYWdlcy9oNjgvaGRhLzk4NDIyMjEyMTk4NzAuanBnfDNhZDgwZDg2MDFhYzZkOWJiMmFlN2Q1M2ZiOTYwMGNlODA5ZmQwMjBiODYwM2JjMWViYTg2NDg4YTIyMzM4MGE"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.reliancedigital.in/medias/Air-Conditioners-Double-Price-Desktop-03.06.jpg?context=bWFzdGVyfGltYWdlc3wxNDcwMTZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGRhL2gwZS85ODQyMTE3ODY5NTk4LmpwZ3wzNTA4MWU4MDJiODg1OWY1YmY2ZDBhYzViZDRkNzZlNjc0M2M0ZDA4YThlMzNiZjdiOTBiNThlYWRlN2I3NjVm"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.reliancedigital.in/medias/OnePlus-Smart-Led-TVs-Desktop-31.05.jpg?context=bWFzdGVyfGltYWdlc3wxNDYyNTF8aW1hZ2UvanBlZ3xpbWFnZXMvaGQ1L2g1My85ODQyMjIxNjEzMDg2LmpwZ3w0MDY1NDUyMzMzYzYwM2JkYjhlNWE2NjU1ZjFjYmRjNTE3MzEzZTY4MjIyMzAwZGQ0YzI1NWVhZWFmZjg3ZTdi"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div style={{ margin: "0px 0px 32px", padding: "32px 30.75px 0px" }}>
        <span
          style={{
            color: "#333333",
            padding: "0px 10px 2px 0px",
            fontSize: "24px",
          }}
        >
          OFFERS YOU CANNOT MISS !!
        </span>
      </div>
      <div>
        <div className="offers">
          <img
            src="https://www.reliancedigital.in/medias/Itel-Vision-2S-05.jpg?context=bWFzdGVyfGltYWdlc3wzOTcyNnxpbWFnZS9qcGVnfGltYWdlcy9oN2MvaGI2Lzk4MzcyODY5ODE2NjIuanBnfGQ3NzhiZGVlZmM3ZGQzMTUyZWNlMDA3YjY5ZTBjZDA5NGVkMmJmNDdlOTNmMWUyNmYzNjlkMzdhZWNmODliZTQ"
            alt="fOffer"
          />
          <img
            src="https://www.reliancedigital.in/medias/Toshiba-HD-Ready-Smart-LED-TV-05.jpg?context=bWFzdGVyfGltYWdlc3w3MDAwMnxpbWFnZS9qcGVnfGltYWdlcy9oYTAvaGM4Lzk4MzczNDYzNTcyNzguanBnfGQ1ZmFlNTdkYjViZDcwYTc4YjViOWVkY2Y3OGFkYzdlN2FkNjhiOTIwOTc4Yjg4ZGNjMzU4ZDZmMWVmMjk0NjY"
            alt="fOffer"
          />
          <img
            src="https://www.reliancedigital.in/medias/Best-i3-Laptops-05.jpg?context=bWFzdGVyfGltYWdlc3w1NjM5NHxpbWFnZS9qcGVnfGltYWdlcy9oOTMvaDAyLzk4MzczNDY0MjI4MTQuanBnfDBhN2Y2MmRjNTlhOTYzYjlhMWVjN2UwODhiMTBiNDM3NjE3YzU0MjcxYWYzMDkyZWFkNDM0YTNlZjRiOGMxOTM"
            alt="fOffer"
          />
          <img
            src="https://www.reliancedigital.in/medias/Printers-and-Inks-05.jpg?context=bWFzdGVyfGltYWdlc3w1MTIxMnxpbWFnZS9qcGVnfGltYWdlcy9oOTgvaDM0Lzk4MzczNDY0ODgzNTAuanBnfDVmMzNlYmY5Y2ExODg5MzU3NjZkNmVlN2I4YjFhMzljZGNhNWU1ZTdiNmU0MmNmMjU3YmMyZDE1M2VlMWMxOGE"
            alt="fOffer"
          />
        </div>
        <hr style={{ marginTop: "-0.1%" }} />
        <div className="offers1">
          <img
            src="https://www.reliancedigital.in/medias/iPhone-12-05.jpg?context=bWFzdGVyfGltYWdlc3w0NDc2OHxpbWFnZS9qcGVnfGltYWdlcy9oNmMvaDBmLzk4Mzc4NTYwNjM1MTguanBnfGRkNTFhZGRmYjAyMjMzMTBiZDkxNTljZDM1NDJhMDcwOGJhY2UxNTc5ZGY0YmIxMWI0ZWZhY2M5YWNhNjAxNTY"
            alt="fOffer"
          />
          <img
            src="https://www.reliancedigital.in/medias/Best-Deals-on-Frost-Free-Refrigerators.jpg?context=bWFzdGVyfGltYWdlc3w0NDU3NnxpbWFnZS9qcGVnfGltYWdlcy9oNWYvaGQzLzk4Mzc5NTUzNTA1NTguanBnfGNhN2MyZGNlYzFkYTk4YTcxNzEyYmM0M2YxODg4ODA3MjFmMTdhYmE5ZDE2YTg5MjNhZGZkMzU1NDA1ZGUyZTU"
            alt="fOffer"
          />
          <img
            src="https://www.reliancedigital.in/medias/Sansui-Washing-Machines.jpg?context=bWFzdGVyfGltYWdlc3w1MTUwOHxpbWFnZS9qcGVnfGltYWdlcy9oOTQvaGY0Lzk4Mzc5NTU0MTYwOTQuanBnfGY1OTljNWFlZmRhZTg4MjM2ZDYwYTkxZmQ0NDA1YjZkZmU3NDAzNTdjODg0NzgyZTFkYzY2ZGVhOGJlNTcxODA"
            alt="fOffer"
          />
          <img
            src="https://www.reliancedigital.in/medias/True-Wireless-05.jpg?context=bWFzdGVyfGltYWdlc3wzNDkxOXxpbWFnZS9qcGVnfGltYWdlcy9oNTYvaDA1Lzk4MzczNDY3NTA0OTQuanBnfDkxNDViMTgyZGIxZjk0NDY0YjVlYzU4N2RjODBjNTNjYmNkYWQ0ZGVlY2NjYTgzMTQ1MTZmY2ZjNjU3MmI0YTE"
            alt="fOffer"
          />
        </div>
      </div>
      <div>
        <Carousel style={{cursor:"pointer" }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.reliancedigital.in/medias/Samsung-Galaxy-M53-5G-NPI-Banner-10-06-2022.jpg?context=bWFzdGVyfGltYWdlc3w5MDgzNXxpbWFnZS9qcGVnfGltYWdlcy9oY2YvaDJlLzk4NDE1Nzc3MjE4ODYuanBnfDdlYzFjZGU2ZGRjNzQ2ZDQyMDY2YzJlZTAyZDBkNjE2NjJhMjgzZjcxYzBiYTFiY2NlNjdiOGRlZDA5ZDI2MDk"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.reliancedigital.in/medias/NPI-Banner-Gizmore-Desktop.jpg?context=bWFzdGVyfGltYWdlc3w5MTgxMXxpbWFnZS9qcGVnfGltYWdlcy9oMTgvaDA5Lzk4NDEwODQ3NjAwOTQuanBnfDY5OWNiNDVlNDdhZDk2MjhmMGEyOGJjYmI2YWFmMWI4OTA3ODkyOGZkY2RlZGI1ZjAxZWY2ZTNjYzNmZWE0NzE"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.reliancedigital.in/medias/Moto-E32s-NPI-Banner-13-06-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMTE1NDN8aW1hZ2UvanBlZ3xpbWFnZXMvaDFkL2gzMS85ODQzMDY3MDI3NDg2LmpwZ3wwOWU5NTA4ZTlhMGQ3MWY4ODEyZjIyNmQ3NmU2OWU2NTllMmEwZWNhMzcyMTQyNTVhMzlkMDVjNzRiNzRhYWU2"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.reliancedigital.in/medias/Desktop-1365x260.jpg?context=bWFzdGVyfGltYWdlc3wxMDkwOTR8aW1hZ2UvanBlZ3xpbWFnZXMvaDM0L2g1OC85ODM0OTk3MzUwNDMwLmpwZ3wwZmU2NmQ0ODkxMTQ3YzFhZDZiOGMyODg0ZTQ0ODBiZWE5ZTA4NTM1MGMzZGMyNzQ5ZmUzOTUzMTQ3OWEyMGEw"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.reliancedigital.in/medias/Epson-D.jpg?context=bWFzdGVyfGltYWdlc3wxNTA3NjV8aW1hZ2UvanBlZ3xpbWFnZXMvaGE1L2gwNy85ODQyMjE3Mzg2MDE0LmpwZ3xiOGI2NWM4YzIyNWI0ZGMyYzI4YTBkN2FlM2JiNDhiYjgxOTdhY2UyZmU4YmVhOWZiM2FkMGQ1Mjc2NDNhOWJl"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.reliancedigital.in/medias/Acer-Banner-NPI-D.jpg?context=bWFzdGVyfGltYWdlc3wxNDk4NTh8aW1hZ2UvanBlZ3xpbWFnZXMvaGJjL2hlYS85ODI0Mjk5Nzc4MDc4LmpwZ3w5NDgxYzg3OWQwMzQ5OWEyNDkwNzc0OTViN2E2ZjZiY2Y0M2MxMjYyMzMzOTVjOWNhNmY4Mjk3MjdlNDU3OGM1"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.reliancedigital.in/medias/Motorola-edge30-NPI-Banner-20-05-2022.jpg?context=bWFzdGVyfGltYWdlc3w2MzU4M3xpbWFnZS9qcGVnfGltYWdlcy9oNDYvaGEwLzk4MzMwNTAxNzc1NjYuanBnfDcxNGUwYTczMTE2ZGQ0YWMxMmZmZDc4MGI1MmI4Yjc0MjMwYjU0MmZjNDRjZWZmYjI0MGFjYTZjMTRjYmU4YjU"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.reliancedigital.in/medias/Bose-Soundlink-Flex-NPI-Banners-Desktop.jpg?context=bWFzdGVyfGltYWdlc3w5NDY4NnxpbWFnZS9qcGVnfGltYWdlcy9oZTYvaDU4Lzk4NDIxMTc3Mzg1MjYuanBnfGUyOWU3YzRlOWIzODZhMGIzNWJhNDMzZmM0Y2FhZDhmNWMyYmNlNjg5ZjRlZDkzZTkxYjM4YzJmN2JlYmQzY2E"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="grp">
        <div className="rgp">Explore our Range of Products</div>
        <div className="rgp_products">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            slidesPerGroup={5}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            style={{ height: "350px",cursor:"pointer"}}
          >
            {slider.map((item) => {
              return (
                <SwiperSlide style={{zIndex:"-1"}}>
                  <div key={item.id} >
                    <img src={item.img} alt="logo" />
                    <h4
                      style={{
                        marginTop: "25%",
                        fontWeight: "500",
                        color: "#333",
                        fontSize: "20px",
                      }}
                    >
                      {item.name}
                    </h4>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <button className="view">View All</button>
        </div>
      </div>
      <div style={{ marginBottom: "2%" }}>
        <div className="digital">The Reliance Digital Brand Promise</div>
        <div className="promise">
          <div>
            <img
              src="https://www.reliancedigital.in/medias/Insta-Delivery-Brand-Promise-Icon.png?context=bWFzdGVyfGltYWdlc3wxNTM3fGltYWdlL3BuZ3xpbWFnZXMvaGI2L2gwNS85NDQ3MTcwMzQyOTQyLnBuZ3w2Yzc1ZmY1ZjYwOWIyNWU0ZTgwMjFlYmRkMTU5ZTgzMGI4ZDNmZTE2NjVjYmRlMmUwMmRiODI2OTExNWM5ZTdk"
              alt="logo"
            />
            <h3>INSTA DELIVERY</h3>
            <p>LESS THAN 3HRS.</p>
          </div>
          <div>
            <img
              src="https://www.reliancedigital.in/medias/Best-Finance-Options-2.png?context=bWFzdGVyfGltYWdlc3wxMjM4fGltYWdlL3BuZ3xpbWFnZXMvaDJmL2gxOS85NDQ3MTcwNDA4NDc4LnBuZ3xlMDBiNjY4YWI5YzMzYjZkZDhlZTMyMDhjYjE2YzI2OTY2NWJhYjk2M2VkNzdjZDg3NTNlMGEyMTA1ZjFlODZh"
              alt="logo"
            />
            <h3>BEST FINANCE OPTIONS</h3>
            <p>WIDE RANGE</p>
          </div>
          <div>
            <img
              src="https://www.reliancedigital.in/medias/service-img.png?context=bWFzdGVyfGltYWdlc3w5MTB8aW1hZ2UvcG5nfGltYWdlcy9oMDYvaGEzLzkwOTA3OTc5OTQwMTQucG5nfGJjZmJhNzM1ODdkYTQ5ODI3YzNiMzQ1ZTdlM2JjNjUwMTBjM2E3YWFjNmUxZjdmMmEyOGRjZDMxOGI4ZWE0MWY"
              alt="logo"
            />
            <h3>SERVICE GUARANTEE</h3>
            <p>HASSLE FREE</p>
          </div>
          <div>
            <img
              src="https://www.reliancedigital.in/medias/unmatched-network-img.png?context=bWFzdGVyfGltYWdlc3w3NDV8aW1hZ2UvcG5nfGltYWdlcy9oODIvaDJhLzkwOTA3OTgwNTk1NTAucG5nfDFmMThjYzdiYTNiOTgxYjA5YzdlZTFiMmQyODI5MGY2NTM4ZTcxOWZkZTA1ZjAzY2Q1ZTk5YjQ1NTMxMWViYzU"
              alt="logo"
            />
            <h3>UNMATCHED NETWORK</h3>
            <p>700 CITIES,2000 STORES</p>
          </div>
        </div>
      </div>
      <hr style={{ border: "0.00001px solid grey" }} />
      <div className="bestSelling">
        <div>
          <span className="subSelling">Best Selling Mobiles</span>
          <Link to="/bestmobiles" className="viewall">
            View all
          </Link>
        </div>
        <div className="move_left">
          <div>
            <Link to="/bestselling">
              <img
                src="https://www.reliancedigital.in/medias/Best-Selling-Mobiles.jpg?context=bWFzdGVyfGltYWdlc3wxMDMyODF8aW1hZ2UvanBlZ3xpbWFnZXMvaDRmL2hhMS85ODQyMjU1MTY3NTE4LmpwZ3w1YzI5NmI5ZDkzYTI0NTBlZDA5YzExZmMyNWIwYjExMzQ5YmY2Y2RhMDE0YjVlNDkzMjhjYjBmOWYzNGM0MjVm"
                alt="logo"
              />
            </Link>
          </div>
          <Mobile />
        </div>
      </div>
      <hr style={{ border: "0.00001px solid grey" }} />
      <div className="bestSelling">
        <div>
          <span className="subSelling">Laptop with SSD</span>
          <Link to="/laptop" className="viewall">
            View all
          </Link>
        </div>
        <div className="move_left">
          <Laptops/>
          <div>
            <Link to="/laptop">
              <img
                src="https://www.reliancedigital.in/medias/Laptops-with-SSD.jpg?context=bWFzdGVyfGltYWdlc3wxMDQ5ODN8aW1hZ2UvanBlZ3xpbWFnZXMvaDVjL2hhZS85ODM3MjgzMTgwNTc0LmpwZ3w1NzM1ZmZiZmU4OTlmZTE3MjVmYjdkNTY3NDhmNzI5MDA5Yzk5YjQzOWQwODdlYjJjNTRiYzAxNTJkYTFhNzE0"
                alt="logo"
              />
            </Link>
          </div>
        </div>
      </div>
      <hr style={{ border: "0.00001px solid grey" }} />
      <div className="bestSelling">
        <div>
          <span className="subSelling">Best Selling Mobiles</span>
          <Link to="/bestmobiles" className="viewall">
            View all
          </Link>
        </div>
        <div className="move_left">
          <div>
            <Link to="/bestselling">
              <img
                src="https://www.reliancedigital.in/medias/Top-Deals-In-Washing-Machine.jpg?context=bWFzdGVyfGltYWdlc3wxMDQ0MTN8aW1hZ2UvanBlZ3xpbWFnZXMvaDdiL2g0NS85ODM3MjgzMjQ2MTEwLmpwZ3xiYWYzNTI4ZDRkYTZlNmUzMDhjYzA0OTQ3MmYyNWM2MWEzNGMzNGZkM2E2NDk2MTI3MjAyOTkwYjVjZTZlYzcz"
                alt="logo"
              />
            </Link>
          </div>
          <WashingMachine/>
        </div>
      </div>
      <hr style={{ border: "0.00001px solid grey" }} />
      <div className="bestSelling">
        <div>
          <span className="subSelling">XIAOMI HD SMART LED TV</span>
          <Link to="/laptop" className="viewall">
            View all
          </Link>
        </div>
        <div className="move_left">
          <TV/>
          <div>
            <Link to="/laptop">
              <img
                src="https://www.reliancedigital.in/medias/Xiaomi-HD-Smart-LED-TV-Products-Carousel.jpg?context=bWFzdGVyfGltYWdlc3wxMjU2ODV8aW1hZ2UvanBlZ3xpbWFnZXMvaGQxL2g0Ny85ODM5ODA1MzMzNTM0LmpwZ3w4NTAxN2Q3ZDNlMTZiMGYwMTZlMjg5YWIwMmQxODkwMzkzMDE4OTIzOTFlYTA2NmZjZTQ4NGMxNWUzNTU0ZGM3"
                alt="logo"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

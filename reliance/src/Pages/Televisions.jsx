import React from "react";
import { Carousel } from "react-bootstrap";
import { Telvi } from "../Data/Televi";

const Televisions = () => {
  return (
    <div>
      <div>
        <Carousel style={{ zIndex: "-1" }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.reliancedigital.in/medias/Realme-Smart-Tv-D.jpg?context=bWFzdGVyfGltYWdlc3wxMjU5NTV8aW1hZ2UvanBlZ3xpbWFnZXMvaDY1L2g5Ny85ODEwMzg3MzcwMDE0LmpwZ3w2ZDkzZjk2NjkzMjM2MTUxM2M1OWFlNmQ5ODgxYzI4YjllMDFmOTcwNTg5OTdjMzA2OTZjZWI0YjIyYWJlMWQ4"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.reliancedigital.in/medias/Toshiba-Ultimate-Smart-TV-D.jpg?context=bWFzdGVyfGltYWdlc3wxNDg2MjZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDdkL2g5Ni85ODIxMTE2NTYzNDg2LmpwZ3w2NjdlYTZlMjU4MzY5MmM5OGZlZDIyNmExOGNjYmNhYjI5MWNjNzU1OWFkODI4NjdlOGI1ZDhmODJmMzBiNTdh"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.reliancedigital.in/medias/Kodak-TV-CLP-Banner-26-05-2022.jpg?context=bWFzdGVyfGltYWdlc3w2NjQzMHxpbWFnZS9qcGVnfGltYWdlcy9oMGUvaDVhLzk4MzQ5ODcxOTIzNTAuanBnfDA2OGViMWIwOTJmMWNiNTBlZGYyYmUxOGU2NTE4ZjA2MDk4ZjY3NWM0MTZjZjc1NjcwNzVmMDgwMGZhYWNkZDU"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.reliancedigital.in/medias/LG-SoundBar-D.jpg?context=bWFzdGVyfGltYWdlc3wxNDEwNzV8aW1hZ2UvanBlZ3xpbWFnZXMvaDg4L2g1OC85ODM1NzkzNDE2MjIyLmpwZ3w1ZTY3ODhkYzU2YzFmMzQ0ZmE0ZTQ4ZDNiOGFlN2VhZTFkN2QwYjc3NmRmNjI4NDQwNDU0MzVmMWRmOTgxMDM5"
              alt="fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.reliancedigital.in/medias/1365x260.jpg?context=bWFzdGVyfGltYWdlc3wxNDYyMzd8aW1hZ2UvanBlZ3xpbWFnZXMvaDU3L2g4Mi85ODM4NzI4ODcxOTY2LmpwZ3w5MTRlNzVhYmFkZDlkOGJmOTBmYjJkZjIzODIxMzRmNGYxNWZkOWNkYjRlOWIyODE3ZjhhMTllMzVlNjk0ZGVk"
              alt="fifth slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="home">
        <i class="fa fa-home" aria-hidden="true" style={{fontSize:"10px",marginTop:"5px"}}></i>
        <p style={{fontSize:"14px",color:"#000000B3"}}>Televisions</p>
      </div>
      <div className="tv">
        <div></div>
        <div>
          <div
            style={{
              display: "flex",
              padding: "16px 8px",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h1 style={{ fontSize: "24px" }}>TELEVISIONS</h1>
            </div>
            <div style={{ display: "flex" }}>
              <select style={{width:"200px",height:"30px",fontSize:"14px"}}>
                <option>Sort By</option>
                <option>Name(A-Z)</option>
                <option>Name(Z-A)</option>
                <option>Price(Low-High)</option>
                <option>Price(High-Low)</option>
              </select>
              <div
                style={{
                  textAlign: "right",
                  display: "flex",
                  verticalAlign: "top",
                  marginLeft: "18px",
                }}
              >
                <ul className="list-inline" style={{display:"flex",gap:"10px"}}>
                  <li class="">
                    <span>
                      <div className="fa fa-bars"></div>
                    </span>
                  </li>
                  <li class="active">
                    <span>
                      <div className="fa fa-th-large"></div>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tvGrid">
            {Telvi.map((item) => {
              return (
                <div style={{ border: "1px solid #e0e0e1",height:"328px" }}>
                  <div
                    style={{
                      width: "180px",
                      height: "180px",
                      textAlign: "center",
                      margin: "auto",
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{ width: "180px", height: "180px" }}
                    />
                  </div>
                  <div>
                    <p>{item.name}</p>
                    <div style={{ display: "flex", padding: "0px 16px",marginTop:"8px" }}>
                      <span
                        style={{
                          color: "#1F4985",
                          fontSize: "15px",
                          fontWeight: "600",
                        }}
                      >
                        ₹{item.price}
                      </span>
                      <span
                        style={{
                          fontSize: "13px",
                          marginLeft: "8px",
                          color: "#666666",
                        }}
                      >
                        ₹<strike>{item.mrp}</strike>
                      </span>
                      <span
                        style={{
                          color: "rgb(67, 160, 71)",
                          fontSize: "12px",
                          fontWeight: "600",
                          marginLeft:"8px"
                        }}
                      >
                        {item.discount}
                      </span>
                    </div>
                    
                  </div>
                  <div className="available">OFFERS AVAILABLE</div>
                  <div style={{border:"1px solid #e0e0e1",height:"48px",display:"flex"}}>
                    <div style={{width:"50%",margin:"auto",padding:"5px 25px",borderRight:"1px solid #e0e0e1 "}}>
                        <input type="checkbox" style={{marginRight:"8px",backgroundColor:"rgb(37,73,133)",border:"1px solid rgb(37,73,133)"}}/>
                        <span style={{color:"#1F4985",fontSize:"14px"}}>Compare</span>
                    </div>
                    <div style={{width:"50%",margin:"auto",padding:"5px 25px"}}>
                    <i class="fa fa-heart-o" aria-hidden="true" style={{marginRight:"8px"}}></i>
                    <span style={{color:"#1F4985",fontSize:"14px"}}>Whishlist</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Televisions;

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobiles, setMobiles] = useState(false);
  const [tv, setTv] = useState(false);
  const [home,setHome] =useState(false);
  const [computers,setComputers] = useState(false);
  const [cameras,setCameras]=useState(false);
  const [kitchen,setKitchen]=useState(false);
  const [personal,setPersonal]=useState(false);
  const [Accessories,setAccessories]=useState(false)
  return (
    <>
      <div className="navbar">
        <div
          onMouseOver={() => {
            setTv(false);
            setMobiles(!mobiles);
          }}
        >
          MOBILES & TABLETS
          <span
            className="fa fa-angle-down ml__4"
            style={{ marginLeft: "5px" }}
          ></span>
        </div>

        <div
          onMouseOver={() => {
            setMobiles(false);
            setTv(!tv);
            setHome(false)
          }}
        >
          TV & AUDIO
          <span
            className="fa fa-angle-down ml__4"
            style={{ marginLeft: "5px" }}
          ></span>
        </div>
        <div onMouseOver={()=>{
          setTv(false)
          setHome(!home)
          setComputers(false)
        }}>
          HOME APPLIANCES
          <span
            className="fa fa-angle-down ml__4"
            style={{ marginLeft: "5px" }}
          ></span>
        </div>
        <div onMouseOver={()=>{
          setHome(false)
          setComputers(!computers)
          setCameras(false)
        }}>
          COMPUTERS
          <span
            className="fa fa-angle-down ml__4"
            style={{ marginLeft: "5px" }}
          ></span>
        </div>
        <div onMouseOver={()=>{
          setCameras(!cameras)
          setComputers(false)
          setKitchen(false)
        }}>
          CAMERAS
          <span
            className="fa fa-angle-down ml__4"
            style={{ marginLeft: "5px" }}
          ></span>
        </div>
        <div onMouseOver={()=>{
          setKitchen(!kitchen);
          setCameras(false);
          setPersonal(false);
        }}>
          KITCHEN APPLIANCES
          <span
            className="fa fa-angle-down ml__4"
            style={{ marginLeft: "5px" }}
          ></span>
        </div>
        <div onMouseOver={()=>{
          setPersonal(!personal);
          setKitchen(false);
          setAccessories(false);
        }}>
          PERSONAL CARE
          <span
            className="fa fa-angle-down ml__4"
            style={{ marginLeft: "5px" }}
          ></span>
        </div>
        <div onMouseOver={()=>{
          setAccessories(!Accessories)
          setPersonal(false);
        }}>
          ACCESSORIES
          <span
            className="fa fa-angle-down ml__4"
            style={{ marginLeft: "5px" }}
          ></span>
        </div>
      </div>
      {Accessories&&(
        <div className="dropDown" onMouseLeave={()=>setAccessories(false)}>
          <div>
          <Link to="/smartphones" className="productsName"><h4>Bags,Cases & Sleeves</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Smart Devices</h4></Link>
          <Link to="/smartphones" className="productsName"><p>Smart Plugs</p></Link>
          <Link to="/smartphones" className="productsName"><p>Smart Cameras</p></Link>
          <Link to="/smartphones" className="productsName"><p>Smart Sensors</p></Link>
          <Link to="/smartphones" className="productsName"><p>Smart Lights</p></Link>
          <Link to="/smartphones" className="productsName"><p>Smart Speakers</p></Link>
          <Link to="/smartphones" className="productsName"><h4>Batteries & PowerBanks</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Cables & Cords</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Chargers & Adapters</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Bluetooth & WiFi Speakers</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Audio/Video Accessories</h4></Link>
          </div>
          <div>
          <Link to="/smartphones" className="productsName"><h4>Reconnect Disney|Marvel Accessories</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Memory Cards</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Mounts & Stands</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Pen Drives</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Routers</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Screen Guards & Protectors</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Power Strips & Extension Cords</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Stabilizers</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Surge Protectors</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>UPS</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Webcams</h4></Link>
          </div>
          <div>
          <Link to="/smartphones" className="productsName"><h4>External Hard Disks</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Headphones & Headsets</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Cleaners & Protectors</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Computer Mouse</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Keyboards</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Indoor Lighting</h4></Link>
          </div>
        </div>
      )}
      {personal&&(
        <div className="dropDown" onMouseLeave={()=>setPersonal(false)}>
          <div>
          <Link to="/smartphones" className="productsName"><h4>Shavers & Trimmers</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Epilators</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Hair Dryers & Stylers</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Weighing Scales</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Irons</h4></Link>
          </div>
          <div>
          <Link to="/smartphones" className="productsName"><h4>Reconnect Disney|Marvel Grooming Collection</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Hygiene & Personal Care</h4></Link>
          <Link to="/smartphones" className="productsName"><p>Digital Thermometers</p></Link>
          <Link to="/smartphones" className="productsName"><p>Massagers</p></Link>
          <Link to="/smartphones" className="productsName"><p>Misc. Care Devices</p></Link>
          <Link to="/smartphones" className="productsName"><h4>Garment Steamers</h4></Link>
          </div>
          
        </div>
      )}
      {kitchen && (
        <div className="dropDown" onMouseLeave={()=>setKitchen(false)}>
          <div>
          <Link to="/smartphones" className="productsName"><h4>Microwave Ovens</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Water Purifiers</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Fruits and Vegetable Cleaner</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Oven Toaster Grillers(OTG)</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Cookwares</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Juice Mixer Grinders</h4></Link>
          <Link to="/smartphones" className="productsName"><p>Juicers</p></Link>
          <Link to="/smartphones" className="productsName"><p>Hand Mixers</p></Link>
          <Link to="/smartphones" className="productsName"><p>Mixer Grinders</p></Link>
          <Link to="/smartphones" className="productsName"><p>Choppers & Slicers</p></Link>
          </div>
          <div>
          <Link to="/smartphones" className="productsName"><h4>Induction Cookers</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Food Processors</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Blenders</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Kitchen Hobs & Gas Stoves</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Kitchen Chimneys</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Rice Cookers</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Sandwich Makers</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Popup Toasters</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Coffee Makers & Grinders</h4></Link>
          </div>
          <div>
          <Link to="/smartphones" className="productsName"><h4>Reconnect Disney|Marvel Kitchen Collection</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Air Fryers</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Speciality Appliances</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Electric Kettles</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Water Dispensers</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Wet Grinders</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Egg Boilers</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Flour Mills</h4></Link>
          </div>

        </div>
      )}
      {cameras&&(
        <div className="dropDown" onMouseLeave={()=>setCameras(false)}>
          <div>
          <Link to="/smartphones" className="productsName"><h4>DSLR Cameras</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Mirrorless Cameras</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Point & Shoot Cameras</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Action Cameras</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Photo Storage Devices</h4></Link>
          <Link to="/smartphones" className="productsName"><p>Memory Cards</p></Link>
          <Link to="/smartphones" className="productsName"><p>Pen Drives</p></Link>
          </div>
          <div>
          <Link to="/smartphones" className="productsName"><h4>Binoculars</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Camera Lens</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Digital Camera Accessories</h4></Link>
          <Link to="/smartphones" className="productsName"><p>Camera Batteries & Chargers</p></Link>
          <Link to="/smartphones" className="productsName"><p>Camera bags & Cases</p></Link>
          <Link to="/smartphones" className="productsName"><p>Tripods & Monopods</p></Link>
          <Link to="/smartphones" className="productsName"><p>Action Camera Accessories</p></Link>
          </div>
        </div>
      )}
      {mobiles && (
        <div className="dropDown" onMouseLeave={() => setMobiles(false)}>
          <div className="first">
            <Link to="/smartphones" className="productsName">
              <h4>Smartphones</h4>
            </Link>
            <Link to="/smartphones" className="productsName">
              <p>Moto E32s</p>
            </Link>
            <Link to="/smartphones" className="productsName">
              <h4>Smart Wearables</h4>
            </Link>
            <Link to="/smartphones" className="productsName">
              <p>Apple Watch 5% Off</p>
            </Link>
            <Link to="/smartphones" className="productsName">
              <p>Bluetooth Calling Watches</p>
            </Link>
            <Link to="/smartphones" className="productsName">
              <p>Smart Watch Accessories</p>
            </Link>
            <Link to="/smartphones" className="productsName">
              <h4>Accessories</h4>
            </Link>
            <Link to="/smartphones" className="productsName">
              <p>Tablet Accessories</p>
            </Link>
            <Link to="/smartphones" className="productsName">
              <p>Mobile Accessories</p>
            </Link>
            <Link to="/smartphones" className="productsName">
              <p>Mobile Grips & Stands</p>
            </Link>
            <Link to="/smartphones" className="productsName">
              <p>Car Mobile Holders</p>
            </Link>
          </div>
          <div className="first">
            <Link to="/smartphones" className="productsName">
              <h4>Headphones & Headsets</h4>
            </Link>
            <Link to="/smartphones" className="productsName">
              <p>True Wireless</p>
            </Link>
            <Link to="/smartphones" className="productsName">
              <p>Bluetooth Neckbands</p>
            </Link>
            <Link to="/smartphones" className="productsName">
              <p>Wired Earphones</p>
            </Link>
            <Link to="/smartphones" className="productsName">
              <h4>Tablets & eReaders</h4>
            </Link>
            <Link to="/smartphones" className="productsName">
              <p>Every Day use Tablets below 15000</p>
            </Link>
            <Link to="/smartphones" className="productsName">
              <p>Premium Tablets,Above 15001</p>
            </Link>
            <Link to="/smartphones" className="productsName">
              <h4>Power Banks</h4>
            </Link>
            <Link to="/smartphones" className="productsName">
              <p>10K Mah Starting @549</p>
            </Link>
            <Link to="/smartphones" className="productsName">
              <h4>eSlates</h4>
            </Link>
          </div>
          <div>
            <Link to="/smartphones" className="productsName">
              <h4>All Learning Robots</h4>
            </Link>
          </div>
        </div>
      )}
      {home && (
        <div className="dropDown" onMouseLeave={()=>setHome(false)}>
          <div>
          <Link to="/smartphones" className="productsName"><h4>Air Conditioners</h4></Link>
          <Link to="/smartphones" className="productsName"><p>Split Air Conditioners</p></Link>
          <Link to="/smartphones" className="productsName"><p>Window Air Conditioners</p></Link>
          <Link to="/smartphones" className="productsName"><p>Smart Air Conditioners</p></Link>
          <Link to="/smartphones" className="productsName"><p>Energy Efficient Air Conditioners</p></Link>
          <Link to="/smartphones" className="productsName"><p>1 ton Air Conditioners</p></Link>
          <Link to="/smartphones" className="productsName"><p>1.5 ton Air Conditioners</p></Link>
          <Link to="/smartphones" className="productsName"><p>5 star Air Conditioners</p></Link>
          <Link to="/smartphones" className="productsName"><h4>Air Coolers</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Air Purifier</h4></Link>

          </div>
          <div>
          <Link to="/smartphones" className="productsName"><h4>Washing Machines</h4></Link>
          <Link to="/smartphones" className="productsName"><p>Fully Automatic Front Load</p></Link>
          <Link to="/smartphones" className="productsName"><p>Fully Automatic Top Load</p></Link>
          <Link to="/smartphones" className="productsName"><p>Semi-Automatic Front Load</p></Link>
          <Link to="/smartphones" className="productsName"><p>Washing Machine Detergents & Liquids</p></Link>
          <Link to="/smartphones" className="productsName"><h4>Refrigerators</h4></Link>
          <Link to="/smartphones" className="productsName"><p>Single Door</p></Link>
          <Link to="/smartphones" className="productsName"><p>Double Door</p></Link>
          <Link to="/smartphones" className="productsName"><p>Side by Side Refrigerators</p></Link>
          <Link to="/smartphones" className="productsName"><p>Convertible</p></Link>
          </div>
          <div>
          <Link to="/smartphones" className="productsName"><h4>Vacuum Cleaners</h4></Link>
          <Link to="/smartphones" className="productsName"><p>Robotic Vaccuum Cleaners</p></Link>
          <Link to="/smartphones" className="productsName"><h4>Dish Washers</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Fans</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Cloth Dryers</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Geysers</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Room Heaters</h4></Link>
          </div>

        </div>
      )}
      {computers && (
        <div className="dropDown" onMouseLeave={()=>setComputers(false)}>
          <div>
          <Link to="/smartphones" className="productsName"><h4>Laptops</h4></Link>
          <Link to="/smartphones" className="productsName"><p>Basic use laptops</p></Link>
          <Link to="/smartphones" className="productsName"><p>Student Laptops</p></Link>
          <Link to="/smartphones" className="productsName"><p>Thin and light Laptops</p></Link>
          <Link to="/smartphones" className="productsName"><p>Multi-Tasking Laptops</p></Link>
          <Link to="/smartphones" className="productsName"><p>Gaming Laptops</p></Link>
          <Link to="/smartphones" className="productsName"><p>Content creator Laptops</p></Link>
          <Link to="/smartphones" className="productsName"><h4>Desktops & All-in-Ones</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Computer Monitors</h4></Link>
          </div>
          <div>
          <Link to="/smartphones" className="productsName"><h4>Bluetooth & WiFi Speakers</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Internet Connectivity Devices</h4></Link>
          <Link to="/smartphones" className="productsName"><p>Wireless Hotspot</p></Link>
          <Link to="/smartphones" className="productsName"><p>Routers</p></Link>
          <Link to="/smartphones" className="productsName"><p>WiFi Range Extenders</p></Link>
          <Link to="/smartphones" className="productsName"><h4>Printers</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Toners & Ink Cartridges</h4></Link>
          <Link to="/smartphones" className="productsName"><h4>Data Storage Devices</h4></Link>
          <Link to="/smartphones" className="productsName"><p>Pen Drives & OTG Drives</p></Link>
          <Link to="/smartphones" className="productsName"><p>Hard Drives & SSD</p></Link>
          </div>
          <div>
          <Link to="/smartphones" className="productsName"><h4>Computer Accessories</h4></Link>
          <Link to="/smartphones" className="productsName"><p>Upto 72% Off,Only on Reliancedigital.in</p></Link>
          <Link to="/smartphones" className="productsName"><p>Computer Networking Cables</p></Link>
          <Link to="/smartphones" className="productsName"><p>Laptop Chargers & Adaptor</p></Link>
          <Link to="/smartphones" className="productsName"><p>Hubs & Docks</p></Link>
          <Link to="/smartphones" className="productsName"><p>Laptop Bags & Sleeves</p></Link>
          <Link to="/smartphones" className="productsName"><p>Laptop Cooling Pad</p></Link>
          <Link to="/smartphones" className="productsName"><p>Laptop Screen Protectors</p></Link>
          <Link to="/smartphones" className="productsName"><p>Laptop Tables & Stands</p></Link>
          <Link to="/smartphones" className="productsName"><h4>Input Devices</h4></Link>
          <Link to="/smartphones" className="productsName"><p>Keyboards</p></Link>
          <Link to="/smartphones" className="productsName"><p>Computer Mouse</p></Link>
          <Link to="/smartphones" className="productsName"><p>Mousepads</p></Link>
          <Link to="/smartphones" className="productsName"><p>Stylus Pens</p></Link>
          </div>

        </div>
      )}

      {tv && (
        <div className="dropDown" onMouseLeave={() => setTv(false)}>
          <div>
            <Link to="/smartphones" className="productsName">
              <h4>Televisions</h4>
            </Link>
            <Link to="/smartphones" className="productsName">
              <p>Smart TVs</p>
            </Link>
            <Link to="/smartphones" className="productsName">
              <p>32 Inch TVs</p>
            </Link>
            <Link to="/smartphones" className="productsName">
              <p>43 Inch TVs</p>
            </Link>
            <Link to="/smartphones" className="productsName">
              <p>55 Inch TVs</p>
            </Link>
            <Link to="/smartphones" className="productsName">
              <p>Andriod TVs</p>
            </Link>
            <Link to="/smartphones" className="productsName">
              <p>4K Ultra HD TVs</p>
            </Link>
            <Link to="/smartphones" className="productsName">
              <p>Full HD TVs</p>
            </Link>
            <Link to="/smartphones" className="productsName">
              <p>HD Ready TVs</p>
            </Link>
            <Link to="/smartphones" className="productsName">
              <p>OLED TVs</p>
            </Link>
            <Link to="/smartphones" className="productsName">
              <p>LargeScreen TVs</p>
            </Link>
            <Link to="/smartphones" className="productsName">
              <h4>Streaming Devices</h4>
            </Link>
          </div>
          <div>
            <Link to="/smartphones" className="productsName">
              <h4>Bluetooth & WiFi Speakers</h4>
            </Link>
            <Link to="/smartphones" className="productsName">
              <h4>Smart Speakers</h4>
            </Link>
            <Link to="/smartphones" className="productsName">
              <h4>TV Speakers & Soundbars</h4>
            </Link>
            <Link to="/smartphones" className="productsName">
              <h4>Party Speakers</h4>
            </Link>
            <Link to="/smartphones" className="productsName">
              <h4>Home Theatre Systems</h4>
            </Link>
            <Link to="/smartphones" className="productsName">
              <h4>Specialty Speakers</h4>
            </Link>
            <Link to="/smartphones" className="productsName">
              <h4>Audio,Speakers Stands</h4>
            </Link>
            <Link to="/smartphones" className="productsName">
              <h4>Gaming</h4>
            </Link>
            <Link to="/smartphones" className="productsName">
              <p>Gaming Consoles</p>
            </Link>
            <Link to="/smartphones" className="productsName">
              <p>Gaming Accessories</p>
            </Link>
            <Link to="/smartphones" className="productsName">
              <p>Gaming Titles</p>
            </Link>
            <Link to="/smartphones" className="productsName">
              <h4>Projectors</h4>
            </Link>
          </div>
          <div>
            <Link to="/smartphones" className="productsName">
              <h4>Reconnect Disney|Marvel Audio Collection</h4>
            </Link>
            <Link to="/smartphones" className="productsName">
              <h4>TV & Audio Accessories</h4>
            </Link>
            <Link to="/smartphones" className="productsName">
              <p>Virtual Reality Headsets</p>
            </Link>
            <Link to="/smartphones" className="productsName">
              <p>Stablizers & Surge Protectors</p>
            </Link>
            <Link to="/smartphones" className="productsName">
              <p>Power Strips & Extension Cards</p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

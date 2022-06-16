import Header from "./Components/Header";
import "./Styles.css";
import "@fortawesome/react-fontawesome";
import MainHeader from "./Components/MainHeader";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Televisions from "./Pages/Televisions";
import Product from "./Pages/Product";

function App() {
  return (
    <div>
      <Header />
      <MainHeader />
      <Navbar />
      <Routes>
        <Route default path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/television" element={<Televisions/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

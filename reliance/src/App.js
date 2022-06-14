import Header from "./Components/Header";
import "./Styles.css";
import "@fortawesome/react-fontawesome";
import MainHeader from "./Components/MainHeader";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header />
      <MainHeader />
      <Navbar />
    
      
      <Routes>
        <Route default path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

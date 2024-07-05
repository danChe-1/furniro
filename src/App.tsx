import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Product from "./pages/Product/Product";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyProfile from "./pages/MyProfile";
import Contact from "./pages/Contact";
import Liked from "./pages/Liked";
import Error from "./pages/Error";
function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className={showLogin ? "h-screen overflow-hidden" : ""}>
        <ToastContainer position="top-left" draggable />
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop/:productId/*" element={<Product />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/error" element={<Error />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/liked" element={<Liked />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;

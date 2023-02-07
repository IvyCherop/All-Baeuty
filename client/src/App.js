import Sidebar from "./components/Sidebar";
import "./App.css";
import Refund from "./pages/refund";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ShippingInfo from "./pages/shippingInfo";
import PaymentMethod from "./pages/paymentMethod";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleProduct from "./pages/singleProduct";
import Register from "./pages/register";
import Login from "./pages/login";
import PlaceOrder from "./pages/placeOrder";
import Cart from "./pages/cart";
import Contact from './pages/Contact';
import Error from "./pages/Error";
import Account from "./pages/Account";
import About from "./pages/About";
import AddItem from "./pages/AddItem";
import EditItem from "./pages/EditItem";
import SuccessOrder from "./pages/SuccessOrder";
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const openSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <Router>
      <Navbar openSidebar={openSidebar} />
      <Sidebar closeSidebar={closeSidebar} sidebarOpen={sidebarOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/find/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/refund" element={<Refund />} />

        <Route path='/contact'element={<Contact/>}/>
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
        <Route path="/shipping" element={<ShippingInfo />} />
        <Route path="/payment" element={<PaymentMethod />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/products/add" element={<AddItem />} />
        <Route path="/products/edit/:id" element={<EditItem />} />
        <Route path="/place-order/success" element={<SuccessOrder />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

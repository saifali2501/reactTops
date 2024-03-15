import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../UI/Component/Header/Header";
import Footer from "../UI/Component/Footer/Footer";
import MainPage from "../UI/Page/mainPage/MainPage";
// import Store from "../Redux/App/Store";
import { Provider } from "react-redux";
import Store from "../Redux/App/Store";
import Profile from "../UI/Page/pages/Page_1/common/profile/Profile";
import Deshbord from "../UI/Page/pages/Page_1/admin/deshbord/Deshbord";
import Product from "../UI/Page/pages/Page_1/admin/product/Product";
import Home from "../UI/Page/pages/Page_1/common/Home/Home";
import ProtectedRouter from "./ProtectedRouter";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Provider store={Store}>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/home" element={<Home/>}/>
            {/* ======common========= */}
            <Route path="profile" element={<ProtectedRouter Component={ <Profile/>}/>}/>
           
            {/* ============admin========= */}

            <Route path="/dashbord" element={<ProtectedRouter Component={<Deshbord/>}/>}/>
            <Route path="/product" element={<ProtectedRouter Component={<Product/>}/>}/>
          </Routes>
          <Footer />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

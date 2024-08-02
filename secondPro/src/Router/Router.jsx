import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../UI/Component/Header/Header";
import Footer from "../UI/Component/Footer/Footer";
// import MainPage from "../UI/Page/mainPage/MainPage";
// import Store from "../Redux/App/Store";
import { Provider } from "react-redux";

// import Profile from "../UI/Page/pages/Page_1/common/profile/Profile";
// import Deshbord from "../UI/Page/pages/Page_1/admin/deshbord/Deshbord";
// import Product from "../UI/Page/pages/Page_1/admin/product/Product";
// import Home from "../UI/Page/pages/Page_1/common/Home/Home";
import ProtectedRouter from "./ProtectedRouter";
// import Shope from "../UI/Page/pages/Page_1/common/Shope_All/Shope";
import Computer from "../UI/Page/pages/User/Computer/Computer";
import Shope from "../UI/Page/pages/User/ShopAll/Shope";
import Profile from "../UI/Page/common/profile/Profile";
import Deshbord from "../UI/Page/admin/deshbord/Deshbord";
import Product from "../UI/Page/admin/product/Product";
import Home from "../UI/Page/common/Home/Home";
import ProdactDetails from "../UI/Page/pages/User/ShopAll/ProdactDetails";
import About from "../UI/Page/common/About/About";
import store from "../Redux/App/store";
// import SinglePage from "../UI/Page/pages/User/ShopAll/ProdactDetails";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            {/* <Route path="/" element={<MainPage />} /> */}
            <Route path="/" element={<Home />} />
            {/* ======common========= */}
            <Route
              path="profile"
              element={<ProtectedRouter Component={<Profile />} />}
            />
               <Route
              path="about"
              element={<About/>}
            />
            {<Route path="/ProdctDetail/:id" element={<ProdactDetails />} />}

            {/* ==============user========== */}
            <Route path="/shope" element={<Shope />} />
            <Route path="/compueter" element={<Computer />} />
            {/* ============admin========= */}

            <Route
              path="/dashbord"
              element={<ProtectedRouter Component={<Deshbord />} />}
            />
            <Route
              path="/product"
              element={<ProtectedRouter Component={<Product />} />}
            />
          </Routes>
          <Footer />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

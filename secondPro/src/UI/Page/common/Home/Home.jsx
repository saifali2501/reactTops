import React from "react";
import PageSecond from "../../pages/page_2/PageSecond";
import Body from "./slider/Body";
import BestSeler from "../../pages/Page_3/BestSeler";
import Cetagary from "../../pages/page_4/Cetagary";
// import Body from "../pages/Page_1/Body";
// import PageSecond from "../pages/page_2/PageSecond";
// import Home from "../pages/Page_1/common/Home/Home";
// import Cetagary from "../pages/page_4/Cetagary";
// import BestSeler from "../pages/Page_3/BestSeler";
// import Shope from '../pages/Page_1/common/Shope_All/Shope'
// import HeaderTwo from '../../Component/Header/Header-2/HeaderTwo'
// import FreeShoping from '../pages/Page_3/FreeShoping'

export default function Home() {
  return (
    <div className="d">
      <Body />
      <PageSecond />
      <BestSeler />
      <Cetagary />
      
      {/* <Shope/> */}
      {/* <HeaderTwo/> */}
      {/* <Home/> */}
      {/* <FreeShoping/> */}
    </div>
  );
}

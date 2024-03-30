import React from 'react'
import Body from '../pages/Page_1/Body'
import PageSecond from '../pages/page_2/PageSecond'
import Home from '../pages/Page_1/common/Home/Home'
import Cetagary from '../pages/page_4/Cetagary'
import BestSeler from '../pages/Page_3/BestSeler'
// import Shope from '../pages/Page_1/common/Shope_All/Shope'
// import HeaderTwo from '../../Component/Header/Header-2/HeaderTwo'
// import FreeShoping from '../pages/Page_3/FreeShoping'

export default function MainPage() {
  return (
    <div className="d">
    <Body/>
    <PageSecond/>
    <Cetagary/>
    <BestSeler/>
    {/* <Shope/> */}
    {/* <HeaderTwo/> */}
    {/* <Home/> */}
    {/* <FreeShoping/> */}
    </div>
  )
}

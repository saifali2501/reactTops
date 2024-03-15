import React from 'react'
import Body from '../pages/Page_1/Body'
import PageSecond from '../pages/page_2/PageSecond'
import Home from '../pages/Page_1/common/Home/Home'
import FreeShoping from '../pages/Page_3/FreeShoping'

export default function MainPage() {
  return (
    <div className="d">
    <Body/>
    <PageSecond/>
    {/* <Home/> */}
    <FreeShoping/>
    </div>
  )
}

import React from 'react'

import CountTwo from './CountTwo'
import { Provider } from 'react-redux'
import Store from '../redux2/App/store'

export default function AppRedux2() {
  return (
    <div>
        <Provider store={Store}>

      <CountTwo/>
        </Provider>
    </div>
  )
}

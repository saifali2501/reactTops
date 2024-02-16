import React from 'react'
import Count from './Count'
import { Provider } from 'react-redux'
import Store from '../../redux/App/Store'

export default function AppRedux() {
  return (
    <div>
      <Provider store={Store}>

      <Count/>
      </Provider>
    </div>
  )
}

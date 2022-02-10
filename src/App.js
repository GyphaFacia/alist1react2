import './Global.scss';
import React from 'react'
import {useDispatch, useSelector, Provider} from 'react-redux'
import store from './Redux/Store'
// import * as theme from './Theme/Theme'

export default function App() {
    // useDispatch
    // useSelector
    // useState
    // useEffect
    
    return (
      <Provider store = {store}>
          <div className="App"
          >
          </div>
      </Provider>
    )
}















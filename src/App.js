import './Global.scss';
import React from 'react'
import {useDispatch, useSelector, Provider} from 'react-redux'
import store from './Redux/Store'
import * as theme from './Theme/Theme'
import Body from './Components/Layout/Body/Body'

export default function App() {
    // useDispatch
    // useSelector
    // useState
    // useEffect
    
    return (
      <Provider store = {store}>
          <div className="App"
          >
            <Body/>
          </div>
      </Provider>
    )
}















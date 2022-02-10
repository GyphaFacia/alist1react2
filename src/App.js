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

// /api/rates/getrates << token
// /api/rates/setrate << token, title, rate

// /api/quote/getquote << none

// /api/rates/addtolist << token, list, title
// /api/rates/getlistnames << token
// /api/rates/getlist << token, list
// /api/rates/getalllists << token

// /api/auth/register << login, password
// /api/auth/login << login, password

// /api/alist/search << search
// /api/alist/item << link













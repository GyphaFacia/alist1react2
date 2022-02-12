import './Global.scss';
import React from 'react'
import {useDispatch, useSelector, Provider} from 'react-redux'
import store from './Redux/Store'
import * as theme from './Theme/Theme'
import {Body} from './Components/Layout/Layout'
import {BrowserRouter} from 'react-router-dom'

export default function App() {
    return (
        <Provider store = {store}>
            <BrowserRouter>
                <div className="App"
                >
                    <Body/>
                </div>
            </BrowserRouter>
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
// /api/rates/removefromlist << token, list, title

// /api/auth/register << login, password
// /api/auth/login << login, password

// /api/alist/search << search
// /api/alist/item << link













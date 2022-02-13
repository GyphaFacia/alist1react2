import './Global.scss';
import React from 'react'
import {useDispatch, useSelector, Provider} from 'react-redux'
import store from './Redux/Store'
import * as theme from './Theme/Theme'
import {Body} from 'Layout'
// import {BrowserRouter} from 'react-router-dom'
import {HashRouter} from 'react-router-dom' // for gh-pages

function Test(){
    const pads = [16, 20, 24, 32, 48, 64]
    
    return (
        <section
        className="testWrapper"
        >
            {pads.map((pad, i)=>(
                <div className="test"
                style={{
                    fontSize: `${pad}px`,
                }}
                >
                    <div className="test2">
                        Lorem ipsum dolor sit amet
                    </div>
                </div>
            ))}
        </section>
    )
}

export default function App() {
    return (
        <Provider store = {store}>
            <HashRouter basename={process.env.PUBLIC_URL}>
                <div className="App"
                >
                <Body/>
                </div>
            </HashRouter>
        </Provider>
    )
}
// <Test/>

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













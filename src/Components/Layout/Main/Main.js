import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
//import * as reducer from '../Redux/SomeReducer'
import TitlesGrid from '../../TitlesGrid/TitlesGrid'

export default function Main(props){
    const blank = new Array(100).fill(0)
    
    // useDispatch
    // useSelector
    // useState
    // useEffect
    
    return (
        <main
        className={style.main}
        >
            <section
            className={style.mainContent}
            >
                <TitlesGrid/>
            </section>
        </main>
    )
}














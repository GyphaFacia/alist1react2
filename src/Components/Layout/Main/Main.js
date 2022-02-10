import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
//import * as reducer from '../Redux/SomeReducer'
import TitlesGrid from '../../TitlesGrid/TitlesGrid'
import * as rates from '../../../Redux/ratesReducer'

export default function Main(props){
    const dispatch = useDispatch()
    
    React.useEffect(()=>{
        dispatch(rates.fetchRates())
    }, [])
    
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















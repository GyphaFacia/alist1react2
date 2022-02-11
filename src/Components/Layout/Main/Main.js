import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import TitlesGrid from '../../TitlesGrid/TitlesGrid'

export default function Main(props){
    
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















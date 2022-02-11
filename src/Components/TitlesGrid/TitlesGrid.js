import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
//import * as reducer from '../Redux/SomeReducer'
import TitleCard from '../TitleCard/TitleCard'

export default function TitlesGrid(props){
    // useDispatch
    const { searchItems } = useSelector(store => store.search)
    // useState
    // useEffect
    
    function getTitles(){
        return props.titles ? props.titles : searchItems
    }
    
    return (
        <section
        className = {style.TitlesGrid}
        >
            {getTitles().map(
                (title, i) => 
                <TitleCard
                    key = {i}
                    title = {title}
                />
            )}
        </section>
    )
}















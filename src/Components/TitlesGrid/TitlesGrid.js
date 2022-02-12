import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import TitleCard from '../TitleCard/TitleCard'

export default function TitlesGrid(props){
    const { searchItems } = useSelector(store => store.search)
    
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















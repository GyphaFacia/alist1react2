import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
//import * as reducer from '../Redux/SomeReducer'

export default function TitleCard({title}){
    const [hovered, setHovered] = React.useState(0)
    // useDispatch
    // useSelector
    function cropTitle(){
        if(title.title.length > 28){
            return hovered ? title.title : `${title.title.slice(0, 25)}...`
        }
        return title.title
    }
    
    // Стальной алхимик: Священная
    return (
        <div
        className = {style.TitleCard}
        onMouseEnter = {()=>{setHovered(true)}}
        onMouseLeave = {()=>{setHovered(false)}}
        >   
            <aside
            className = {style.TitleCardRate}
            >
            </aside>
        
            <img
            className = {style.TitleCardThumb}
            src={title.thumb}
            alt={`Image for ${title.title}`}
            />
            
            <div
            className = {style.TitleCardTitle}
            >
                {cropTitle()}
            </div>
            
            <div
            className = {style.TitleCardExtra}
            >
                <span>Год:</span>
                <span>{title.year}</span>
            </div>
            
            <div
            className = {style.TitleCardExtra}
            >
                <span>Тип:</span>
                <span>{title.type}</span>
            </div>
        </div>
    )
}















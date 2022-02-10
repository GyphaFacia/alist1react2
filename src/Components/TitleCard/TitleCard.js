import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
//import * as reducer from '../Redux/SomeReducer'
import RateStars from '../RateStars/RateStars'

export default function TitleCard({title}){
    const [hovered, setHovered] = React.useState(true)
    function cropTitle(){
        if(title.title.length > 28){
            return hovered ? title.title : `${title.title.slice(0, 25)}...`
        }
        return title.title
    }
    
    return (
        <div
        className = {style.TitleCard}
        onMouseEnter = {()=>{setHovered(true)}}
        onMouseLeave = {()=>{setHovered(false)}}
        >        
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
            
            <RateStars
            className = {style.TitleCardExtra}
            titleLink = {title.url}
            />
            
            <div
            className = {style.TitleCardExtra}
            >
                <span>Год:</span>
                <div>{title.year}</div>
            </div>
            
            <div
            className = {style.TitleCardExtra}
            >
                <span>Тип:</span>
                <div>{title.type}</div>
            </div>
        </div>
    )
}















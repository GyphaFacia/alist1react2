import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
//import * as reducer from '../Redux/SomeReducer'

export default function TitleCard({title}){
    // useDispatch
    // useSelector
    // useState
    
    // title
    // year
    // type
    // thumb
    // url
    
    return (
        <div
        className = {style.TitleCard}
        >   
            <img
            className = {style.TitleCardThumb}
            src={title.thumb}
            alt={`Image for ${title.title}`}
            />
            
            <div
            className = {style.TitleCardTitle}
            >
                {title.title}
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















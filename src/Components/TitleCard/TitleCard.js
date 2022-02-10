import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
//import * as reducer from '../Redux/SomeReducer'
import RateStars from '../RateStars/RateStars'
import {BsFillPlusCircleFill} from 'react-icons/bs'

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
            
            <div className={style.TitleCardTitle}>
                {cropTitle()}
            </div>
            
            <RateStars
            className = {style.TitleCardExtra}
            titleLink = {title.url}
            />
            
            <button className = {`${style.TitleCardExtra} ${style.TitleCardAddToList}`}>
                <span className={style.TitleCardExtraLeft}>Добавить в список</span>
                <div className={style.TitleCardExtraRight}><BsFillPlusCircleFill/></div>
            </button>
            
            <div className = {style.TitleCardExtra}>
                <span className={style.TitleCardExtraLeft}>Год:</span>
                <div className={style.TitleCardExtraRight}>{title.year}</div>
            </div>
            
            <div className = {style.TitleCardExtra}>
                <span className={style.TitleCardExtraLeft}>Тип:</span>
                <div className={style.TitleCardExtraRight}>{title.type}</div>
            </div>
        </div>
    )
}















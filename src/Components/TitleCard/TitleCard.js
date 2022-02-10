import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
//import * as reducer from '../Redux/SomeReducer'
import {BsStar, BsStarHalf, BsStarFill} from 'react-icons/bs'

function Rate(props){
    const [starsRatio, setStarsRatio] = React.useState(0.5)
    
    function getClassName(){
        const classList = []
        if(props.className){
            classList.push(props.className)
        }
        classList.push(style.Rate)
        return classList.join(' ')
    }
    
    function handleMouseMove(e){
        const {left, width} = e.target.getBoundingClientRect()
        const {clientX} = e
        const ratio = (clientX - left) / width
        setStarsRatio(ratio)
    }
    
    function ratioToStars(ratio){
        ratio += 1/20
        const stars = []
        
        const fullStars = parseInt(ratio*5)
        let halfStars = (ratio*5 - parseInt(ratio*5))%1
        halfStars = halfStars >= 0.5 ? 1 : 0
        halfStars = fullStars >= 5 ? 0 : halfStars
        const emptyStars = 5 - fullStars - halfStars
        
        // console.log(ratio, fullStars, halfStars, emptyStars);
        
        for(let i = 0; i < fullStars; i++){stars.push(BsStarFill)}
        for(let i = 0; i < halfStars; i++){stars.push(BsStarHalf)}
        for(let i = 0; i < emptyStars; i++){stars.push(BsStar)}
        return stars
    }
    
    return (
        <section
        className = {getClassName()}
        onMouseMove = {handleMouseMove}
        >
            {ratioToStars(starsRatio).map(
                (Star, i) => 
                <Star key = {i}/>
            )}
        </section>
    )
}

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
            
            <Rate
            className = {style.TitleCardExtra}
            titleLink = {title.url}
            />
            
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















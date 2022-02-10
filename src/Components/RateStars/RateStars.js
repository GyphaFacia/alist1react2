import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import {BsStar, BsStarHalf, BsStarFill} from 'react-icons/bs'
import * as ratesReducer from '../../Redux/ratesReducer'

export default function RateStars(props){
    const dispatch = useDispatch()
    const [starsRatio, setStarsRatio] = React.useState(0)
    const [hasRate, setHasRate] = React.useState(false)
    const [isHovered, setIsHovered] = React.useState(false)
    const {rates} = useSelector(store => store.rates)
    
    React.useEffect(()=>{
        setStarsRatio(getRateFromStore()/10)
    }, [rates])
    
    function getClassName(){
        const classList = []
        if(props.className){
            classList.push(props.className)
        }
        classList.push(style.RateStarsWrapper)
        return classList.join(' ')
    }
    
    function handleMouseMove(e){
        const {left, width} = e.target.getBoundingClientRect()
        const {clientX} = e
        const ratio = (clientX - left) / width
        setStarsRatio(ratio)
    }
    
    function handleMouseLeave(){
        setIsHovered(false)
        setStarsRatio(getRateFromStore()/10)
    }
    
    function handleClick(){
        sendStarsToStore()
    }
    
    function getRateFromStore(){
        try {
            const res = parseInt(rates.filter(item => item.title.url == props.titleLink)[0].rate)
            setHasRate(true)
            return res
        } catch (e) {
            setHasRate(false)
            return 0
        }
        setHasRate(false)
        return 0
    }
    
    function sendStarsToStore(){
        const rate = ratioToStars(starsRatio, true)
        const title = {url: props.titleLink}
        dispatch(ratesReducer.fetchSetRate(title, rate))
    }
    
    function ratioToStars(ratio, returnOnlyRate = false){
        ratio += 1/15
        const stars = []
        
        const fullStars = parseInt(ratio*5)
        let halfStars = (ratio*5 - parseInt(ratio*5))%1
        halfStars = halfStars >= 0.5 ? 1 : 0
        halfStars = fullStars >= 5 ? 0 : halfStars
        const emptyStars = 5 - fullStars - halfStars
        
        if(returnOnlyRate){
            return fullStars*2 + halfStars
        }
        
        for(let i = 0; i < fullStars; i++){stars.push(BsStarFill)}
        for(let i = 0; i < halfStars; i++){stars.push(BsStarHalf)}
        for(let i = 0; i < emptyStars; i++){stars.push(BsStar)}
        return stars
    }
    
    function getRateStarsDigit(){
        let digit = ratioToStars(starsRatio, 1)
        if((digit + '').length < 2){
            digit = ` ${digit}` // &nbsp; here, do not touch!
        }
        return digit
    }
    
    return (
        <section
        className = {getClassName()}
        >
            <div
            className = {style.RateStars}
            onMouseEnter = {()=>{setIsHovered(true)}}
            onMouseMove = {handleMouseMove}
            onMouseLeave = {handleMouseLeave}
            onClick = {handleClick}
            >
                {ratioToStars(starsRatio).map(
                    (Star, i) => 
                    <Star key = {i}/>
                )}
            </div>
            
            <span
            className = {style.RateStarsDigit}
            >
                {isHovered && getRateStarsDigit()}
            </span>
        </section>
    )
}















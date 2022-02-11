import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
//import * as reducer from '../Redux/SomeReducer'
import RateStars from '../RateStars/RateStars'
import {BsFillPlusCircleFill} from 'react-icons/bs'
import ModalAddToList from '../Modals/ModalAddTolist/ModalAddToList'
import {MdOutlineExpandLess} from 'react-icons/md'
import * as searchReducer from '../../Redux/searchReducer'

function TitleThumb({title}){
    const dispatch = useDispatch()
    function handleThumbClick(){
        dispatch(searchReducer.fetchItemPage(title.url))
    }
    
    return (
        <img
        onClick = {handleThumbClick}
        className = {style.TitleCardThumb}
        src={title.thumb}
        alt={`Image for ${title.title}`}
        />
    )
}

function TitleYear({title}){
    return (
        <div className = {style.TitleCardExtra}>
            <span className={style.TitleCardExtraLeft}>Год:</span>
            <div className={style.TitleCardExtraRight}>{title.year}</div>
        </div>
    )
}

function TitleType({title}){
    return (
        <div className = {style.TitleCardExtra}>
            <span className={style.TitleCardExtraLeft}>Тип:</span>
            <div className={style.TitleCardExtraRight}>{title.type}</div>
        </div>
    )
}

function AddToListPortal({title}){
    const [showPortal, setShowPortal] = React.useState(false)
    return (
        <>
            <button className = {`${style.TitleCardExtra} ${style.TitleCardAddToList}`}
            onClick = {()=>{setShowPortal(true)}}
            >
                <span className={style.TitleCardExtraLeft}>
                    Добавить в список
                </span>
                <div className={style.TitleCardExtraRight}>
                    <BsFillPlusCircleFill/>
                </div>
            </button>
            
            {showPortal && 
            <ModalAddToList
            title={title}
            onClose = {()=>{setShowPortal(false)}}
            />
            }
        </>
    )
}

export default function TitleCard({title}){
    const [hovered, setHovered] = React.useState(false)
    const { searchInputValue, searchInputFocus } = useSelector(store => store.search)
    
    function cropTitle(maxlen = 25){
        if(title.title.length > maxlen){
            return hovered ? title.title : `${title.title.slice(0, maxlen)}...`
        }
        return title.title
    }
    
    function getClassName(){
        const classList = []
        classList.push(style.TitleCard)
        if(searchInputValue && searchInputFocus &&
            title.title.toLowerCase().includes(searchInputValue.toLowerCase())
        ){
            classList.push(style.TitleCardMatched)
        }
        return classList.join(' ')
    }
    
    return (
        <div
        className = {getClassName()}
        onMouseEnter = {()=>{setHovered(true)}}
        onMouseLeave = {()=>{setHovered(false)}}
        >        
            <TitleThumb title={title}/>
            
            <div className={style.TitleCardTitle}>
                {cropTitle()}
            </div>
            
            <RateStars
            className = {style.TitleCardExtra}
            titleLink = {title.url}
            />
            
            <AddToListPortal
            title={title}
            />
            
            <TitleYear title={title}/>
            <TitleType title={title}/>
            
            {!hovered && <MdOutlineExpandLess/>}
        </div>
    )
}















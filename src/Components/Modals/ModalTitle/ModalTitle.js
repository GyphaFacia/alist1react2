import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import ReactDom from 'react-dom'
import {searchReducer} from 'reducers'
import RateStars from '../../RateStars/RateStars'


function TitleDescr({title}){
    return (
        <div
        className = {style.TitleDescr}
        >
            <div
            className = {style.TitleDescrLabel}
            >
                Описание:
            </div>
            
            <div
            className = {style.TitleDescrContentWraper}
            >
                <div
                className = {style.TitleDescrContent}
                >
                    {title.descr}
                </div>
            </div>
        </div>
    )
}

function TitleTag({tag}){
    return (
        <span
        className = {style.TitleTag}
        >{tag}</span>
    )
}

function TitleTags({title}){
    return (
        <section
        className = {`${style.TitleTags} ${style.TitleInfo}`}
        >
            <TitleTag
            tag="Жанры:"
            />
            
            {title.tags.map((tag, i)=>(
                <TitleTag
                tag = {tag}
                key = {i}
                />
            ))}
        </section>
    )
}

function TitleThumb({title}){
    return (
        <div
        className = {style.TitleThumbWrapper}
        >
            <img
            className = {style.TitleThumb}
            src={title.thumb}
            alt={`Thumbnail for ${title.title}`}
            />
        </div>
    )
}

function TitleName({title}){
    return (
        <div
        className = {style.TitleName}
        >
            {title.title}
        </div>
    )
}

function TitleYear({title}){
    return (
        <div
        className = {`${style.TitleYear} ${style.TitleInfo}`}
        >
            <span
            className = {style.TitleInfoLabel}
            >Год:</span>
            <span
            className = {style.TitleInfoContent}
            >{title.year}</span>
        </div>
    )
}

function TitleType({title}){
    return (
        <div
        className = {`${style.TitleType} ${style.TitleInfo}`}
        >
            <span
            className = {style.TitleInfoLabel}
            >Тип:</span>
            
            <span
            className = {style.TitleInfoContent}
            >{title.type}</span>
        </div>
    )
}

function TitleInfo({title}){
    return (
        <article
        className = {style.Title}
        >
            <section
            className = {style.TitleLeft}
            >
                <TitleName title={title}/>
                <TitleThumb title={title}/>
                
                <div
                className = {style.TitleRates}
                >
                    <div
                    className = {style.TitleRatesLabel}
                    >Оценка пользователей:</div>
                    
                    <RateStars
                    fixedRate = {title.rating}
                    />
                </div>
                
                <div
                className = {`${style.TitleRates} ${style.TitleRatesYours}`}
                >
                    <div
                    className = {style.TitleRatesLabel}
                    >Ваша оценка:</div>
                    <RateStars
                    titleLink = {title.url}
                    />
                </div>
            </section>
            
            <section
            className = {style.TitleRight}
            >
                <TitleYear title={title}/>
                <TitleType title={title}/>
                <TitleTags title={title}/>
                <TitleDescr title={title}/>
            </section>
        </article>
    )
}

function CloseBtn(){
    const dispatch = useDispatch()
    
    return (
        <button
        onClick = {()=>{dispatch(searchReducer.setShowTitleModal(false))}}
        className = {style.CloseBtn}
        >
            &times;
        </button>
    )
}

export default function ModalTitle(){
    const dispatch = useDispatch()
    const { currentItem } = useSelector(store => store.search)
    
    return ReactDom.createPortal((
        <aside
        className = {style.ModalTitleWrapper}
        >
            <div
            className = {style.ModalTitle}
            >
                <CloseBtn/>
                <TitleInfo
                title={currentItem}
                />
            </div>
        </aside>
    ), document.querySelector('#portal'))
}















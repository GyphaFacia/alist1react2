import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
//import * as reducer from '../Redux/SomeReducer'
import Search from '../../Search/Search'
import Auth from '../../Auth/Auth'
import {BsStar} from 'react-icons/bs'
import * as searchReducer from '../../../Redux/searchReducer'

function IcoBtn(props){
    return(
        <div
        className = {style.headerIcoBtn}
        >
            {props.icon}
        </div>
    )
}

export default function Header(props){
    const {rates} = useSelector(store => store.rates)
    const dispatch = useDispatch()
    
    function ratesToSearchItems(){
        return rates.filter(
            item => item.rate && +item.rate && item.rate > 0
        ).map(
            item => item.title
        )
    }
    
    function handleRatedClick(){
        dispatch(searchReducer.setSearchInputValue('Rated'))
        dispatch(searchReducer.setSearchItems(ratesToSearchItems()))
    }
    
    return (
        <header
        className={style.header}
        >
            <section
            className={`${style.headerLeft} ${style.headerSection}`}
            >
                <Search/>
            </section>
            
            <section
            className={`${style.headerRight} ${style.headerSection}`}
            >
                <IcoBtn
                onClick = {handleRatedClick}
                icon = {<BsStar/>}
                />
                <Auth/>
            </section>
        </header>
    )
}















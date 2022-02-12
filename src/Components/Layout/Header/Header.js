import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import Search from '../../Search/Search'
import {BsStar, BsSearch, BsList, BsPerson} from 'react-icons/bs'
import * as searchReducer from '../../../Redux/searchReducer'
import * as authReducer from '../../../Redux/authReducer'
import {Link} from 'react-router-dom'

function IcoBtn(props){
    const Btn = (props)=>(<button {...props}/>)
    const LinkOrBtn = props.onClick ?  Btn : Link
    
    return(
        <LinkOrBtn
        to={props.link}
        className = {style.headerIcoBtnLink}
        onClick = {props.onClick}
        >
            <div
            className = {style.headerIcoBtn}
            >
                {props.icon}
                <div
                className = {style.headerIcoBtnTitle}
                >
                    {props.title}
                </div>
            </div>
        </LinkOrBtn>
    )
}

export default function Header(props){
    const { token } = useSelector(store => store.auth)
    const dispatch = useDispatch()
    
    function handleAuthBtnClick(){
        if(!!token){ dispatch(authReducer.logOut()) }
        else{ dispatch(authReducer.setShowSignInModal(true)) }
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
                title = {'Оценено'}
                link = {`rates`}
                icon = {<BsStar/>}
                />
                <IcoBtn
                title = {'Поиск'}
                link = {`search`}
                icon = {<BsSearch/>}
                />
                <IcoBtn
                title = {'Списки'}
                link = {`lists`}
                icon = {<BsList/>}
                />
                
                <IcoBtn
                title = {!token ? 'Войти' : 'Выйти'}
                onClick = {handleAuthBtnClick}
                icon = {<BsPerson/>}
                />
            </section>
        </header>
    )
}















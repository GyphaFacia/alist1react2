import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import {searchReducer, authReducer} from '../../../Redux/reducers'
import TitlesGrid from '../../TitlesGrid/TitlesGrid'
import {BsStar, BsSearch, BsList, BsPerson, BsHouse} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

import {UnDrawPic} from '../../Misc/Misc'
import pic from '../../../Images/unDraw/undraw_donut_love_kau1.svg'

const helpList = [
    {
        icon: <BsSearch/>,
        content: 'Перейти на страницу поиска',
        link: '/search',
    },
    {
        icon: <BsStar/>,
        content: 'Перейти к списку ваших оценок',
        link: '/rates',
    },
    {
        icon: <BsList/>,
        content: 'Перейти к вашим спискам',
        link: '/lists',
    },
    {
        icon: <BsHouse/>,
        content: 'Сейчас вы здесь',
        link: '',
    },
    {
        icon: <BsPerson/>,
        content: 'Создать/Войти/Выйти из аккаунта',
        link: '',
    }
]

export default function MainPage(){
    const { token } = useSelector(store => store.auth)
    const dispatch = useDispatch()
    
    function handleAuthBtnClick(){
        if(!!token){ dispatch(authReducer.logOut()) }
        else{ dispatch(authReducer.setShowSignInModal(true)) }
    } 
    
    return (
        <main
        className = {style.MainPage}
        >
        <section
        className = {style.Help}
        >
            {helpList.map((item, i)=>(
                <motion.div
                key = {i}
                initial = {{
                    x: '-100vw',
                }}                
                animate = {{
                    x: 0,
                }}
                transition = {{
                    delay: i/10,
                    duration: 0.33,
                }}
                >
                    <Link
                    className = {style.HelpItemLink}
                    to = {item.link}
                    onClick = {
                        i == helpList.length - 1? 
                        handleAuthBtnClick:
                        ()=>{}
                    }
                    >
                        <div
                        className = {style.HelpItem}
                        >
                            
                                <span
                                className = {style.HelpItemIcon}
                                >{item.icon}</span>
                                <p
                                className = {style.HelpItemContent}
                                >{item.content}</p>
                        </div>
                    </Link>
                </motion.div>
            ))}
            
        </section>
        
        <UnDrawPic
        src = {pic}
        />
        </main>        
    )
}







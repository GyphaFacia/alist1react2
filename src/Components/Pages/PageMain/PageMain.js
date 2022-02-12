import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import {searchReducer} from '../../../Redux/reducers'
import TitlesGrid from '../../TitlesGrid/TitlesGrid'
import {BsStar, BsSearch, BsList, BsPerson, BsHouse} from 'react-icons/bs'
import {Link} from 'react-router-dom'

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
        link: '/auth',
    }
]

export default function MainPage(){
    return (
        <ul
        className = {style.Help}
        >
            {helpList.map((item, i)=>(
                <Link
                className = {style.HelpItemLink}
                to = {item.link}
                key = {i}
                >
                <li
                className = {style.HelpItem}
                >
                    
                        <div
                        className = {style.HelpItemIcon}
                        >{item.icon}</div>
                        <p
                        className = {style.HelpItemContent}
                        >{item.content}</p>
                </li>
                </Link>
            ))}
        </ul>
    )
}







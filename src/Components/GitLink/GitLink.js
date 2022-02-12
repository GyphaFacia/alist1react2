import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import {BsGithub} from 'react-icons/bs'

export default function GitLink(props){
    return (
        <a
        href="https://github.com/GyphaFacia"
        target="_blank"
        className = {style.GitLink}
        >
            <BsGithub/>
        </a>
    )
}















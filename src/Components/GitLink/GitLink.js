import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
//import * as reducer from '../Redux/SomeReducer'
import {BsGithub} from 'react-icons/bs'

export default function GitLink(props){
    // useDispatch
    // useSelector
    // useState
    // useEffect
    
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















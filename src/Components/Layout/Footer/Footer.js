import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import style from './style.module.scss'
import {Copyright, GitLink} from '../../Misc/Misc'

export default function Footer(props){
    return (
        <footer
        className={style.footer}
        >
            <Copyright/>
            <GitLink/>
        </footer>
    )
}















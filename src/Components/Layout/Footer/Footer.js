import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import style from './style.module.scss'
import {Copyright, GitLink} from 'Misc'
import {motion} from 'framer-motion'

export default function Footer(props){
    return (
        <motion.footer
        initial={{
            y: '100%',
        }}
        animate={{
            y: 0,
        }}
        transition={{
            duration: 0.5,
        }}
        className={style.footer}
        >
            <Copyright/>
            <GitLink/>
        </motion.footer>
    )
}















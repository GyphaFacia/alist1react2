import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import pic from '../../../Images/unDraw/undraw_not_found_-60-pq.svg'
//import * as reducer from '../Redux/SomeReducer'
import {motion} from 'framer-motion'

export default function UnDrawPic(props){
    return (
        <motion.img
        initial={{
            x: '50vw',
            opacity: 0,
        }}
        animate={{
            x: 0,
            opacity: 1,
        }}
        transition={{
            duration: 0.33,
            delay: 0.5,
        }}
        
        className = {style.UnDrawPic}
        src = {
            props.src ?? pic
        }
        />
    )
}















import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import pic from '../../../Images/unDraw/undraw_not_found_-60-pq.svg'
//import * as reducer from '../Redux/SomeReducer'

export default function UnDrawPic(props){
    return (
        <img
        className = {style.UnDrawPic}
        src = {
            props.src ?? pic
        }
        />
    )
}















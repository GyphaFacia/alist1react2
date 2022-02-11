import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import * as hintsReducer from '../../Redux/hintsReducer'

export default function Hints(props){
    const dispatch = useDispatch()
    const { hints } = useSelector(store => store.hints)
    // useState
    React.useEffect(()=>{
        dispatch(hintsReducer.addHint('Test'))
    }, [])
    
    return (
        <div
        className = {style.Hints}
        onClick = {()=>{
            dispatch(hintsReducer.addHint(`Click ${Date.now()}`))
        }}
        >
            {hints.map((hint, i)=>(
                <div key={i}>{hint.msg}</div>
            ))}
        </div>
    )
}















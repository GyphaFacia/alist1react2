import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import * as hintsReducer from '../../Redux/hintsReducer'

function Hint({hint}){
    const dispatch = useDispatch()
    const [isFading, setIsFading] = React.useState(false)
    const [isShrinking, setIsShrinking] = React.useState(false)
    
    React.useEffect(()=>{
        setTimeout(()=>{
            setIsFading(true)
        }, hint.lifetime - 1000)
        setTimeout(()=>{
            setIsShrinking(true)
        }, hint.lifetime - 500)
    }, [])
    
    function handleHintCloseBtnClick(){
        dispatch(hintsReducer.intRemoveHint(hint.id))
    }
    
    function getClassName(){
        const classList = []
        classList.push(style.Hint)
        if(isFading){classList.push(style.HintFading)}
        if(isShrinking){classList.push(style.HintShrinking)}
        return classList.join(' ')
    }
    
    return (
        <div
        className = {getClassName()}
        >
            <span
            className = {style.HintMsg}
            >{hint.msg}</span>
            
            <div
            className = {style.HintCloseBtnWrapper}
            >
                <button
                className = {style.HintCloseBtn}
                onClick = {handleHintCloseBtnClick}
                >&times;</button>
            </div>
        </div>
    )
}

export default function Hints(props){
    const { hints } = useSelector(store => store.hints)
    
    return (
        <div
        className = {style.Hints}
        >
            {hints.map((hint, i)=>(
                <Hint
                key = {hint.id}
                hint = {hint}
                />
            ))}
        </div>
    )
}















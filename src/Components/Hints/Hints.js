import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import {hintsReducer} from 'reducers'

import {motion, AnimatePresence} from 'framer-motion'

function Hint({hint}){
    const dispatch = useDispatch()
    
    function handleHintCloseBtnClick(){
        dispatch(hintsReducer.intRemoveHint(hint.id))
    }
    
    function getClassName(){
        const classList = []
        classList.push(style.Hint)
        switch (hint.type) {
            case 'error':
                classList.push(style.HintError)
                break;
        }
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
            <AnimatePresence>
                {hints.map((hint, i)=>(
                    <motion.div
                    key={hint.id}
                    exit = {{ clipPath: 'inset(0 0 0 100%)', }}
                    initial = {{ clipPath: 'inset(0 0 0 100%)', }}
                    animate = {{ clipPath: 'inset(0 0 0 0%)', }}
                    transition = {{ duration: 0.255, }}
                    >
                        <Hint
                        key = {hint.id}
                        hint = {hint}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}















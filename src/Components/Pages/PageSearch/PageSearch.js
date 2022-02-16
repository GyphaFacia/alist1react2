import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import {searchReducer} from 'reducers'
import TitlesGrid from '../../TitlesGrid/TitlesGrid'
import {useParams} from 'react-router-dom'

import {motion} from 'framer-motion'
import {Motions} from 'Theme'
import {UnDrawPic} from 'Misc'

export default function SearchPage(){
    const dispatch = useDispatch()
    const {req} = useParams()
    React.useEffect(()=>{
        if(req){
            dispatch(searchReducer.setSearchInputValue(''))
            dispatch(searchReducer.fetchSearchPage(req))
        }
    }, [req])
    
    function getHeadingTitle(){
        if(req){
            return `Результаты поиска «${req}» :`
        }
        return 'Введите поисковый запрос в поле выше'
    }
    
    return (
        <motion.main
        className = {style.PageSearch}
        exit = {Motions.routeExit}
        initial = {Motions.routeInitial}
        animate = {Motions.routeAnimate}
        transition = {{duration: 0.33}}
        >
            <motion.h3
            style={{width: '100%'}}
            variants = {Motions}
            initial='glowOutText'
            animate='glowInText'
            transition={{
                delay: 0.5,
                duration: 0.25,
                repeatType: 'mirror',
                repeat: 1,
                repeatDelay: 0.1,
            }}
            >{getHeadingTitle()}</motion.h3>
            
            {req && <TitlesGrid/>}
            
            {!req && <UnDrawPic/>}
        </motion.main>
    )
}









import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import {searchReducer} from '../../../Redux/reducers'
import TitlesGrid from '../../TitlesGrid/TitlesGrid'
import {useParams} from 'react-router-dom'

import {motion} from 'framer-motion'
import {Motions} from '../../../Theme/Theme'
import {UnDrawPic} from '../../Misc/Misc'

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
        <main
        className = {style.PageSearch}
        >
            <motion.h1
            style={{width: '100%'}}
            variants = {Motions}
            initial='glowOutText'
            animate='glowInText'
            transition={{
                delay: 0.25,
                duration: 0.25,
                repeatType: 'mirror',
                repeat: 1,
                repeatDelay: 0.1,
            }}
            >{getHeadingTitle()}</motion.h1>
            
            {req && <TitlesGrid/>}
            
            {!req && <UnDrawPic/>}
        </main>
    )
}









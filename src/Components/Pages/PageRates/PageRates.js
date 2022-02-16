import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import {searchReducer} from 'reducers'
import TitlesGrid from '../../TitlesGrid/TitlesGrid'

import {motion} from 'framer-motion'
import {Motions} from 'Theme'
import {UnDrawPic} from 'Misc'

export default function RatesPage(){
    const { rates } = useSelector(store => store.rates)
    function ratesToSearchItems(){
        return rates.filter(
            item => item.rate && +item.rate && item.rate > 0
        ).map(
            item => item.title
        )
    }
    
    return (
        <motion.main
        className = {style.RatesPage}
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
            >Ваши оцененные тайтлы:</motion.h3>
            <TitlesGrid
            titles = {ratesToSearchItems()}
            />
            
            {!ratesToSearchItems().length && 
                <UnDrawPic/>
            }
        </motion.main>
    )
}
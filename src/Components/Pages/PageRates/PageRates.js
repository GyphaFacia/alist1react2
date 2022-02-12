import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import {searchReducer} from '../../../Redux/reducers'
import TitlesGrid from '../../TitlesGrid/TitlesGrid'

import {motion} from 'framer-motion'
import {Motions} from '../../../Theme/Theme'

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
        <>
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
            >Ваши оцененные тайтлы:</motion.h1>
            <TitlesGrid
            titles = {ratesToSearchItems()}
            />
        </>
    )
}
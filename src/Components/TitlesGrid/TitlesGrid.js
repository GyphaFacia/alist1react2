import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import TitleCard from '../TitleCard/TitleCard'
import {motion} from 'framer-motion'

export default function TitlesGrid(props){
    const { searchItems } = useSelector(store => store.search)
    
    function getTitles(){
        return props.titles ? props.titles : searchItems
    }
    
    return (
        <section
        className = {style.TitlesGrid}
        >
            {getTitles().map(
                (title, i) =>
                <motion.span
                    initial={{
                        y: '100vh',
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{
                        delay: i/15,
                        duration: 0.33,
                    }}
                    key = {i + Date.now() + title.title}
                >
                    <TitleCard
                        title = {title}
                    />
                </motion.span>
            )}
        </section>
    )
}















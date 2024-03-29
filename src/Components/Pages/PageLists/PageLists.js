import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import {searchReducer} from 'reducers'
import TitlesGrid from '../../TitlesGrid/TitlesGrid'

import {motion} from 'framer-motion'
import {Motions} from 'Theme'
import {UnDrawPic} from 'Misc'

export default function PageLists(){
    const [activeList, setActiveList] = React.useState(0)
    const {lists} = useSelector(store => store.lists)
    const nonemptylists = () => lists.filter(list => list.content && list.content.length)
    const listnames = () => nonemptylists().map(list => list.list)
    
    const listClassName = (i) => (i==activeList? 
        `${style.PageListsListName} ${style.PageListsListNameActive}`
        :
        style.PageListsListName
    )
    
    const getTitlesOfActiveList = ()=>{
        try {
            const activeListName = listnames()[activeList]
            return lists.filter(
                list => list.list == activeListName
            ).pop().content
        } catch (e) {}
        return []
    }
    
    return (
        <motion.main
        className = {style.PageLists}
        exit = {Motions.routeExit}
        initial = {Motions.routeInitial}
        animate = {Motions.routeAnimate}
        transition = {{duration: 0.33}}
        >
        <section
        className = {style.PageListsListNames}
        >
            {listnames().map((listname, i)=>
                <div key={i}
                className = {listClassName(i)}
                onClick = {()=>setActiveList(i)}
                >{listname}</div>
            )}
            
            {!listnames().length &&
                <>
                <motion.h3
                initial={Motions.glowOutText}
                animate={Motions.glowInText}
                transition={{
                    delay: 0.5,
                    duration: 0.25,
                    repeatType: 'mirror',
                    repeat: 1,
                    repeatDelay: 0.1,
                }}
                >Вы не создали ни одного списка</motion.h3>
                <UnDrawPic/>
                </>
            }
        </section>
        <TitlesGrid
        titles = {getTitlesOfActiveList()}
        />
        </motion.main>
    )
}
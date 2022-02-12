import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import {searchReducer} from '../../../Redux/reducers'
import TitlesGrid from '../../TitlesGrid/TitlesGrid'

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
        <>
        <section
        className = {style.PageListsListNames}
        >
            {listnames().map((listname, i)=>
                <div key={i}
                className = {listClassName(i)}
                onClick = {()=>setActiveList(i)}
                >{listname}</div>
            )}
            {!listnames().length && <h1>Вы не создали ни одного списка</h1>}
        </section>
        <TitlesGrid
        titles = {getTitlesOfActiveList()}
        />
        </>
    )
}
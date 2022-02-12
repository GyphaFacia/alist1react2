import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import TitlesGrid from '../../TitlesGrid/TitlesGrid'
import {Routes, Route, useRoutes, useParams} from 'react-router-dom'
import * as searchReducer from '../../../Redux/searchReducer'

const MainPage = ()=>{        
    return (
        <div>MainPage</div>
    )
}

const RatesPage = ()=>{
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
            <h1 style={{width: '100%'}}>Ваши оцененные тайтлы:</h1>
            <TitlesGrid
            titles = {ratesToSearchItems()}
            />
        </>
    )
}

const SearchPage = ()=>{
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
        <>
        <h1 style={{width: '100%'}}>{getHeadingTitle()}</h1>
        {req && <TitlesGrid/>}
        </>
    )
}

const ListsPage = ()=>{
    const [activeList, setActiveList] = React.useState(0)
    const {lists} = useSelector(store => store.lists)
    const nonemptylists = () => lists.filter(list => list.content && list.content.length)
    const listnames = () => nonemptylists().map(list => list.list)
    
    const listClassName = (i) => (i==activeList? 
        `${style.ListsPageListName} ${style.ListsPageListNameActive}`
        :
        style.ListsPageListName
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
        className = {style.ListsPageListNames}
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

export default function Main(props){
    const routes = useRoutes([
        {
            path: '',
            element: <MainPage/>,
        },
        {
            path: 'search/:req',
            element: <SearchPage/>,
        },
        {
            path: 'search/',
            element: <SearchPage/>,
        },
        {
            path: 'rates/',
            element: <RatesPage/>,
        },
        {
            path: 'lists/',
            element: <ListsPage/>,
        },
    ])    
    
    return (
        <main
        className={style.main}
        >
            <section
            className={style.mainContent}
            >
                {routes}
            </section>
        </main>
    )
}















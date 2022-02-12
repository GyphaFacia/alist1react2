import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import {searchReducer} from '../../../Redux/reducers'
import TitlesGrid from '../../TitlesGrid/TitlesGrid'
import {useParams} from 'react-router-dom'

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
        <>
        <h1 style={{width: '100%'}}>{getHeadingTitle()}</h1>
        {req && <TitlesGrid/>}
        </>
    )
}
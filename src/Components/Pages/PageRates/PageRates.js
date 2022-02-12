import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import {searchReducer} from '../../../Redux/reducers'
import TitlesGrid from '../../TitlesGrid/TitlesGrid'

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
            <h1 style={{width: '100%'}}>Ваши оцененные тайтлы:</h1>
            <TitlesGrid
            titles = {ratesToSearchItems()}
            />
        </>
    )
}
import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import * as search from '../../Redux/searchReducer'
import {BsSearch} from 'react-icons/bs'
import {useNavigate} from 'react-router-dom' 

export default function Search(props){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { searchInputValue } = useSelector(store => store.search)
    
    function setSearchInputValue(val){
        dispatch(search.setSearchInputValue(val))
    }
    
    function handleSearchInput(e){
        setSearchInputValue(e.target.value)
    }
    
    function handleSearchEnter(e){
        if(e.code == 'Enter' && searchInputValue){
            navigateToSearch()
        }
    }
    
    function navigateToSearch(){
        navigate(`/search/${searchInputValue}`, {replace: true,})
    }
    
    function handleSearchBlur(){
        dispatch(search.setSearchInputFocus(false))
    }
    
    function handleSearchFocus(){
        dispatch(search.setSearchInputFocus(true))
    }
    
    return (
        <div
        className = {style.Search}
        >
            <input
            type="text"
            className = {style.SearchInput}
            spellCheck = {false}
            placeholder="Поиск"
            value = {searchInputValue}
            onInput = {handleSearchInput}
            onKeyUp = {handleSearchEnter}
            onBlur = {handleSearchBlur}
            onFocus = {handleSearchFocus}
            />
            
            <button
            className = {style.SearchGoButton}
            onClick = {navigateToSearch}
            >
                <BsSearch/>
            </button>
        </div>
    )
}















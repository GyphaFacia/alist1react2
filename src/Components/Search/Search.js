import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import * as search from '../../Redux/searchReducer'
import {BsSearch} from 'react-icons/bs'

export default function Search(props){
    const dispatch = useDispatch()
    const { searchInputValue } = useSelector(store => store.search)
    
    function setSearchInputValue(val){
        dispatch(search.setSearchInputValue(val))
    }
    
    function handleSearchInput(e){
        setSearchInputValue(e.target.value)
    }
    
    function handleSearchEnter(e){
        if(e.code == 'Enter' && searchInputValue){
            searchTitle()
        }
    }
    
    function searchTitle(){
        console.log(`Search for ${searchInputValue}`);
        setSearchInputValue('')
        dispatch(search.fetchSearchPage(searchInputValue))
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
            placeholder="Search for title"
            value = {searchInputValue}
            onInput = {handleSearchInput}
            onKeyUp = {handleSearchEnter}
            onBlur = {handleSearchBlur}
            onFocus = {handleSearchFocus}
            />
            
            <button
            className = {style.SearchGoButton}
            onClick = {searchTitle}
            >
                <BsSearch/>
            </button>
        </div>
    )
}















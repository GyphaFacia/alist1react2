import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import * as search from '../../Redux/searchReducer'
import {BsSearch} from 'react-icons/bs'

export default function Search(props){
    const [searchInputValue, setSearchInputValue] = React.useState('')
    const dispatch = useDispatch()
    // useSelector
    React.useEffect(()=>{
        // dispatch(search.fetchSearchPage('цельно'))
    }, [])
    
    function handleSearchInput(e){
        setSearchInputValue(e.target.value)
    }
    
    function handleSearchEnter(e){
        if(e.code == 'Enter'){
            searchTitle()
        }
    }
    
    function searchTitle(){
        console.log(`Search for ${searchInputValue}`);
        setSearchInputValue('')
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















import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom' 
import style from './style.module.scss'

import {searchReducer} from '../../Redux/reducers'
import {BsSearch} from 'react-icons/bs'
import {motion} from 'framer-motion'
import {Motions} from '../../Theme/Theme'

export default function Search(props){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { searchInputValue } = useSelector(store => store.search)
    
    function setSearchInputValue(val){
        dispatch(searchReducer.setSearchInputValue(val))
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
        dispatch(searchReducer.setSearchInputFocus(false))
    }
    
    function handleSearchFocus(){
        dispatch(searchReducer.setSearchInputFocus(true))
    }
    
    return (
        <div
        className = {style.Search}
        >
            <motion.input            
            type="text"
            className = {style.SearchInput}
            spellCheck = {false}
            placeholder="Поиск"
            value = {searchInputValue}
            onInput = {handleSearchInput}
            onKeyUp = {handleSearchEnter}
            onBlur = {handleSearchBlur}
            onFocus = {handleSearchFocus}
            
            variants = {Motions}
            initial='glowOut'
            animate='glowIn'
            transition={{
                delay: 0.8,
                duration: 0.1,
                repeatType: 'mirror',
                repeat: 1,
                repeatDelay: 0.1,
            }}
            />
            
            <motion.button
            className = {style.SearchGoButton}
            onClick = {navigateToSearch}
            
            variants = {Motions}
            initial='glowOut'
            animate='glowIn'
            transition={{
                delay: 0.9,
                duration: 0.1,
                repeatType: 'mirror',
                repeat: 1,
                repeatDelay: 0.1,
            }}
            >
                <BsSearch/>
            </motion.button>
        </div>
    )
}















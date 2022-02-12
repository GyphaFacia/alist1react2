import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import style from './style.module.scss'
import Hints from '../../Hints/Hints'
import {ModalLogin, ModalTitle} from '../../Modals/Modals'

import * as rates from '../../../Redux/ratesReducer'
import * as lists from '../../../Redux/listsReducer'
import * as auth from '../../../Redux/authReducer'
import {hintsReducer} from '../../../Redux/reducers'


export default function Body(props){
    const { showSignInModal } = useSelector(store => store.auth)
    const { showTitleModal } = useSelector(store => store.search)
    const {token} = useSelector(store => store.auth)
    const dispatch = useDispatch()
    
    React.useEffect(()=>{
        if(token){
            dispatch(rates.fetchRates())
            dispatch(lists.fetchGetAllLists())
        }
    }, [token])
    
    return (
        <div
        className={style.body}
        >
            {showSignInModal && <ModalLogin/>}
            {showTitleModal && <ModalTitle/>}
            <Hints/>
            
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}















import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
//import * as reducer from '../Redux/SomeReducer'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import style from './style.module.scss'
import Hints from '../../Hints/Hints'
import ModalLogin from '../../Modals/ModalLogin/ModalLogin'

import * as rates from '../../../Redux/ratesReducer'
import * as lists from '../../../Redux/listsReducer'
import * as auth from '../../../Redux/authReducer'
import * as hintsReducer from '../../../Redux/hintsReducer'


export default function Body(props){
    const { showSignInModal } = useSelector(store => store.auth)
    const {token} = useSelector(store => store.auth)
    const dispatch = useDispatch()
    
    React.useEffect(()=>{
        // dispatch(auth.logOut())
    }, [])
    
    React.useEffect(()=>{
        if(token){
            dispatch(rates.fetchRates())
            dispatch(lists.fetchGetAllLists())
        }
    }, [token])
    
    return (
        <div
        className={style.body}
        onContextMenu = {(e)=>{
            e.preventDefault()
            dispatch(hintsReducer.addHint(`Click ${Date.now()}`))
        }}
        >
            {showSignInModal &&
                <ModalLogin onClose={()=>{dispatch(auth.setShowSignInModal(false))}}/>
            }
            <Hints/>
            
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}















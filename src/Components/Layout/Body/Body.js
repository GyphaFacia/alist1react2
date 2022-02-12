import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import style from './style.module.scss'

import Hints from '../../Hints/Hints'
import {Header, Footer, Main} from '../Layout.js'
import {ModalLogin, ModalTitle} from '../../Modals/Modals'
import {ratesReducer, listsReducer} from '../../../Redux/reducers'

export default function Body(props){
    const { showSignInModal } = useSelector(store => store.auth)
    const { showTitleModal } = useSelector(store => store.search)
    const {token} = useSelector(store => store.auth)
    const dispatch = useDispatch()
    
    React.useEffect(()=>{
        if(token){
            dispatch(ratesReducer.fetchRates())
            dispatch(listsReducer.fetchGetAllLists())
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















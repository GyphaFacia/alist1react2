import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import * as authReducer from '../../Redux/authReducer'

export default function Auth(props){
    const dispatch = useDispatch()
    const { token } = useSelector(store => store.auth)
    // useState
    // useEffect
    
    function handleAuthBtnClick(){
        if(!!token){
            dispatch(authReducer.logOut())
        }
        else{
            dispatch(authReducer.setShowSignInModal(true))
        }
    }    
    
    return (
        <div
        className = {style.Auth}
        style={{}}
        >
            <button
            className = {style.AuthBtn}
            onClick = {handleAuthBtnClick}
            >{!!!token ? 'Войти в аккаунт' : 'Выйти из аккаунта'}</button>
        </div>
    )
}















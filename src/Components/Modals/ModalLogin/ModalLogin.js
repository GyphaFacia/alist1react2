import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import ReactDom from 'react-dom'
import * as auth from '../../../Redux/authReducer'

export default function ModalLogin({onClose}){
    const [loginInput, setLoginInput] = React.useState('')
    const [passwordInput, setPasswordInput] = React.useState('')
    const dispatch = useDispatch()
    const { token } = useSelector(store => store.auth)
    
    React.useEffect(()=>{
        if(token && !'undefined null'.split(' ').includes(token)){
            onClose()
        }
    }, [token])
    
    function handleSignIn(){
        dispatch(auth.fetchLogin(loginInput.trim(), passwordInput.trim()))
    }
    
    function handleSignUp(){
        dispatch(auth.fetchRegister(loginInput.trim(), passwordInput.trim()))
    }
    
    return ReactDom.createPortal((
        <aside
        className = {style.ModalLoginWrapper}
        >
            <div
            className = {style.ModalLogin}
            >
                <button
                onClick = {onClose}
                className = {style.CloseBtn}
                >
                    &times;
                </button>
            
                <span>
                    <input
                    type="text"
                    placeholder = 'Login'
                    className = {style.ModalLoginInput}
                    value = {loginInput}
                    onChange = {(e)=>{setLoginInput(e.target.value)}}
                    />
                </span>
                <span>
                    <input
                    type="text"
                    placeholder = 'Password'
                    className = {style.ModalLoginInput}
                    value = {passwordInput}
                    onChange = {(e)=>{setPasswordInput(e.target.value)}}
                    />
                </span>
                
                <div
                className = {style.ModalLoginButtons}
                >
                    <button
                    className = {style.ModalLoginButtonsButton}
                    onClick = {handleSignIn}
                    >Sign In</button>
                    
                    <button
                    className = {style.ModalLoginButtonsButton}
                    onClick = {handleSignUp}
                    >Sign Up</button>
                </div>
                
            </div>
        </aside>
    ), document.querySelector('#portal'))
}















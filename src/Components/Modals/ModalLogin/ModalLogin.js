import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import ReactDom from 'react-dom'
import {authReducer, hintsReducer} from 'reducers'
import CheckList from '../../CheckList/CheckList'

import {motion} from 'framer-motion'

const chr = (i) => String.fromCharCode(i)
const ord = (c) => c.charCodeAt(0)
const chrAlphabet = (a, b)=>{
    let alpha = ''
    for(let i = a; i <= b; i++){alpha += chr(i)}
    return alpha
}
const lowerCaseAlphabet = chrAlphabet(97, 122)
const upperCaseAlphabet = chrAlphabet(65, 90)
const digitsAlphabet = chrAlphabet(48, 57)

const wrapChecker = (checker)=>{
    return checker.map(
        item => [
            item[0],
            (val) => {
                try {
                    return item[1](val)
                } catch (e) {
                    return false
                }
                return false
            }
        ]
    )
}

const checkLogin = (val)=>{
    const allowedChars = lowerCaseAlphabet+upperCaseAlphabet+digitsAlphabet
    
    return wrapChecker([
        [
        'Логин длиннее 6 символов',
        (val) => (val && typeof(val)=='string' && val.length >= 6)
        ],[
        'Логин состоит из цифр и букв англ. алфавита',
        (val) => val && val.length == [...val].filter(c => allowedChars.includes(c)).length
        ]
    ])
}

const checkPassword = (val)=>{
    const minLength = 5
    
    return wrapChecker([
        [
        `Пароль длиннее ${minLength} символов`,
        (val) => (val && typeof(val)=='string' && val.length >= minLength)
        ],[
        'В пароле есть цифры',
        (val) => val && [...val].filter(c => digitsAlphabet.includes(c)).length
        ],[
        'В пароле есть буквы английского алфавита',
        (val) => val && ([...val].filter(c => upperCaseAlphabet.includes(c)).length || [...val].filter(c => lowerCaseAlphabet.includes(c)).length)
        ]
    ])
}

function CloseBtn(){
    const dispatch = useDispatch()
    
    return (
        <button
        onClick = {()=>{dispatch(authReducer.setShowSignInModal(false))}}
        className = {style.CloseBtn}
        >
            &times;
        </button>
    )
}

export default function ModalLogin(){
    const [loginInput, setLoginInput] = React.useState('')
    const [passwordInput, setPasswordInput] = React.useState('')
    const dispatch = useDispatch()
    const { token } = useSelector(store => store.auth)
    
    React.useEffect(()=>{
        if(token && !'undefined null'.split(' ').includes(token)){
            dispatch(authReducer.setShowSignInModal(false))
        }
    }, [token])
    
    function validInputs(testing = false){
        if(testing){ return true }
        
        for(let test of checkLogin(loginInput)){
            if(!test[1](loginInput)){
                return false
            }
        }
        for(let test of checkPassword(passwordInput)){
            if(!test[1](passwordInput)){
                return false
            }
        }
        return true
    }
    
    function hintValidation(){
        [
            ...checkLogin(loginInput).filter(
                test => !test[1](loginInput)
            ).map(
                test => test[0]
            ),
            ...checkPassword(passwordInput).filter(
                test => !test[1](passwordInput)
            ).map(
                test => test[0]
            ),
        ].forEach((error, i) => {
            dispatch(hintsReducer.addHint(error, 0, 'error'))
        })
        
    }
    
    function handleSignIn(){
        if(validInputs()){
            dispatch(authReducer.fetchLogin(loginInput.trim(), passwordInput.trim()))
        }else{
            hintValidation()
        }
    }
    
    function handleSignUp(){
        if(validInputs()){
            dispatch(authReducer.fetchRegister(loginInput.trim(), passwordInput.trim()))
        }else{
            hintValidation()
        }
    }
    
    return ReactDom.createPortal((
        <aside
        className = {style.ModalLoginWrapper}
        >
            <motion.div
            className = {style.ModalLogin}
            initial={{
                y: '100vh',
            }}
            animate={{
                y: 0,
            }}
            >
                <CloseBtn/>
            
                <span>
                    <input
                    type="text"
                    placeholder = 'Логин'
                    className = {style.ModalLoginInput}
                    value = {loginInput}
                    onChange = {(e)=>{setLoginInput(e.target.value)}}
                    />
                </span>
                <span>
                    <input
                    type="text"
                    placeholder = 'Пароль'
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
                    >Войти</button>
                    
                    <button
                    className = {style.ModalLoginButtonsButton}
                    onClick = {handleSignUp}
                    >Создать аккаунт</button>
                </div>
                
                <CheckList
                value = {loginInput}
                checks = {checkLogin}
                />
                <CheckList
                value = {passwordInput}
                checks = {checkPassword}
                />
            </motion.div>
        </aside>
    ), document.querySelector('#portal'))
}















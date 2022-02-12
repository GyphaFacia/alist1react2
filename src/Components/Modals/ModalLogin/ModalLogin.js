import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import ReactDom from 'react-dom'
import * as auth from '../../../Redux/authReducer'
import {BsShieldCheck, BsShieldExclamation} from 'react-icons/bs'

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

function InputCheckList({value, checks}){
    function mapChecksToDom(){
        const dom = []
        checks(value).forEach((test, i) => {
            dom.push(
                <div
                className = {style.InputCheckListTest}
                key = {i}
                >
                    <span
                    className = {style.InputCheckListTestText}
                    >
                        {test[0]}
                    </span>
                    <span
                    className = {style.InputCheckListTestResult}
                    >
                        {test[1](value) ?
                        <BsShieldCheck
                        style={{fill: 'lime'}}
                        />
                        :
                        <BsShieldExclamation
                        style={{fill: 'red'}}
                        />
                        }
                    </span>
                </div>
            )
        })
        return dom
    }
    
    return (
        <section
        className = {style.InputCheckList}
        >
            {mapChecksToDom()}
        </section>
    )
}

function CloseBtn(){
    const dispatch = useDispatch()
    
    return (
        <button
        onClick = {()=>{dispatch(auth.setShowSignInModal(false))}}
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
            dispatch(auth.setShowSignInModal(false))
        }
    }, [token])
    
    function validInputs(testing = true){
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
    
    function handleSignIn(){
        if(validInputs()){
            dispatch(auth.fetchLogin(loginInput.trim(), passwordInput.trim()))
        }
    }
    
    function handleSignUp(){
        if(validInputs()){
            dispatch(auth.fetchRegister(loginInput.trim(), passwordInput.trim()))
        }
    }
    
    return ReactDom.createPortal((
        <aside
        className = {style.ModalLoginWrapper}
        >
            <div
            className = {style.ModalLogin}
            >            
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
                
                <InputCheckList
                value = {loginInput}
                checks = {checkLogin}
                />
                <InputCheckList
                value = {passwordInput}
                checks = {checkPassword}
                />
            </div>
        </aside>
    ), document.querySelector('#portal'))
}















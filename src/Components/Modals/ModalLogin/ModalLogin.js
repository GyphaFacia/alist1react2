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
    const allowedChars = lowerCaseAlphabet+upperCaseAlphabet+digitsAlphabet
    
    return wrapChecker([
        [
        'Пароль длиннее 6 символов',
        (val) => (val && typeof(val)=='string' && val.length >= 6)
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















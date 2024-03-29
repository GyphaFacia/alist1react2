import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import Search from '../../Search/Search'
import {
    BsStar, BsSearch, BsList, BsPerson, BsHouse, BsSun, BsMoonStars
} from 'react-icons/bs'
import {searchReducer, authReducer} from 'reducers'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {Motions, setTheme} from 'Theme'

function IcoBtn(props){
    const Btn = (props)=>(<button {...props}/>)
    const LinkOrBtn = props.onClick ?  Btn : Link
    
    return(
        <LinkOrBtn
        to={props.link}
        className = {style.headerIcoBtnLink}
        onClick = {props.onClick}
        >
            <div
            className = {style.headerIcoBtn}
            >
                {props.icon}
                <div
                className = {style.headerIcoBtnTitle}
                >
                    {props.title}
                </div>
            </div>
        </LinkOrBtn>
    )
}

export default function Header(props){
    const { token } = useSelector(store => store.auth)
    const dispatch = useDispatch()
    const [themeIcon, setThemeIcon] = React.useState(<BsSun/>)
    
    const headerIcoBtns = [
        {title: (token)=>'Тема', onClick: handleThemeBtnClick, icon: themeIcon},
        
        {title: ()=>'Домой', link: '', icon: <BsHouse/>,},
        {title: ()=>'Поиск', link: 'search', icon: <BsSearch/>,},
        {title: ()=>'Оценено', link: 'rates', icon: <BsStar/>,},
        {title: ()=>'Списки', link: 'lists', icon: <BsList/>,},
        
        {title: (token)=>(!token ? 'Войти' : 'Выйти'),
        onClick: handleAuthBtnClick, icon: <BsPerson/>,},
    ]
    
    function handleThemeBtnClick(){
        const oldTheme = localStorage.getItem('theme')
        const newTheme = oldTheme == 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        document.location.reload()
    }
    
    function handleAuthBtnClick(){
        if(!!token){
            dispatch(authReducer.logOut())
            document.location.reload()
        }
        else{
            dispatch(authReducer.setShowSignInModal(true))
        }
    } 
    
    return (
        <motion.header
        className={style.header}
        initial={{
            y: '-100%',
        }}
        animate={{
            y: 0,
        }}
        transition={{
            duration: 0.5,
        }}
        >
            <section
            className={`${style.headerLeft} ${style.headerSection}`}
            >
                <Search/>
            </section>
            
            <section
            className={`${style.headerRight} ${style.headerSection}`}
            >
                {headerIcoBtns.map((item, i)=>(
                    <motion.div
                    key = {i}
                    variants = {Motions}
                    initial='glowOut'
                    animate='glowIn'
                    transition={{
                        delay: 0.5 + i/10,
                        duration: 0.1,
                        repeatType: 'mirror',
                        repeat: 1,
                        repeatDelay: 0.1,
                    }}
                    >
                        <IcoBtn
                        title = {item.title(token)}
                        link = {item.link}
                        onClick = {item.onClick}
                        icon = {item.icon}
                        />
                    </motion.div>
                ))}
            </section>
        </motion.header>
    )
}













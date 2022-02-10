import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import ReactDom from 'react-dom'
import * as listsReducer from '../../../Redux/listsReducer'
import {BsCheckLg} from 'react-icons/bs'

function newListField(lists){
    
}

function List({listname, title}){
    const dispatch = useDispatch()
    const { lists } = useSelector(store => store.lists)
    
    function titleInList(){
        try {
            return !!lists.filter(
                list => list.list == listname
            ).pop().content.filter(
                t => t.url == title.url
            ).length
        } catch (e) {
            return false
        }
        return false
    }
    
    function addTitleToList(){
        const list = listname
        const t = {url: title.url}
        dispatch(listsReducer.fetchAddToList(list, t))
    }
    
    function removeTitleFromList(){
        
    }
    
    function handleCheckBoxClick(){
        if(titleInList()){
            
        }
        else{
            addTitleToList()
        }
    }
    
    return (
        <div className={style.List}>
            <span className={style.ListName}>{listname}</span>
            <button
            className={style.ListCheckbox}
            onClick={handleCheckBoxClick}
            >
                {titleInList() ? 
                <BsCheckLg/>
                : ' '
                }
            </button>
        </div>
    )
}

export default function ModalAddToList({title, onClose}){
    const { lists } = useSelector(store => store.lists)
    
    const getListNames = (lists)=>{
        return lists.map(list => list.list)
    }
    
    return ReactDom.createPortal((
        <aside
        className = {style.ModalAddToListWrapper}
        >
            <div
            className = {style.ModalAddToList}
            >
                <div>Добавить аниме</div>
                <div>«{title.title}»</div>
                <div>В список:</div>
                
                <button
                onClick = {onClose}
                className = {style.ModalAddToListCloseBtn}
                >
                    &times;
                </button>
                
                <section
                className = {style.ModalAddToListListsSection}
                >
                    {getListNames(lists).map((listname, i) => 
                        <List
                        listname = {listname}
                        title = {title}
                        key = {i}
                        />
                    )}
                </section>
                
            </div>
        </aside>
    ), document.querySelector('#portal'))
}















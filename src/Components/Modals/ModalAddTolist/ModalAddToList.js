import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import ReactDom from 'react-dom'
import * as listsReducer from '../../../Redux/listsReducer'
import {BsCheckLg} from 'react-icons/bs'

function NewList({title}){
    const [newListInput, setNewListInput] = React.useState('')
    
    return (
        <div
        className = {style.NewList}
        >
            Новый список:
            <input
            type="text"
            value = {newListInput}
            onChange = {(e)=>{setNewListInput(e.target.value)}}
            placeholder = "Введите название списка"
            />
            <List
            title = {title}
            listname = {newListInput}
            />
        </div>
    )
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
        const list = listname
        const t = {url: title.url}
        dispatch(listsReducer.fetchRemoveFromList(list, t))
    }
    
    function handleCheckBoxClick(){
        if(!listname){return false}
        if(titleInList()){
            removeTitleFromList()
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
                    <NewList
                    title={title}
                    />
                </section>
                
            </div>
        </aside>
    ), document.querySelector('#portal'))
}















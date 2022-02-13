import style from './style.module.scss'
import {BsShieldCheck, BsShieldExclamation} from 'react-icons/bs'

export default function CheckList({value, checks}){
    function mapChecksToDom(){
        const dom = []
        checks(value).forEach((test, i) => {
            dom.push(
                <div
                className = {style.CheckListTest}
                key = {i}
                >
                    <span
                    className = {style.CheckListTestText}
                    >
                        {test[0]}
                    </span>
                    <span
                    className = {style.CheckListTestResult}
                    >
                        {test[1](value) ?
                        <BsShieldCheck
                        style={{fill: 'var(--colorBright)'}}
                        />
                        :
                        <BsShieldExclamation
                        style={{fill: 'var(--colorText)'}}
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
        className = {style.CheckList}
        >
            {mapChecksToDom()}
        </section>
    )
}
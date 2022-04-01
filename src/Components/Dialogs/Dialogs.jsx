import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DilaogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs                           /*создаем массив dialogElements и подтягиваем пропсы*/
        .map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages                         /*Создаем массив messagesElements и подтягиваем пропсы*/
        .map(m => < Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;
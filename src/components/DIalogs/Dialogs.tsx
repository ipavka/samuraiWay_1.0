import React from "react";
import dStyle from './Dialogs.module.css';
import {DialogItem} from "./DIalogsItem/DIalogsItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {MyButton} from "../common/SuperButton/SuperButton";
import {Field, Form, Formik} from "formik";
import s from "../Login/Login.module.css";

export const Dialogs: React.FC<DialogsPropsType> = props => {

    const addNewMessage = (message: string) => {
        props.buttonSendTC(message)
    }
    return (
        <div className={dStyle.dialogs}>
            <div className={dStyle.dialogsItems}>
                {props.dialogs.map((el) => {
                    return <DialogItem key={`${el.id}${el.name}`} name={el.name} id={el.id}/>
                })}
            </div>
            <div className={dStyle.messages}>
                <div>
                    {props.messages.map(el => {
                        return <Message key={el.id} message={el.message} id={el.id}/>
                    })}
                </div>
                <div>
                    <AddMessageForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

type addMessageType = {
    newMassageBody: string
}
type onSubmitType = {
    setSubmitting: (isSubmitting: boolean) => void
}

type AddMessageFormType = {
    onSubmit: (message: string) => void
}

const AddMessageForm: React.FC<AddMessageFormType> = ({onSubmit}) => {

    const onSubmitHandler = (values: addMessageType, {setSubmitting}: onSubmitType) => {
        onSubmit(values.newMassageBody)
        values.newMassageBody = ''
        setSubmitting(false)
    }
    return <Formik
        initialValues={{newMassageBody: ''}}
        onSubmit={onSubmitHandler}>
        {({isSubmitting}) => (
            <Form>
                <div>
                    <Field className={s.superInput}
                           placeholder="Enter your messages..."
                           type="textarea" name="newMassageBody"/>
                </div>

                <MyButton type="submit" disabled={isSubmitting}>
                    Send
                </MyButton>
            </Form>
        )}
    </Formik>
}
import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DIalogsItem/DIalogsItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {MyButton} from "../common/SuperButton/SuperButton";
import {Field, Form, Formik} from "formik";
import {FormikHelpers} from "formik/dist/types";

export const Dialogs: React.FC<DialogsPropsType> = props => {

    const addNewMessage = (message: string) => {
        props.buttonSendTC(message)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogs.map((el) => {
                    return <DialogItem key={`${el.id}${el.name}`} name={el.name} id={el.id}/>
                })}
            </div>
            <div className={s.messages}>
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
type AddMessageFormType = {
    onSubmit: (message: string) => void
}

const AddMessageForm: React.FC<AddMessageFormType> = ({onSubmit}) => {

    const validateForm = (values: addMessageType) => {
        const errors = {} as addMessageType;
        if (!values.newMassageBody) {
            errors.newMassageBody = 'enter a message';
        }
        if(values.newMassageBody.length > 200) {
            errors.newMassageBody = 'Must be 200 characters or less';
        }
        return errors;
    }

    const onSendMessageHandler = (values: addMessageType, actions: FormikHelpers<any>) => {
        onSubmit(values.newMassageBody);
        actions.resetForm({});
        // values.newMassageBody = '';
        actions.setSubmitting(false);
    }
    return <Formik
        initialValues={{newMassageBody: ''}}
        validate={validateForm}
        onSubmit={(values, actions) => onSendMessageHandler(values, actions)}>
        {({isSubmitting, errors,touched}) => (
            <Form>
                <div>
                    <Field as="textarea" rows={4} cols={30}
                           placeholder="Enter your messages..."
                           name="newMassageBody"/>
                    {/*{errors.newMassageBody ? <div>{errors.newMassageBody}</div> : null}*/}
                    {touched.newMassageBody && errors.newMassageBody && <div className={s.errorMessage}>{errors.newMassageBody}</div>}
                </div>

                <MyButton type="submit" disabled={isSubmitting}>
                    Send
                </MyButton>
            </Form>
        )}
    </Formik>
}
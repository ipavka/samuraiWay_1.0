import React from 'react';
import {Field, Form, Formik} from 'formik';
import {useDispatch} from "react-redux";
import {authLogInThunkCreator} from "../../redux/auth-reducer";
import {MyButton} from "../common/SuperButton/SuperButton";
import s from './Login.module.css'

const validateForm = (values: any) => {
    return {};
}
type LoginFormType = {
    email: string
    password: string
    rememberMe: boolean
}
type setSubmittingType = {
    setSubmitting: (isSubmitting: boolean) => void
}

const LoginForm = () => {

    const dispatch = useDispatch();

    const submit = (values: LoginFormType, {setSubmitting}: setSubmittingType) => {
        if (values.email && values.password) {
            dispatch(authLogInThunkCreator(values.email, values.password, values.rememberMe));
        }
        setSubmitting(false)
    }
    return <Formik
        initialValues={{email: '', password: '', rememberMe: false}}
        validate={validateForm}
        onSubmit={submit}>
        {({isSubmitting}) => (
            <Form>
                <div>
                    <Field className={s.superInput} placeholder="login" type="text" name="email"/>
                </div>
                <div>
                    <Field className={s.superInput} placeholder="password" type="password" name="password"/>
                </div>
                <div>
                    <Field type="checkbox" name="rememberMe"/>
                    Remember me
                </div>
                <MyButton type="submit" disabled={isSubmitting}>
                    Login
                </MyButton>
            </Form>
        )}
    </Formik>
}

export const Login = () => {
    return (
        <div>
            <h2>Login</h2>
            <LoginForm/>
        </div>
    );
};


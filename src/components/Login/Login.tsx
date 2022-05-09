import React from 'react';
import {Field, Form, Formik} from 'formik';
import {useDispatch, useSelector} from "react-redux";
import {authLogInThunkCreator} from "../../redux/auth-reducer";
import {MyButton} from "../common/SuperButton/SuperButton";
import {Redirect} from "react-router-dom";
import s from './Login.module.css'
import {AppStateType} from "../../redux/redux-store";


type LoginFormType = {
    email: string
    password: string
    rememberMe: boolean
}
type setSubmittingType = {
    setSubmitting: (isSubmitting: boolean) => void
}

const LoginForm = () => {

    const validateLoginForm = (values: LoginFormType) => {
        const errors = {} as LoginFormType;
        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = 'password is required';
        } else if (!/^(?=.*\d)(?=.*[a-z]).{8,}$/i.test(values.password)) {
            errors.password = 'must contain 8 characters and one digit or letter';
        }
        return errors;
    }

    const dispatch = useDispatch();

    const submit = (values: LoginFormType, {setSubmitting}: setSubmittingType, {setStatus}: any) => {
        if (values.email && values.password) {
            dispatch(authLogInThunkCreator(values.email, values.password, values.rememberMe, setStatus));
        }
        setSubmitting(false)
    }
    return <Formik
        initialValues={{email: '', password: '', rememberMe: false}}
        validate={validateLoginForm}
        onSubmit={(formData, {setSubmitting, setStatus}) => submit(formData, {setSubmitting}, {setStatus})}>
        {({isSubmitting, errors, status, touched}) => (
            <Form>
                <div>
                    <Field className={s.superInput} placeholder="login" type="text" name="email"/>
                    {touched.password && errors.email ? <div className={s.errorMessage}>{errors.email}</div> : null}
                </div>
                <div>
                    <Field className={s.superInput} placeholder="password" type="password" name="password"/>
                    {touched.password && errors.password ? <div className={s.errorMessage}>{errors.password}</div> : null}
                </div>
                {status && <div className={s.errorMessage}>{status}</div>}
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
    const authStatus = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    console.log(authStatus)
    return (<>
            {authStatus
                ?
                <Redirect to={'/profile'}>Login</Redirect>

                : <div>
                    <h2>Login</h2>
                    <LoginForm/>
                </div>}
        </>
    )
};


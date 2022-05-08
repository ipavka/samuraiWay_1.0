import React from 'react';
import {Field, Form, Formik} from 'formik';
import {useDispatch} from "react-redux";
import {authLogInThunkCreator} from "../../redux/auth-reducer";
import {MyButton} from "../common/SuperButton/SuperButton";
import s from './Login.module.css'


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

    const submit = (values: LoginFormType, {setSubmitting}: setSubmittingType) => {
        if (values.email && values.password) {
            dispatch(authLogInThunkCreator(values.email, values.password, values.rememberMe));
        }
        setSubmitting(false)
    }
    return <Formik
        initialValues={{email: '', password: '', rememberMe: false}}
        validate={validateLoginForm}
        onSubmit={submit}>
        {({isSubmitting, errors}) => (
            <Form>
                <div>
                    <Field className={s.superInput} placeholder="login" type="text" name="email"/>
                    {errors.email ? <div>{errors.email}</div> : null}
                    {/*<Field  placeholder="login" component={InputText} name="email"/>*/}
                </div>
                <div>
                    <Field className={s.superInput} placeholder="password" type="password" name="password"/>
                    {errors.password ? <div>{errors.password}</div> : null}
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


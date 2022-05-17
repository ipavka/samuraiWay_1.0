import React from 'react';
import {useDispatch} from "react-redux";
import {FormikHelpers} from "formik/dist/types";
import {authLogInThunkCreator} from "../../redux/auth-reducer";
import {Field, Form, Formik} from "formik";
import s from "./Login.module.css";
import {MyButton} from "../common/SuperButton/SuperButton";

type LoginFormType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm = () => {

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

    const submit = (values: LoginFormType, actions: FormikHelpers<any>) => {
        if (values.email && values.password) {
            dispatch(authLogInThunkCreator(values.email, values.password, values.rememberMe, actions.setStatus));
        }
        actions.setSubmitting(false)
    }
    return <Formik
        initialValues={{email: '', password: '', rememberMe: false}}
        validate={validateLoginForm}
        onSubmit={(values, actions) => submit(values, actions)}>
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

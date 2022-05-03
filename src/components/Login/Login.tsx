import React from 'react';
import {Field, Form, Formik} from 'formik';
import {apiConfig} from "../../configs/config";
import {usersAPI} from "../../api/api";
// ToDo: delete "final-form": "^4.20.7", "react-final-form": "^6.5.9",
// ToDo: сделать стили для инпутов

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
    usersAPI.authLogin(apiConfig.EMAIL as string, apiConfig.PASSWORD as string, true).then(res => {
        console.log(res)
    })
    const submit = (values: LoginFormType, {setSubmitting}:setSubmittingType) => {
        console.log(values)
        if (values.email && values.password)
        setSubmitting(false)
    }
    return <Formik
        initialValues={{ email: '', password: '', rememberMe: false}}
        validate={validateForm}
        onSubmit={submit}
    >
        {({isSubmitting}) => (
            <Form>
                <Field placeholder="login" type="text" name="email"/>
                <div>
                    <Field placeholder="password" type="password" name="password"/>
                </div>
                <div>
                    <Field type="checkbox" name="rememberMe"/>
                    Remember me
                </div>
                <button type="submit" disabled={isSubmitting}>
                    Login
                </button>
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


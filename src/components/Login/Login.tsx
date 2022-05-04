import React from 'react';
import {Field, Form, Formik} from 'formik';
import {apiConfig} from "../../configs/config";
import {usersAPI} from "../../api/api";
import {useDispatch, useSelector} from "react-redux";
import {authLogInThunkCreator} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

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

    const dispatch = useDispatch();
    // const authData = useSelector<AppStateType, boolean>(state => state.auth.isAuth)

    const submit = (values: LoginFormType, {setSubmitting}:setSubmittingType) => {
        if (values.email && values.password) {
            dispatch(authLogInThunkCreator(values.email, values.password, values.rememberMe));
        }
        setSubmitting(false)
    }
    return <Formik
        initialValues={{ email: '', password: '', rememberMe: false}}
        validate={validateForm}
        onSubmit={submit}>
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


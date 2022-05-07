import React from "react";
import myPostsStyle from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {MyButton} from "../../common/SuperButton/SuperButton";
import {Field, Form, Formik} from "formik";
import s from "../../Login/Login.module.css";


export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const addPost = (post: string) => {
        props.addPost(post)
    }

    return (
        <div className={myPostsStyle.posts}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={addPost}/>
            <div>
                {props.posts.map(el => <Post key={el.id} id={el.id} message={el.message} likesCount={el.likesCount}/>)}
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

type AddNewPostFormType = {
    onSubmit: (message: string) => void
}

const AddNewPostForm: React.FC<AddNewPostFormType> = ({onSubmit}) => {

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


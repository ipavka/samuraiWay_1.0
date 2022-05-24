import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {MyButton} from "../../common/SuperButton/SuperButton";
import {Field, Form, Formik} from "formik";
import {FormikHelpers} from "formik/dist/types";


export const MyPosts: React.FC<MyPostsPropsType> = ({posts, addPost}) => {
    const addPostHandler = (post: string) => {
        addPost(post)
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={addPostHandler}/>
            <div>
                {posts.map(el => <Post key={el.id} id={el.id} message={el.message} likesCount={el.likesCount}/>)}
            </div>
        </div>
    )
}

type addPostType = {
    newPostBody: string
}
type AddNewPostFormType = {
    onSubmit: (message: string) => void
}

const AddNewPostForm: React.FC<AddNewPostFormType> = ({onSubmit}) => {

    const validateTextarea = (values: addPostType) => {
        const errors = {} as addPostType;
        if (!values.newPostBody) {
            errors.newPostBody = 'Post is required';
        }
        if(values.newPostBody.length > 50) {
            errors.newPostBody = 'Must be 50 characters or less';
        }
        return errors;
    }
    const onSubmitHandler = (values: addPostType, actions: FormikHelpers<any>) => {
        onSubmit(values.newPostBody);
        actions.resetForm({})
        actions.setSubmitting(false);
    }
    return <Formik
        initialValues={{newPostBody: ''}}
        validate={validateTextarea}
        onSubmit={(values, actions) => onSubmitHandler(values, actions)}>
        {({isSubmitting, errors, touched}) => (
            <Form>
                <div>
                    <Field as="textarea" rows={4} cols={30}
                           placeholder="Enter your messages..."
                           name="newPostBody"/>
                    {touched.newPostBody && errors.newPostBody ? <div className={s.errorMessage}>{errors.newPostBody}</div> : null}
                </div>
                <MyButton type="submit" disabled={isSubmitting}>
                    Send
                </MyButton>
            </Form>
        )}
    </Formik>
}


import {v1} from "uuid";
import {
    addPostAC, deletePostAC,
    PostsType,
    ProfileInitialStateType,
    profileReducer,
    ProfileType, setStatus,
    setUserProfile
} from "../profile-reducer";

const POST_ID_1 = v1();
const POST_ID_2 = v1();
const POST_ID_3 = v1();

const startState: ProfileInitialStateType = {
    posts: [
        {id: POST_ID_1, message: "Hello! Hello! Hello!", likesCount: 1},
        {id: POST_ID_2, message: "Yep!", likesCount: 5},
        {id: POST_ID_3, message: "Bay!", likesCount: 10},
    ] as PostsType[],
    profile: {} as ProfileType,
    isFetching: true,
    status: '',
};

test('new post should be added', () => {
    const action = addPostAC("New Post")
    const endState = profileReducer(startState, action);
    expect(endState.posts.length).toBe(4);
    expect(endState.posts[2].message).toBe('Yep!');
    expect(endState.posts[0].message).toBe('New Post');
});
test('post should be deleted', () => {
    const action = deletePostAC(POST_ID_3)
    const endState = profileReducer(startState, action);

    expect(endState.posts.length).toBe(2);
    expect(endState.posts[1].message).toBe('Yep!');
});

test('new profile data should be added', () => {
    const action = setUserProfile({
        aboutMe: 'string',
        contacts: {
            facebook: 'string',
            website: 'string',
            vk: 'string',
            twitter: 'string',
            instagram: 'string',
            youtube: 'string',
            github: 'string',
            mainLink: 'string',
        },
        lookingForAJob: true,
        lookingForAJobDescription: 'string',
        fullName: 'ipavka',
        userId: '777',
        photos: {
            small: 'string',
            large: 'string',
        },
    })
    const endState = profileReducer(startState, action);

    expect(endState.profile.userId).toBe('777');
    expect(endState.profile.lookingForAJob).toBe(true);
});
test('new status should be changed', () => {
    const action = setStatus("Hi, their!")
    const endState = profileReducer(startState, action);

    expect(endState.status).toBe('Hi, their!');
    expect(endState.status).not.toBe('');
});
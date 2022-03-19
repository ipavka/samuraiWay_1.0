import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Dialogs} from "./components/DIalogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {FriendsItems} from "./components/Friends/FriendsItems/FriendsItems";
import {DispatchActionType, RootStateType} from "./redux/state";


type AppPropsType = {
    state: RootStateType
    dispatch: (action: DispatchActionType) => void
}

export const App: React.FC<AppPropsType> = (props ) => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path='/profile/*' element={
                        <Profile newPosts={props.state.profilePage.newPostsText}
                                 profilePage={props.state.profilePage}
                                 dispatch={props.dispatch}
                        />}/>
                    <Route path='/dialog/*' element={
                        <Dialogs state={props.state.dialogsPage}
                                 dispatch={props.dispatch}
                        />}/>
                    <Route path='/news/*' element={<News/>}/>
                    <Route path='/music/*' element={<Music/>}/>
                    <Route path='/settings/*' element={<Settings/>}/>
                    <Route path='/friends/*' element={<FriendsItems/>}/>
                </Routes>
            </div>
        </div>
    );
}

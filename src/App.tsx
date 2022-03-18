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


type AppPropsType = {
    state: any
    addPost: () => void
    updateNewPostText: (value: string) => void
}

function App(props: AppPropsType) {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path='/profile/*' element={<Profile newPosts={props.state.profilePage.newPosts}
                                                               profilePage={props.state.profilePage}
                                                               addPost={props.addPost}
                                                               updateNewPostText={props.updateNewPostText}
                    />}/>
                    <Route path='/dialog/*' element={<Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/news/*' element={<News/>}/>
                    <Route path='/music/*' element={<Music/>}/>
                    <Route path='/settings/*' element={<Settings/>}/>
                    <Route path='/friends/*' element={<FriendsItems/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;

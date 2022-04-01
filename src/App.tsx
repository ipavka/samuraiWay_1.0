import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Routes, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {FriendsItems} from "./components/Friends/FriendsItems/FriendsItems";
import {DialogsContainer} from "./components/DIalogs/DialogsContainer";

export const App: React.FC = () => {

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar />
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path='/profile/*' element={
                        <Profile />}/>
                    <Route path='/dialog/*' element={
                        <DialogsContainer />}/>
                    <Route path='/news/*' element={<News/>}/>
                    <Route path='/music/*' element={<Music/>}/>
                    <Route path='/settings/*' element={<Settings/>}/>
                    <Route path='/friends/*' element={<FriendsItems/>}/>
                </Routes>
            </div>
        </div>
    );
}

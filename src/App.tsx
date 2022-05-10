import React from 'react';
import s from './App.module.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, NavLink} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {FriendsItems} from "./components/Friends/FriendsItems/FriendsItems";
import DialogsContainer from "./components/DIalogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Login} from "./components/Login/Login";
import HeaderContainer from "./components/Header/HeaderContainer";
import {FriendsContainer} from "./components/Friends/FriendsContainer";

export const App = () => {

    return (
        <div className={s.appWrapper}>
            <HeaderContainer/>
            {/*<Navbar/>*/}
            <main className={s.appWrapperContent}>
                <div className={s.mainBlock}>

                    <div className={s.mainItem}>
                        <div>
                            <NavLink to={'/news'}>News</NavLink>
                        </div>
                        <div>
                            <NavLink to={'/music'}>Music</NavLink>
                        </div>
                        <div>
                            <NavLink to={'/settings'}>Settings</NavLink>
                        </div>
                    </div>

                    <div className={s.mainItem}>
                        <NavLink to={'/friends'}>Friends</NavLink>
                        <FriendsContainer/>
                    </div>

                </div>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/dialog' render={() => <DialogsContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/friends' render={() => <FriendsItems/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/login' render={() => <Login/>}/>
            </main>
        </div>
    );
}

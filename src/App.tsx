import React, {Suspense} from 'react';
import s from './App.module.css';
import {Route, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {FriendsItems} from "./components/Friends/FriendsItems/FriendsItems";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Login} from "./components/Login/Login";
import HeaderContainer from "./components/Header/HeaderContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {MySpinner} from "./components/common/MySpinner/MySpinner";
import {setInitializationThunkCreator} from "./redux/app-reducer";
import {NavContainer} from "./components/Navbar/NavContainer";

const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


class App extends React.Component<AppPropsType> {

  componentDidMount() {
    this.props.setInitializationApp()
  }

  render() {
    if (!this.props.initialization) {
      return <MySpinner/>
    }
    return (
      <div className={s.appWrapper}>
        <HeaderContainer/>
        <main className={s.appWrapperContent}>
          <NavContainer/>
          <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
          <Route exact path='/' render={() => <ProfileContainer/>}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' render={() => <Music/>}/>
          <Route path='/settings' render={() => <Settings/>}/>
          <Route path='/friends' render={() => <FriendsItems/>}/>
          <Suspense fallback={<MySpinner/>}>
            <Route path='/users' render={() => <UsersContainer/>}/>
            <Route path='/dialog' render={() => <DialogsContainer/>}/>
          </Suspense>
          <Route path='/login' render={() => <Login/>}/>
        </main>
      </div>
    );
  }
}

type MapStateToPropsType = {
  initialization: boolean
}
type MapDispatchPropsType = {
  setInitializationApp: () => void
}
export type AppPropsType = MapStateToPropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType) => {
  return {
    initialization: state.app.initialized
  }
}

export default compose<React.FC>(
  withRouter,
  connect(mapStateToProps,
    {
      setInitializationApp: setInitializationThunkCreator
    }
  )
)(App)
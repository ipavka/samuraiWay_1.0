import React from "react";
import {
    buttonSendThunkCreator,
    DialogsType,
    MessagesType,
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


export class DialogsContainer extends React.Component<DialogsPropsType> {

    render() {
        return (<>
                <Dialogs buttonSendTC={this.props.buttonSendTC}
                         dialogs={this.props.dialogs}
                         messages={this.props.messages}
                />
            </>
        );
    }

}

type MapStateToPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}
type MapDispatchPropsType = {
    buttonSendTC: (message: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
}

export default compose<React.FC>(
    WithAuthRedirect,
    connect(mapStateToProps,
        {
            buttonSendTC: buttonSendThunkCreator,
        }
    )
)(DialogsContainer)
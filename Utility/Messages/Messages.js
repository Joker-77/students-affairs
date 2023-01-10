import React, { Component } from 'react';
import DismessableMessage from "./DismessableMessage"


import { connect } from 'react-redux'
import * as actionTypes from '../../../store/actions';
class Messages extends Component {
    
    render() {
        //console.log("Testing",this.props);
        if(this.props.Message && this.props.Message.Content!="")
       return (<DismessableMessage Message={this.props.Message.Content} OnHide={this.props.SetMessage} Type={this.props.Message.Type}/> )
       return null;
    }
    
}
const mapStateToProps = state => {
    return {
        Message: state.Message
    }
}
const mapDispatchToProps = dispatch => {
    return {
        SetMessage: (message) => {
            //console.log("reducer",message)
            dispatch({
                type: actionTypes.SET_MESSAGE,
                Message:message
            });
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Messages)

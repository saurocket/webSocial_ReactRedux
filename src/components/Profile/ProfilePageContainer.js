import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    addPost,
    getCurrentProfile,
    getStatus,
    updateStatus
} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{
    componentDidMount() {
            let userId = this.props.match.params.userId;
            if(!userId){
            userId = 14723;
        }
       this.props.getCurrentProfile(userId);
       this.props.getStatus(userId);

    }
    render() {
    return (
            <Profile
                {...this.props}
            />
    )
    }
}
const mapStateProps = (state) => {
    return {
        profilePage: state.profilePage,
        status: state.profilePage.status
    }

}


export default compose(
    connect(mapStateProps, {addPost,getCurrentProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)
(ProfileContainer);


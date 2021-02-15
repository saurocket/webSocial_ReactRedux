import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    toggleIsFollowingProgress,
    unFollow
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import classes from "./Users.module.css"
import Spinner from "../common/spinner/Spinner";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return (
            <div className={classes.wrapperBox}>
                    {this.props.isFetching ?  <Spinner/> : null}
                <Users
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    unFollow={this.props.unFollow}
                    follow={this.props.follow}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                    follwingInProgress={this.props.follwingInProgress}
                />
           </div>
            )
    }
}




const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        follwingInProgress: state.usersPage.follwingInProgress,
    }
}


const mapDispatchObj = {
    follow,
    unFollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsers

}

export  default  compose(
    connect(mapStateToProps, mapDispatchObj),
    withAuthRedirect
)(UsersAPIComponent)



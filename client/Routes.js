import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter, Route, Switch, Redirect} from 'react-router-dom';
import { Login } from './components/AuthForm';
import { Signup } from './components/UserCreateForm';
import Home from './components/Home';
import { me, setUsers, setPhotos, setPosts, setConnections } from './store';
import UserUpdateForm from './components/UserUpdateForm';
import ProfilePhotoForm from './components/ProfilePhotoForm';
import UserPhotosPage from './components/UserPhotosPage';
import Messages from './components/Messages';
import PostCreateForm from './components/PostCreateForm';
import PostUpdateForm from './components/PostUpdateForm';
import UserProfilePage from './components/UserProfilePage';
import PasswordReset from './components/PasswordReset';
import PasswordResetRequest from './components/PasswordResetRequest';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }
  componentDidUpdate(prevProps) {
    if (!prevProps.isLoggedIn && this.props.isLoggedIn) {
      //if we logged in, load startup data
      this.props.loadData()

    }
    if (prevProps.isLoggedIn && !this.props.isLoggedIn) {
      //if user logout
    }
  }
  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <div>
            { window.location.pathname === '/' ? <Redirect to='/home' /> : null }
            <Route exact path='/home' component={ Home } />
            <Route exact path='/profile/:id' component={ UserProfilePage } />
            <Route exact path='/profile/:id/update' component={ UserUpdateForm } />
            <Route exact path='/profile/:id' component={ ProfilePhotoForm } />
            <Route exact path='/profile/:id' component={ UserPhotosPage } />
            <Route exact path='/message/:id' component={ Messages } />
            <Route exact path='posts' component={ PostCreateForm } />
            <Route exact path='/posts/:id' component={ PostUpdateForm } />
          </div>
        ) : (
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/passwordResetRequest" component={PasswordResetRequest}/>
            <Route path='/passwordreset/:token/:username/:id' component={ PasswordReset }/>
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData: () => {
      dispatch(me());
    },
    //add load data with fetch startup datas i.e. messages, users, posts, likes
    loadData: () => {
      dispatch(setUsers())
      dispatch(setPhotos())
      dispatch(setPosts())
      dispatch(setConnections())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));

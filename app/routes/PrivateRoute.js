// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {

  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/pages/login', state: { from: props.location } }} />
        )
      }
    />
  )
}


const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
  });
  
  PrivateRoute.propTypes = {
    user: PropTypes.object.isRequired
  };
  
  export default connect(mapStateToProps)(PrivateRoute);
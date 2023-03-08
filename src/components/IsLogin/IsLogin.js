import React from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux'
import { checkCookie } from '../../utils/cookies';

/*export const PrivateRoute = ({ component: Component, user, ...rest }) => (
    <Route {...rest} render={(props) => (
      user.isAuthenticated === true
        ? <Component {...props} />
        : <Navigate to='/login' />
    )} />
  )
  
  
  const mapStateToProps = state => ({
    user: state.user
  })
  
  export default connect(mapStateToProps)(PrivateRoute)*/

  export const PrivateRoute = ({ children }) => {
	const location = useLocation();

	if (checkCookie() == null) {
		return <Navigate to='/login' state={{ from: location }} />;
	}

  return children;
}

export default PrivateRoute;
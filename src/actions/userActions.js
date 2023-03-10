import * as userConstants from "./types";
import { userService } from "../services/userService";
import { alertError, alertSuccess, alertClose } from "./alertActions";
import { createBrowserHistory } from 'history';
import { Navigate } from 'react-router-dom';




export const userActions = {
  login,
  logout,
  //register,
  getAll,
  delete: _delete
};




function login(username, password) {

  //return dispatch => {
  //dispatch(request({ username }));

  userService.login(username, password)
    .then(
      user => {
        //dispatch(success(user));
        //success(user);
        //<Navigate to="/" />
        createBrowserHistory().replace('/');
        window.location.reload();
        //createBrowserHistory().replace('/');
        console.dir(user)

      },
      error => {
        //dispatch(failure(error));
        //failure(error);
        //dispatch(alertError.error(error));
        console.dir(error)
      }
    )
  //};

  function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT }
}

/*function register(user) {
  return dispatch => {
    dispatch(request(user));

    userService.register(user)
      .then(
        user => {
          dispatch(success());
          history.push('/login');
          dispatch(alertActions.success('Registration successfull'))
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        }
      );
  };

  function request(user) { return { type: userConstants.REGISTER_REQUEST, user }  }
  function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
  function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}*/


function getAll() {
  let request = () => ({ type: userConstants.GETALL_REQUEST });
  let success = users => ({ type: userConstants.GETALL_SUCCESS, users });
  let failure = error => ({ type: userConstants.GETALL_FAILURE, error });

  return dispatch => {
    dispatch(request());

    userService.getAll()
      .then(
        users => dispatch(success(users)),
        error => dispatch(failure(error))
      )
  }
}

function _delete(id) {
  return dispatch => {
    dispatch(request(id));

    userService.delete(id)
      .then(
        user => {
          dispatch(success(id));
        },
        error => dispatch(failure(id, error))
      )
  };

  function request(id) { return { type: userConstants.DELETE_REQUEST, id } };
  function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
  function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}
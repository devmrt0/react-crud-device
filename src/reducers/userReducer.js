import { GETALL_REQUEST,GETALL_SUCCESS,GETALL_FAILURE,DELETE_SUCCESS,DELETE_FAILURE,DELETE_REQUEST } from '../actions/types';

export function users(state={}, action) {
  switch(action.type) {
    case GETALL_REQUEST:
      return { loading: true };
    
    case GETALL_SUCCESS:
      return { items: action.users };
    
    case GETALL_FAILURE:
      return { error: action.error }

    case DELETE_REQUEST:
      return {
        ...state,
        items: state.items.map( user => 
            user.id === action.id
              ? { ...user, deleting: true }
              : user
        )
      }

    case DELETE_SUCCESS:
      return {
        items: state.items.filter(user => user.id !== action.id)
    };

    case DELETE_FAILURE:
      return {
        ...state,
        items: state.items.map(user => {
          if(user.id === action.id) {
            // making copy of user without 'deleting: true' property
            const {deleting, ...userCopy } = user;
            return { ...userCopy, deleteError: action.error }
          }

          return user;
        })
      }
    default:
      return state;
  }
}

export default users;
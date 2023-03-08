import {
    CREATE_USER,
    RETRIEVE_USERS,
    UPDATE_USER,
    DELETE_USER,
    DELETE_ALL_USERS,
    GET_ALL_USERS,
    GET_USER
} from "../actions/types";

const initialState = [];

function userAddReducer(users = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_USER:
            return [...users, payload];

        case RETRIEVE_USERS:
            return payload;

        case GET_ALL_USERS:
            return [...users, payload];

        case GET_USER:
            return payload;

        case UPDATE_USER:
            return users.map((user) => {
                if (user.id === payload.id) {
                    return {
                        ...user,
                        ...payload,
                    };
                } else {
                    return user;
                }
            });

        case DELETE_USER:
            return users.filter(({ id }) => id !== payload.id);

        case DELETE_ALL_USERS:
            return [];

        default:
            return users;
    }
};

export default userAddReducer;
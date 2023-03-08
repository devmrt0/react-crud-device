import {
  CREATE_USER,
  RETRIEVE_USERS,
  GET_ALL_USERS,
  UPDATE_USER,
  DELETE_USER,
  DELETE_ALL_USERS,
  GET_USER
} from "./types";

import userAddService from "../services/userAddService";

export const createUser = (title, description) => async (dispatch) => {
  try {
    const res = await userAddService.create({ title, description });

    dispatch({
      type: CREATE_USER,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await userAddService.getAll();
    console.dir("a")
    dispatch({
      type: GET_ALL_USERS,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};



export async function getAllUsers2() {
  const res = await userAddService.getAll();
  return {
    type: GET_ALL_USERS,
    payload: res.data
  };
}

export async function CreateUser2(data) {
  const res = await userAddService.create(data);
  return {
    type: CREATE_USER,
    payload: res.data,
  };
}

export const getUserById = (id) => async (dispatch) => {
  try {
    const res = await userAddService.get(id);

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = (id, data) => async (dispatch) => {
  try {
    const res = await userAddService.update(id, data);

    dispatch({
      type: UPDATE_USER,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteDevice = (id) => async (dispatch) => {
  try {
    await userAddService.delete(id);

    dispatch({
      type: DELETE_USER,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllUsers = () => async (dispatch) => {
  try {
    const res = await userAddService.deleteAll();

    dispatch({
      type: DELETE_ALL_USERS,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findUsersByTitle = (title) => async (dispatch) => {
  try {
    const res = await userAddService.findByTitle(title);

    dispatch({
      type: RETRIEVE_USERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

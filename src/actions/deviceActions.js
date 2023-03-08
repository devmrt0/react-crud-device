import {
    CREATE_DEVICE,
    RETRIEVE_DEVICES,
    GET_ALL_DEVICES,
    UPDATE_DEVICE,
    DELETE_DEVICE,
    DELETE_ALL_DEVICES,
    GET_DEVICE
  } from "./types";
  
  import deviceDataService from "../services/deviceService";


  export async function getAllDevices2() {
    const res = await deviceDataService.getAll();
    return {
      type: GET_ALL_DEVICES,
      payload: res.data
    };
  }
  
  export async function CreateDevice2(data) {
    const res = await deviceDataService.create(data);
    return {
      type: CREATE_DEVICE,
      payload: res.data,
    };
  }
  
  export const createDevice = (title, description) => async (dispatch) => {
    try {
      const res = await deviceDataService.create({ title, description });
  
      dispatch({
        type: CREATE_DEVICE,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const getAllDevices = () => async (dispatch) => {
    try {
      const res = await deviceDataService.getAll();
  
      dispatch({
        type: GET_ALL_DEVICES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const getDeviceById = (id) => async (dispatch) => {
    try {
      const res = await deviceDataService.get(id);
  
      dispatch({
        type: GET_DEVICE,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const updateDevice = (id, data) => async (dispatch) => {
    try {
      const res = await deviceDataService.update(id, data);
  
      dispatch({
        type: UPDATE_DEVICE,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const deleteDevice = (id) => async (dispatch) => {
    try {
      await deviceDataService.delete(id);
  
      dispatch({
        type: DELETE_DEVICE,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const deleteAllDevices = () => async (dispatch) => {
    try {
      const res = await deviceDataService.deleteAll();
  
      dispatch({
        type: DELETE_ALL_DEVICES,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const findDevicesByTitle = (title) => async (dispatch) => {
    try {
      const res = await deviceDataService.findByTitle(title);
  
      dispatch({
        type: RETRIEVE_DEVICES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
import {
    GET_DEVICE_APP_VERSION,
    GET_DEVICE_LINUX_VERSION,
    GET_DEVICE_STATUS,
    GET_DEVICE_UPTIME
  } from "./types";
  
  import TutorialDataService from "../services/deviceVersionService";
  
  

  export const getDeviceAppById = (id) => async (dispatch) => {
    try {
      const res = await TutorialDataService.getVersion(id);
  
      dispatch({
        type:  GET_DEVICE_APP_VERSION,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const getDeviceLinuxById = (id) => async (dispatch) => {
    try {
      const res = await TutorialDataService.getLinuxVersion(id);
  
      dispatch({
        type:  GET_DEVICE_LINUX_VERSION,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const getDeviceStatusById = (id) => async (dispatch) => {
    try {
      const res = await TutorialDataService.getStatus(id);
  
      dispatch({
        type:  GET_DEVICE_STATUS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const getDeviceUptimeById = (id) => async (dispatch) => {
    try {
      const res = await TutorialDataService.getUptime(id);
  
      dispatch({
        type:  GET_DEVICE_UPTIME,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  
  
 
  
  
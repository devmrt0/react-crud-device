import {
    GET_ALL_DEVICE_INFO,
} from "./types";
  
import TutorialDataService from "../services/deviceInfoService";
  
 
  
  export const getAllDeviceInfos = () => async (dispatch) => {
    try {
      const res = await TutorialDataService.getAll();
  
      dispatch({
        type: GET_ALL_DEVICE_INFO,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  
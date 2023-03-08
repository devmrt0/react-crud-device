import {
    GET_ALL_DEVICE_INFO,
} from "../actions/types";

const initialState = [];

function deviceInfoReducer(devicesInfos = initialState, action) {
    const { type, payload } = action;

    switch (type) {


        case GET_ALL_DEVICE_INFO:
            return payload;



        default:
            return devicesInfos;
    }
};

export default deviceInfoReducer;
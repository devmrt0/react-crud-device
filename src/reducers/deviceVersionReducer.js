import {
    GET_DEVICE_APP_VERSION,
    GET_DEVICE_LINUX_VERSION,
    GET_DEVICE_STATUS,
    GET_DEVICE_UPTIME
} from "../actions/types";

const initialState = {
    appversionByID: {},
    linuxversionByID: {},
    statusByID: {},
    uptimeByID: {},
};

function deviceVersionReducer(deviceVersion = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_DEVICE_APP_VERSION:
            return Object.assign({}, deviceVersion, { appversionByID: payload });

        case GET_DEVICE_LINUX_VERSION:
            return Object.assign({}, deviceVersion, { linuxversionByID: payload });

        case GET_DEVICE_STATUS:
            return Object.assign({}, deviceVersion, { statusByID: payload });

        case GET_DEVICE_UPTIME:
            return Object.assign({}, deviceVersion, { uptimeByID: payload });

        default:
            return deviceVersion;
    }
};

export default deviceVersionReducer;
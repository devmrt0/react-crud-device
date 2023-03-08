import {
    CREATE_DEVICE,
    RETRIEVE_DEVICES,
    UPDATE_DEVICE,
    DELETE_DEVICE,
    DELETE_ALL_DEVICES,
    GET_ALL_DEVICES,
    GET_DEVICE
} from "../actions/types";

const initialState = [];

function deviceReducer(devices = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_DEVICE:
            return [...devices, payload];

        case RETRIEVE_DEVICES:
            return payload;

        case GET_ALL_DEVICES:
            return payload;

        case GET_DEVICE:
            return payload;

        case UPDATE_DEVICE:
            return devices.map((device) => {
                if (device.id === payload.id) {
                    return {
                        ...device,
                        ...payload,
                    };
                } else {
                    return device;
                }
            });

        case DELETE_DEVICE:
            return devices.filter(({ id }) => id !== payload.id);

        case DELETE_ALL_DEVICES:
            return [];

        default:
            return devices;
    }
};

export default deviceReducer;
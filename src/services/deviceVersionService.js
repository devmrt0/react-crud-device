import http from "../config/config";

class DeviceVersionService {


    getVersion(id) {
        return http.get(`/device/${id}`);
    }

    getLinuxVersion(id) {
        return http.get(`/device/${id}`);
    }

    getStatus(id) {
        return http.get(`/device/${id}`);
    }

    getUptime(id) {
        return http.get(`/device/${id}`);
    }


}

export default new DeviceVersionService();
import http from "../config/config";

class DeviceInfoService {
  getAll() {
    return http.get("/device/info");
  }
}

export default new DeviceInfoService();
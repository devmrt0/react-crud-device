import http from "../config/config";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZpY2VpZCI6IklSVDI4MTIzNDU2IiwibGFuZ3VhZ2UiOiJ0ciIsImlhdCI6MTY3MjkwODUwOSwiZXhwIjoxNjcyOTk0OTA5fQ.OrpDwxohPy7FvI8H93DWt4CNpz-7vkDt4d05Z_aYl7U";

class DeviceService {
  getAll() {
    return http.get("/app/device",{ headers: {"authentication" : `bearer ${token}`} });
  }

  get(id) {
    return http.get(`/device/${id}`);
  }

  create(data) {
    return http.post("/app/device", data,{ headers: {"authentication" : `bearer ${token}`} });
  }

  update(id, data) {
    return http.put(`/device/${id}`, data);
  }

  delete(id) {
    return http.delete(`/device/${id}`);
  }

  deleteAll() {
    return http.delete(`/device`);
  }

  findByTitle(title) {
    return http.get(`/device?title=${title}`);
  }
}

export default new DeviceService();
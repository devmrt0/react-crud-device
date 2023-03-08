import http from "../config/config";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZpY2VpZCI6IklSVDI4MTIzNDU2IiwibGFuZ3VhZ2UiOiJ0ciIsImlhdCI6MTY3MjkwODUwOSwiZXhwIjoxNjcyOTk0OTA5fQ.OrpDwxohPy7FvI8H93DWt4CNpz-7vkDt4d05Z_aYl7U";

class UserAddService {
  getAll() {
    return http.get("/app/user",{ headers: {"authentication" : `bearer ${token}`} });
  }

  get(id) {
    return http.get(`/users/${id}`);
  }

  create(data) {
    return http.post("/app/user", data,{ headers: {"authentication" : `bearer ${token}`} });
  }

  update(id, data) {
    return http.put(`/users/${id}`, data);
  }

  delete(id) {
    return http.delete(`/users/${id}`);
  }

  deleteAll() {
    return http.delete(`/users`);
  }

  findByTitle(title) {
    return http.get(`/users?title=${title}`);
  }
}

export default new UserAddService();
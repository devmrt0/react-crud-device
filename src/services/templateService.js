import http from "../config/config";

class TemplateDataService {
  getAll() {
    return http.get("/Templates");
  }

  get(id) {
    return http.get(`/Templates/${id}`);
  }

  create(data) {
    return http.post("/Templates", data);
  }

  update(id, data) {
    return http.put(`/Templates/${id}`, data);
  }

  delete(id) {
    return http.delete(`/Templates/${id}`);
  }

  deleteAll() {
    return http.delete(`/Templates`);
  }

  findByTitle(title) {
    return http.get(`/Templates?title=${title}`);
  }
}

export default new TemplateDataService();
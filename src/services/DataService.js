import http from "../http-common";

class DataService {
  register(data) {
    return http.post("/student/register", data);
  }
  login(data) {
    return http.post("/student/login", data);
  }
  
}

export default new DataService();
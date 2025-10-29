import http from "../http-common";

class DataService {
  register(data) {
    return http.post("/student/register", data);
  }
  login(data) {
    return http.post("/student/login", data);
  }
  QuizList() {
    return http.get(`/quiz`);
  }
  getQuestion(qid) {
    return http.get(`/quiz-attempt/questions?quiz_id=${qid}`);
  }
  
}

export default new DataService();
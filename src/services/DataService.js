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
  getQuizAttempt() {
    return http.get(`/quiz-attempt/get_score`);
  }
  saveQuizAnswer(data){
    return http.post("/quiz-attempt/store", data);
  }
  
}

export default new DataService();
<template>
  <header class="masthead bg-primary text-white text-center">
    <div class="container d-flex align-items-center flex-column">
      <h1 class="masthead-heading text-uppercase mb-0">Available Quiz</h1>

      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-question-circle"></i></div>
        <div class="divider-custom-line"></div>
      </div>
    </div>
  </header>
  <table class="table my-4">
    <tr>
      <th>Quiz Title</th>
      <th>Description</th>
      <th>Action</th>
    </tr>
    <tr v-for="(q, index) in quiz" :key="index">
      <td>{{ q.title }}</td>
      <td>{{ q.description }}</td>
      <td><button @click="qid=q.id; goToQuiz()">Start Quiz</button></td>
    </tr>
  </table>
</template>

<script>
import DataService from "../services/DataService";
export default {
  name: "WaitingPage",
  data() {
    return {
      countdown: 5, // seconds before redirect
      quiz:[],
      qid:0
    };
  },methods: {
    getQuiz(){
      DataService.QuizList()
      .then(response => {
        console.log(response.data);
        this.quiz = response.data;
      }).catch(e => {
        console.log(e);
      });
    },
    goToQuiz() {
      this.$router.push({ name: 'quiz', query: { qid: this.qid } });
    }
  },mounted(){
    this.getQuiz();
  }
  
};
</script>

<template>
  <section class="page-section" id="quiz-review">
    <div class="container">
      <h2 class="text-center mb-4">Your Attempt Review</h2>

      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status"></div>
        <p>Loading attempt details...</p>
      </div>

      <div v-else>
        <div class="d-flex justify-content-between mb-3">
          <h5>Score: {{ attempt.score }}%</h5>
          <span class="badge bg-info">Quiz ID: {{ attempt.quiz_id }}</span>
        </div>

        <div v-for="(q, index) in attempt.answers" :key="q.question_id" class="card mb-4 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Q{{ index + 1 }}. {{ q.question }}</h5>

            <div class="list-group mt-3">
              <div
                v-for="option in q.options"
                :key="option"
                class="list-group-item d-flex justify-content-between align-items-center"
                :class="optionClass(option, q)"
              >
                <span>{{ option }}</span>
                <span v-if="option === q.correct" class="badge bg-success">Correct</span>
                <span v-else-if="option === q.selected" class="badge bg-danger">Your answer</span>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-4">
          <router-link class="btn btn-secondary" :to="{ name: 'dashboard' }">Back to Dashboard</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DataService from "../services/DataService";

export default {
  name: "QuizReviewPage",
  data() {
    return {
      loading: true,
      attempt: {
        quiz_id: null,
        score: 0,
        answers: [],
      },
    };
  },
  mounted() {
    this.getAttemptDetails();
  },
  methods: {
    getAttemptDetails() {
      const quizId = this.$route.params.id;
      DataService.getQuizAttemptDetail(quizId)
        .then((response) => {
          this.attempt = response.data;
          this.loading = false;
        })
        .catch((error) => {
          console.error("Error fetching attempt:", error);
          this.loading = false;
        });
    },
    optionClass(option, q) {
      if (option === q.correct && option === q.selected) return "bg-success text-white";
      if (option === q.correct) return "border-success";
      if (option === q.selected && !q.isCorrect) return "bg-danger text-white";
      return "";
    },
  },
};
</script>

<style scoped>
.list-group-item {
  transition: background-color 0.2s ease;
}
</style>

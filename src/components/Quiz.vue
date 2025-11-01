<template>
  <!-- Header -->
  <header class="masthead bg-primary text-white text-center">
    <div class="container d-flex align-items-center flex-column">
      <img class="masthead-avatar mb-4" src="assets/img/quiztime.svg" alt="Quiz Icon" />
      <h1 class="masthead-heading text-uppercase mb-0">Quiz in Progress</h1>

      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-question-circle"></i></div>
        <div class="divider-custom-line"></div>
      </div>

      <p class="masthead-subheading font-weight-light mb-0">
        Answer all questions below. You can do them in any order.
      </p>
    </div>
  </header>

  <!-- Quiz Section -->
  <section class="page-section" id="quiz">
    <div class="container">
      <!-- Quiz Info -->
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h4 class="text-secondary mb-0">
          Total Questions: {{ questions.length || 0 }}
        </h4>
        <span class="badge bg-primary fs-6 p-2">
          <i class="fas fa-clock me-1"></i> {{ timeLeft }}s
        </span>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status"></div>
        <p class="mt-3">Loading questions...</p>
      </div>

      <!-- Questions -->
      <div v-else>
        <div v-for="(q, index) in questions" :key="q.id" class="card shadow-sm mb-4">
          <div class="card-body">
            <h5 class="card-title">
              Q{{ index + 1 }}. {{ q.question }}
            </h5>
            <div class="list-group mt-3">
              <label
                v-for="(option, optIdx) in q.options"
                :key="optIdx"
                class="list-group-item list-group-item-action"
                :class="{ active: userAnswers[q.id] === option }"
              >
                <input
                  class="form-check-input me-2"
                  type="radio"
                  :name="'q' + q.id"
                  :value="option"
                  v-model="userAnswers[q.id]"
                />
                {{ option }}
              </label>
            </div>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="text-center mt-5">
          <button class="btn btn-success btn-lg" @click="submitQuiz">
            <i class="fas fa-check me-2"></i> Submit Quiz
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DataService from "../services/DataService";

export default {
  name: "QuizPage",
  data() {
    return {
      timeLeft: 120, // Example 2-minute timer
      userAnswers: {},
      questions: [],
      loading: true,
    };
  },
  mounted() {
    this.getQuestion();
    this.startTimer();
  },
  methods: {
    getQuestion() {
      this.loading = true;
      DataService.getQuestion(this.$route.query.qid)
        .then((response) => {
          this.questions = response.data.questions || [];
          this.loading = false;
        })
        .catch((error) => {
          console.error("Error fetching questions:", error);
          this.loading = false;
        });
    },
    startTimer() {
      const timer = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          clearInterval(timer);
          this.submitQuiz();
        }
      }, 1000);
    },
    submitQuiz() {
      const results = this.questions.map((q) => ({
        question: q.id,
        selected: this.userAnswers[q.id],
        correct: q.correct, // keep for now; backend may change later
        isCorrect: q.correct === this.userAnswers[q.id],
      }));

      const totalCorrect = results.filter((r) => r.isCorrect).length;
      const score = Math.round((totalCorrect / this.questions.length) * 100);

      const storeData = {
        quiz_id: this.$route.query.qid,
        answers: results,
      };

      DataService.saveQuizAnswer(storeData)
        .then((response) => {
          console.log("Quiz saved:", response);
          this.$router.push({
            name: "dashboard",
            query: { score },
          });
        })
        .catch((error) => {
          console.error("Error saving quiz:", error);
        });
    },
  },
};
</script>

<style scoped>
.masthead-avatar {
  width: 120px;
  height: auto;
}
</style>

<template>
  <!-- Masthead -->
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
      <!-- Quiz Timer and Info -->
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h4 class="text-secondary mb-0">Total Questions: {{ questions.length }}</h4>
        <span class="badge bg-primary fs-6 p-2">
          <i class="fas fa-clock me-1"></i> {{ timeLeft }}s
        </span>
      </div>

      <!-- All Questions -->
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
  </section>
</template>

<script>
export default {
  name: "QuizPage",
  data() {
    return {
      timeLeft: 120, // Example timer (2 mins)
      userAnswers: {},
      questions: [
        {
          id: 1,
          question: "Which language runs in a web browser?",
          options: ["Java", "C", "Python", "JavaScript"],
          correct: "JavaScript",
        },
        {
          id: 2,
          question: "What does CSS stand for?",
          options: [
            "Central Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Creative Style System",
          ],
          correct: "Cascading Style Sheets",
        },
        {
          id: 3,
          question: "Inside which HTML element do we put the JavaScript?",
          options: ["<script>", "<js>", "<javascript>", "<scripting>"],
          correct: "<script>",
        },
        {
          id: 4,
          question: "Which tag is used for inserting a line break?",
          options: ["<lb>", "<br>", "<break>", "<newline>"],
          correct: "<br>",
        },
      ],
    };
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    startTimer() {
      const timer = setInterval(() => {
        if (this.timeLeft > 0) this.timeLeft--;
        else {
          clearInterval(timer);
          this.submitQuiz();
        }
      }, 1000);
    },
    submitQuiz() {
      // Calculate results
      const results = this.questions.map((q) => ({
        question: q.question,
        selected: this.userAnswers[q.id],
        correct: q.correct,
        isCorrect: q.correct === this.userAnswers[q.id],
      }));

      const totalCorrect = results.filter((r) => r.isCorrect).length;
      const score = Math.round((totalCorrect / this.questions.length) * 100);

      console.log("Results:", results, "Score:", score);

      // Redirect to result or dashboard
      this.$router.push({
        name: "dashboard",
        query: { score },
      });
    },
  },
};
</script>

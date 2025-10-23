<template>
  <!-- Masthead -->
  <header class="masthead bg-primary text-white text-center">
    <div class="container d-flex align-items-center flex-column">
      <img class="masthead-avatar mb-4" src="assets/img/history.svg" alt="History Icon" />
      <h1 class="masthead-heading text-uppercase mb-0">Quiz History</h1>

      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-history"></i></div>
        <div class="divider-custom-line"></div>
      </div>

      <p class="masthead-subheading font-weight-light mb-0">
        Review your past quizzes and check what you got right or wrong.
      </p>
    </div>
  </header>

  <!-- Quiz History Section -->
  <section class="page-section" id="history">
    <div class="container">

      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-4">
        Your Quiz Attempts
      </h2>

      <div class="divider-custom mb-4">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>

      <!-- Quiz List -->
      <div v-for="(attempt, idx) in quizHistory" :key="attempt.id" class="card mb-4 shadow-sm">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <h5 class="card-title mb-0">Attempt #{{ idx + 1 }}</h5>
            <span class="badge bg-primary fs-6">
              Score: {{ attempt.score }}%
            </span>
          </div>
          <p class="text-muted mb-3">Date: {{ formatDate(attempt.date) }}</p>

          <!-- Questions & Answers -->
          <div v-for="(q, qIdx) in attempt.questions" :key="qIdx" class="mb-3">
            <p>
              <strong>Q{{ qIdx + 1 }}:</strong> {{ q.question }}
            </p>
            <ul class="list-group">
              <li
                v-for="(option, oIdx) in q.options"
                :key="oIdx"
                class="list-group-item"
                :class="{
                  'list-group-item-success': option === q.correct,
                  'list-group-item-danger': option === q.selected && option !== q.correct
                }"
              >
                {{ option }}
                <span v-if="option === q.correct" class="ms-2 badge bg-success">Correct</span>
                <span
                  v-else-if="option === q.selected && option !== q.correct"
                  class="ms-2 badge bg-danger"
                >
                  Your Answer
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "QuizHistoryPage",
  data() {
    return {
      quizHistory: [
        {
          id: 1,
          date: "2025-10-23T14:30:00",
          score: 80,
          questions: [
            {
              question: "Which language runs in a web browser?",
              options: ["Java", "C", "Python", "JavaScript"],
              correct: "JavaScript",
              selected: "JavaScript",
            },
            {
              question: "What does CSS stand for?",
              options: [
                "Central Style Sheets",
                "Cascading Style Sheets",
                "Computer Style Sheets",
                "Creative Style System",
              ],
              correct: "Cascading Style Sheets",
              selected: "Central Style Sheets",
            },
          ],
        },
        {
          id: 2,
          date: "2025-10-22T10:00:00",
          score: 100,
          questions: [
            {
              question: "Inside which HTML element do we put the JavaScript?",
              options: ["<script>", "<js>", "<javascript>", "<scripting>"],
              correct: "<script>",
              selected: "<script>",
            },
          ],
        },
      ],
    };
  },
  methods: {
    formatDate(dateStr) {
      const d = new Date(dateStr);
      return d.toLocaleString();
    },
  },
};
</script>

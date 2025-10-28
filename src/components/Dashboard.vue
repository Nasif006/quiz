<template>
  <!-- Masthead -->
  <header class="masthead bg-primary text-white text-center">
    <div class="container d-flex align-items-center flex-column">
      <!-- Avatar -->
      <img class="masthead-avatar mb-5" src="assets/img/quiz.svg" alt="User Avatar" />
      <!-- Heading -->
      <h1 class="masthead-heading text-uppercase mb-0">Welcome, {{ username || 'Quiz Taker' }}</h1>
      <!-- Divider -->
      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <!-- Subheading -->
      <p class="masthead-subheading font-weight-light mb-0">Track your progress & start new quizzes</p>
    </div>
  </header>

  <!-- Dashboard Actions -->
  <section class="page-section" id="dashboard">
    <div class="container text-center">
      <h2 class="page-section-heading text-uppercase text-secondary mb-4">Your Dashboard</h2>
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-trophy"></i></div>
        <div class="divider-custom-line"></div>
      </div>

      <!-- Buttons Row -->
      <div class="row justify-content-center mb-5">
        <div class="col-md-4 mb-3">
          <button class="btn btn-primary btn-lg w-100" @click="startNewQuiz">
            <i class="fas fa-play me-2"></i> Start New Quiz
          </button>
        </div>
        <div class="col-md-4 mb-3">
          <button class="btn btn-outline-primary btn-lg w-100" @click="viewHistory">
            <i class="fas fa-history me-2"></i> View Quiz History
          </button>
        </div>
      </div>

      <!-- Recent Quiz Results -->
      <div>
        <h4 class="text-secondary mb-3">Recent Results</h4>
        <div v-if="recentResults.length" class="table-responsive">
          <table class="table table-striped table-hover align-middle">
            <thead class="table-primary">
              <tr>
                <th>Date</th>
                <th>Score</th>
                <th>Status</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(quiz, index) in recentResults" :key="index">
                <td>{{ quiz.date }}</td>
                <td>{{ quiz.score }}%</td>
                <td>
                  <span
                    class="badge"
                    :class="quiz.passed ? 'bg-success' : 'bg-danger'"
                  >
                    {{ quiz.passed ? 'Passed' : 'Failed' }}
                  </span>
                </td>
                <td>
                  <button class="btn btn-sm btn-outline-primary" @click="viewResult(quiz.id)">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p v-else class="text-muted">No quiz history yet. Start your first quiz!</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      username: JSON.parse(sessionStorage.getItem('student')).name, // Replace with logged-in user data
      recentResults: [
        { id: 1, date: "Oct 20, 2025", score: 85, passed: true },
        { id: 2, date: "Oct 18, 2025", score: 60, passed: false },
      ],
    };
  },
  methods: {
    startNewQuiz() {
      this.$router.push("/waitingpage");
    },
    viewHistory() {
      this.$router.push("/history");
    },
    viewResult(id) {
      this.$router.push(`/result/${id}`);
    },
  },mounted() {
    
  }
};
</script>

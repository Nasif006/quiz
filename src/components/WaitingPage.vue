<template>
  <header class="masthead bg-primary text-white text-center">
    <div class="container d-flex align-items-center flex-column">
      <img class="masthead-avatar mb-4" src="assets/img/loading.svg" alt="Waiting" />
      <h1 class="masthead-heading text-uppercase mb-0">Please Wait</h1>

      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-hourglass-half"></i></div>
        <div class="divider-custom-line"></div>
      </div>

      <p class="masthead-subheading font-weight-light mb-0">
        The exam will start automatically in {{ countdown }} seconds...
      </p>
    </div>
  </header>
</template>

<script>
export default {
  name: "WaitingPage",
  data() {
    return {
      countdown: 5, // seconds before redirect
    };
  },
  mounted() {
    const timer = setInterval(() => {
      if (this.countdown > 1) {
        this.countdown--;
      } else {
        clearInterval(timer);
        this.$router.push({ name: "quiz" });
      }
    }, 1000);
  },
};
</script>

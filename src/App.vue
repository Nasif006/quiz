<template>
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
      <div class="container">
          <router-link to="/" class="navbar-brand">Home</router-link>
          <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ms-auto">
                  <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Portfolio</a></li>
                  <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
                  <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li>
                  <li class="nav-item mx-0 mx-lg-1"><router-link to="/dashboard" class="nav-link py-3 px-0 px-lg-3 rounded">Dashboard</router-link></li>
              </ul>
          </div>
      </div>
  </nav>

  <router-view></router-view>

  <!-- Footer-->
  <footer class="footer text-center">
      <div class="container">
          <div class="row">
              <!-- Footer Location-->
              <div class="col-lg-4 mb-5 mb-lg-0">
                  <h4 class="text-uppercase mb-4">Location</h4>
                  <p class="lead mb-0">
                      2215 John Daniel Drive
                      <br />
                      Clark, MO 65243
                  </p>
              </div>
              <!-- Footer Social Icons-->
              <div class="col-lg-4 mb-5 mb-lg-0">
                  <h4 class="text-uppercase mb-4">Around the Web</h4>
                  <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-facebook-f"></i></a>
                  <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-twitter"></i></a>
                  <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-linkedin-in"></i></a>
                  <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-dribbble"></i></a>
              </div>
              <!-- Footer About Text-->
              <div class="col-lg-4">
                  <h4 class="text-uppercase mb-4">About Freelancer</h4>
                  <p class="lead mb-0">
                      Freelance is a free to use, MIT licensed Bootstrap theme created by
                      <a href="http://startbootstrap.com">Start Bootstrap</a>
                      .
                  </p>
              </div>
          </div>
      </div>
  </footer>
  <!-- Copyright Section-->
  <div class="copyright py-4 text-center text-white">
      <div class="container"><small>Copyright &copy; Your Website 2023</small></div>
  </div> 
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

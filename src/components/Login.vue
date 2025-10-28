<template>
    <div class="container-xxl py-5">
      <div class="row justify-content-center">
        <div class="col-6">
          <h2 class="text-center text-primary mb-4"> Login Form</h2>
          <form method="post" class="border p-4 bg-light rounded">
            <div class="mb-3">
              <input type="text" class="form-control" id="email" name="email"
                v-model="formData.email" placeholder="Enter Email"/>
            </div>
            
            <div class="mb-3">
              <input type="password" class="form-control" id="password" name="password"
               v-model="formData.password" placeholder="Enter a password"/>
            </div>
            <button type="button" @click="login" class="btn btn-primary w-100"> Submit</button>

            <router-link to="/register" class="d-block text-center mt-3">Don't have an account? Register here</router-link>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    import DataService from "../services/DataService";
    import router from '@/router';
    export default {
      name: "LoginForm",
      data() {
        return {
          formData: {
            email: "",
            password: "",
          },
        };
      },
      methods: {
        login() {
          var data = {
            email: this.formData.email,
            password: this.formData.password
          };
          DataService.login(data)
          .then(response => {
            if(response.data.access_token){
              sessionStorage.setItem('uid', response.data.access_token);
              sessionStorage.setItem('student', JSON.stringify(response.data.student));
            }else
              alert(response.data.message)
              
              router.push({ name: 'dashboard' });
              window.location.href='/dashboard';
          })
          .catch(e => {
            console.log(e);
          });
        }
      },
    };
</script>
  
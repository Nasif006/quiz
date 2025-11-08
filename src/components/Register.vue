<template>
  <div class="container-xxl py-5">
    <div class="row justify-content-center">
      <div class="col-6">
        <h2 class="text-center text-primary mb-4">Register Form</h2>
        <form method="post" class="border p-4 bg-light rounded">
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="formData.name"
              placeholder="Enter Name"
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="formData.email"
              placeholder="Enter Email"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="formData.password"
              placeholder="Enter a password"
            />
          </div>
          <button type="button" @click="register" class="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import DataService from "../services/DataService";
import router from "@/router";

export default {
  name: "RegisterForm",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    register() {
      const data = { ...this.formData };

      DataService.register(data)
        .then((response) => {
          if (response.data.access_token) {
            // ✅ Store properly as JSON strings
            sessionStorage.setItem("uid", response.data.access_token);
            sessionStorage.setItem(
              "student",
              JSON.stringify(response.data.student)
            );

            // ✅ Redirect once
            router.push("/dashboard");
          } else {
            alert(response.data.message || "Registration failed");
          }
        })
        .catch((e) => {
          console.error("Registration error:", e);
          alert("Something went wrong during registration.");
        });
    },
  },
};
</script>

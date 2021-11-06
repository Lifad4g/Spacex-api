<template>
  <div class="div">
    Register
    <h3>Sign up</h3>
    <input type="email" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="signup">Sign up</button>
    <p>Back to login</p>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            alert("Account successfully created");
          },
          (err) => {
            alert("Could not created the accounnt" + err);
          }
        );
    },
  },
};
</script>

<style scoped>
.register {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  margin: 10px 0;
  width: 25%;
  padding: 10px;
}
button {
  margin-top: 20px;
  width: 15%;
  cursor: pointer;
  padding: 10px;
}
p {
  margin-top: 40px;
  font-size: 14px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
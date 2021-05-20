<template>
  <div class="panel">
    <form action="" novalidate class="form">
      <div>
        <label for="email">Email</label>
        <input
          v-validate="{ val: this.email, type: 'email' }"
          type="email"
          name="email"
          id="email"
          @change="updateEmail($event.target.value)"
          :value="email"
        />
      </div>
      <div>
        <label for="pwd">Password</label>
        <input
          type="password"
          name="pwd"
          id="pwd"
          @change="updatePassword($event.target.value)"
          :value="password"
        />
      </div>
      <button>Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Validate from "@/shared/validate";
@Component({
  name: "Form",
  components: {},
  directives: {
    validate: Validate,
  },
})
export default class Form extends Vue {
  email = "";
  password = "";
  updateEmail(email: string): void {
    this.email = email;
  }
  updatePassword(password: string): void {
    this.password = password;
  }
}
</script>
<style lang="scss" scoped>
.panel {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  height: 100%;
}
.form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  justify-items: center;
}
button {
  background-color: #42b983;
  width: 40%;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
}
.form > div {
  margin: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
}
.form > div > label {
  margin-top: 5px;
  margin-right: 5px;
}
</style>

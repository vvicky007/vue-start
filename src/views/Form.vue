<template>
  <div class="panel">
    <div>
      <ul>
        <li ref="signin"><router-link to="/signin">SignIn</router-link></li>
        <li ref="signup"><router-link to="/signup">SignUp</router-link></li>
      </ul>
    </div>

    <router-view class="r-view"> </router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "Form",
  components: {},
})
export default class Form extends Vue {
}
</script>
<style lang="scss" scoped>
.panel {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  align-content: center;
  justify-items: center;
  align-items: center;
  height: 100%;
  font-size: 100%;
}
.panel > div > ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-items: flex-start;
  flex-wrap: wrap;
  padding: 5px;
}
.panel > div > ul > li {
  border-bottom: 1px solid #dee2e6;
  align-content: center;
  justify-content: center;

  min-width: 150px;
}
.panel > div > ul > li > a {
  display: block;
  padding: 5px;
  text-decoration: none;
  color: #000;
}

.panel > div > ul > li > a.router-link-exact-active {
  color: #fff;
  background: #343a40;
  border-radius: 2px;
}
.r-view {
  font-size: 100%;
  margin-top: 2%;
}
// .form {
//   display: flex;
//   flex-direction: column;
//   flex-wrap: wrap;
//   justify-content: center;
//   justify-items: center;
// }
// button {
//   background-color: #42b983;
//   width: 40%;
//   margin-top: 10px;
//   margin-left: auto;
//   margin-right: auto;
// }
// .form > div {
//   margin: 10px;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   align-content: center;
// }
// .form > div > label {
//   margin-top: 5px;
//   margin-right: 5px;
// }
</style>

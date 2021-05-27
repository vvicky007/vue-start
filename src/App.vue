<template>
  <div id="app">
    <Navbar />
    <main class="main">
      <router-view />
    </main>
    <footer></footer>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue";
@Component({
  name: "Collapsible",
  components: {
    Navbar,
  },
})
export default class App extends Vue {

}
</script>

<style lang="css">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  top: 0;
  height: 100%;
}

.main {
  display: flex;
  flex-direction: row;
  margin: 8% auto 0 auto;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div class="home">
    <div class="container">
      <News v-if="getNews().length != 0" :articles="getNews()" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import News from "@/components/News.vue"; // @ is an alias to /src
// import { namespace } from "vuex-class";
import { newsStore } from "@/store";
import Iarticle from "@/interafces/news-articles";
import { firebaseStore } from "@/store";
@Component({
  name: "Home",
  components: {
    News,
  },
})
export default class Home extends Vue {
  async created(): Promise<any> {
    await newsStore.loadNews();
  }
  getNews(): Iarticle[] {
    return newsStore.news;
  }
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;

  margin: 2% auto 0 auto;
  justify-content: center;
}
</style>

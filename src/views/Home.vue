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
import { userModule } from "@/store/message";
import { newsModule } from "@/store/news";
import Iarticle from "@/interafces/news-articles";
@Component({
  name: "Home",
  components: {
    News,
  },
})
export default class Home extends Vue {
  async created() {
    console.log("inside created");
    await newsModule.loadNews();
  }
  getNews(): Iarticle[] {
    return newsModule.news;
  }
}
</script>
<style lang="scss" scoped></style>

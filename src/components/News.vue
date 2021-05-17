<template>
  <div class="content">
    <div v-for="(article, index) in articles" :key="index" class="article">
      <div class="card">
        <img
          class="card-img-top"
          v-if="article.images.length > 0"
          :src="article.images[0].url"
          alt="Card image cap"
        />
        <div class="card-body">
          <h3 class="card-title">{{ article.headline }}</h3>
          <p class="card-text">{{ article.description }}</p>
          <a :href="article.links.web.href" class="btn btn-primary">More</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Iarticle from "@/interafces/news-articles";
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class News extends Vue {
  @Prop() private msg!: string;
  @Prop() private articles!: Iarticle[];
  created() {
    console.log("inside news");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
.content {
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
  align-self: center;
  justify-self: center;
  width: 100%;
  font-size:80%;
  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.article {
  flex: 1;
  flex-grow: 1;
  flex-basis: 26.66%;
  width: auto;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  margin: 15px;
  justify-content: center;
  padding: 10px;
  flex-wrap: wrap;
  font-size: 100%;
}

.card-img-top {
  height: 40%;
  width: 100%;
}
.card {
  width: auto;
  flex-wrap: wrap;
}
.card-body {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
}
</style>

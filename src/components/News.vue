<template>
  <div class="container">
    <div class="column container row">
      <div
        v-for="article in articles"
        :key="article.description"
        class="col-md-6 col-lg-4 col-sm-12 mt-3"
      >
        <div class="card" style="width: 18rem">
          <img
            class="card-img-top"
            v-if="article.images.length>0"
            :src="article.images[0].url"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">{{ article.headline }}</h5>
            <p class="card-text">{{ article.description }}</p>
            <a :href="article.links.web.href" class="btn btn-primary">More</a>
          </div>
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
<style scoped lang="scss"></style>

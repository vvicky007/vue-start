import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { getNews } from "@/api/news";
import Iarticle from "@/interafces/news-articles";
import store from "@/store";
@Module({ name: "news", namespaced: true, store })
export default class NewsModule extends VuexModule {
  // state
  news: Iarticle[] = [];
  url = [
    "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/news",
    "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/news",
    "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/news",
    "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/news",
    "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/news",
  ];
  // mutations
  @Mutation
  setNews(articles: Iarticle[]) {
    this.news = articles;
  }

  // actions
  @Action({ commit: "setNews" })
  async loadNews() {
    const articles: any = await getNews(this.url);
    return articles;
  }
}

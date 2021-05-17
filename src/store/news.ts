import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";
import { getNews } from "@/api/news";
import Iarticle from "@/interafces/news-articles";
@Module()
class NewsModule extends VuexModule {
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
    console.log("inside mut");
    console.log(this.news);
  }

  // actions
  @Action
  async loadNews() {
    const articles: any = await getNews(this.url);
    this.setNews(articles);
  }
}

// register module (could be in any file)
import store from "@/store/store";
export const newsModule: any = new NewsModule({ store, name: "news" });
// export default UserModule

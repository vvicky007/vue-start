import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import { newsModule } from "@/store/news";
import sinon from "sinon";
import Vuex from "vuex";
import * as news_api from "@/api/news";
import mockData from "../../mockdata/news";
const Vue = createLocalVue();
Vue.use(Vuex);
describe("News module", () => {
  let stub, mock, expectedUrl: string[];
  afterEach(() => {
    sinon.restore();
  });
  beforeEach(() => {
    expectedUrl = [
      "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/news",
      "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/news",
      "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/news",
      "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/news",
      "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/news",
    ];
  });
  it("Initial State Check", () => {
    expect(newsModule.news).toHaveLength(0);
    expect(newsModule.url).toEqual(expectedUrl);
  });
  it("actions should be invoked", async () => {
    stub = sinon.stub(news_api, "getNews");
    mock = sinon.mock(newsModule);
    stub.returns(Promise.resolve(mockData));
    await newsModule.loadNews();
    expect(newsModule.news).toStrictEqual(mockData);
  });
  it("mutate should not have any side effect", () => {
    const data = [{ a: "1232" }];
    newsModule.setNews(data);
    expect(newsModule.news).toEqual(data);
  });
});

import { shallowMount } from "@vue/test-utils";
import sinon from "sinon";
import * as news_api from "@/api/news";
import mockData from "../mockdata/news";
import Home from "@/views/Home.vue";

describe("Home.vue", () => {
  let wrapper: any, stub;
  beforeEach(() => {
    stub = sinon.stub(news_api, "getNews");
    stub.returns(Promise.resolve(mockData));
    wrapper = shallowMount(Home);
  });
  afterEach(() => {
    sinon.restore();
  });
  it("Home Component render, compare shallow mount to snapshot", async () => {
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.getNews()).toEqual(mockData);
    await wrapper.vm.$nextTick();
    // mock.expects('loadNews').once()
  });
});

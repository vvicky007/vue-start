import { shallowMount, mount, createLocalVue, Wrapper } from "@vue/test-utils";
import Navbar from "@/components/Navbar.vue";
import VueRouter from "vue-router";
import { routes } from "@/router/index";
const localVue = createLocalVue();
localVue.use(VueRouter);
describe("Navbar.vue", () => {
  let router, wrapper: Wrapper<Navbar>;
  beforeEach(() => {
    router = new VueRouter({ routes, mode: "history" });
    wrapper = mount(Navbar, {
      router,
    });
  });
  it("should match the snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("Should display proper header", () => {
    const home = wrapper.find("h1");
    expect(home.text()).toBe("Feel Football");
  });
  it("Should display proper link names", () => {
    const links = wrapper.findAll("a");
    expect(links.length).toBe(3);
    expect(links.at(0).text()).toBe("Home");
    expect(links.at(1).text()).toBe("Leagues");
    expect(links.at(2).text()).toBe("Signin");
  });
  it("Links should contain proper links and show active links", async () => {
    const links = wrapper.findAll("a");
    await links.at(0).trigger("click");
    await wrapper.vm.$nextTick();
    expect(links.at(0).attributes().href).toEqual("/");
    expect(links.at(0).attributes().class).toContain(
      "router-link-exact-active"
    );
    expect(links.at(0).attributes().class).toContain("router-link-active");
    await links.at(1).trigger("click");
    await wrapper.vm.$nextTick();
    expect(links.at(1).attributes().href).toEqual("/leagues");
    expect(links.at(1).attributes().class).toContain(
      "router-link-exact-active"
    );
    expect(links.at(1).attributes().class).toContain("router-link-active");
    expect(wrapper.vm.$router.currentRoute.name).toEqual("Leagues");
    await links.at(2).trigger("click");
    await wrapper.vm.$nextTick();
    expect(links.at(2).attributes().href).toEqual("/form");
    expect(links.at(2).attributes().class).toContain(
      "router-link-exact-active"
    );
    expect(links.at(2).attributes().class).toContain("router-link-active");
    expect(wrapper.vm.$router.currentRoute.name).toEqual("Form");
  });

  afterEach(() => {
    wrapper.destroy();
  });
});

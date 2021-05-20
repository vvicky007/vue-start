import { shallowMount, mount, createLocalVue, Wrapper } from "@vue/test-utils";
import Form from "@/views/Form.vue";
describe("Form.vue", () => {
  let wrapper: Wrapper<Form>;
  beforeEach(() => {
    wrapper = mount(Form);
  });
  it("Should match the snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("Should contain an input", () => {
    const inp = wrapper.findAll("input");
    expect(inp.length).toBe(2);
  });
  it("should be red when an invalid input is given", async () => {
    const inp = wrapper.findAll("input");
    await inp.at(0).setValue("dawd");
    await inp.at(0).trigger("change");
    expect(inp.at(0).attributes().style).toBe("border: 2px solid red;");
  });
  it("should be normal when an valid input is given", async () => {
    const inp = wrapper.findAll("input");
    await inp.at(0).setValue("dawd@");
    await inp.at(0).trigger("change");
    expect(inp.at(0).attributes().style).toBe("");
  });
  it("should take user password", async () => {
    const inp = wrapper.findAll("input");
    await inp.at(1).setValue("dawd@");
    await inp.at(1).trigger("change");
    expect(wrapper.vm.$data.password).toBe("dawd@");
  });
  afterEach(() => {
    wrapper.destroy();
  });
});

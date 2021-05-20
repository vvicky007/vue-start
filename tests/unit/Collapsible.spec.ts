import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import Collapsible from "@/shared/collapsible.vue";
import Vue from "vue";
describe("Collapsible.vue", () => {
  it("should collapse on click", async () => {
    const wrapper = mount(Collapsible, {
      slots: {
        default: '<div class="mock">Inside Collapsible</div>',
      },
    });
    expect(wrapper.findAll(".mock")).toHaveLength(1);
    const span = wrapper.find("span");
    expect(wrapper.vm.$data.open).toBe(true);
    await span.trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$data.open).toBe(false);
    expect(wrapper.findAll(".mock")).toHaveLength(0);
  });
});

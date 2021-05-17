<template>
  <div>
    <div class="header">
      <span vif="open" @click="toggle()">Collapse</span>
    </div>
    <slot v-if="open"> </slot>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "Collapsible",
})
export default class Collapsible extends Vue {
  open = true;
  toggle(): void {
    this.open = !this.open;
  }
}
</script>
<style>
.header {
  position: fixed;
}
</style>

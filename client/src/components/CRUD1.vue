<template>
  <div>
    <PanelCRUD>
      <div slot="title">{{ title + "felipe" }}</div>
      <div slot="header">
        ahahha
      </div>
      <div slot="footer">
        ooter
      </div>
    </PanelCRUD>
  </div>
</template>

<script>
import PanelCRUD from "@/components/PanelCRUD.vue";
export default {
  data() {
    return {
      title: "Felipe CRUD1"
    };
  },
  components: {
    PanelCRUD
  }
};
</script>

<style></style>
